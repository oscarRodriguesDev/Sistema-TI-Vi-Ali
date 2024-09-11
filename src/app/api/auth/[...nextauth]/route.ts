import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const baseUrl = process.env.NEXTAUTH_URL; // Obtém a URL base
          const response = await fetch(`${baseUrl}/api/auth/autenticator`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (!response.ok) {
            throw new Error('Invalid credentials');
          }

          const user = await response.json();

          if (user && user.email) { // Certifique-se de que o userData tem um campo 'email' ou similar
            return user;
          }

          return null;
        } catch (error) {
          console.error('Error during credentials authentication:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Página de login personalizada
  },
  session: {
    strategy: 'jwt', // Utilizar JWT para a sessão
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        // Adicione outros dados que você deseja armazenar no JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email as string,
          // Adicione outros dados que você deseja incluir na sessão
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
