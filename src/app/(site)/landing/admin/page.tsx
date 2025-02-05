'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false, 
        email,
        password,
      });

      if (result?.error) {
        setError('❌ Credenciais inválidas, tente novamente.');
      } else {
        //router.push('/dash/dashboard');
      }
    } catch (err) {
      setError('❌ Erro ao tentar fazer login.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Bem-vindo de volta! 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-600">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {error && <p className="mt-2 text-center text-sm font-medium text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
          >
            Entrar
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-500">ou</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={() => signIn('google')}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
