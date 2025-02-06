// components/AuthProvider.tsx

import { ReactNode } from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

// Tipos das props
interface AuthProviderProps {
  children: ReactNode;
}

// Função de AuthProvider Server-Side
export async function AuthProvider({ children }: AuthProviderProps) {
  const session = await getServerSession(authOptions);

  // Se não estiver autenticado, redireciona para login
/*   if (!session) {
    redirect('/');
  } */


  return <>{children}</>;
}
