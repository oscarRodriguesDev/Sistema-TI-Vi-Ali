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
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError('❌ Credenciais inválidas, tente novamente.');
    } else {
      router.push('/dash/dashboard'); // Redirecionamento com Next.js
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Bem-vindo de volta! 👋</h2>

        {/* Formulário de Login */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Mensagem de erro */}
          {error && <p className="mt-2 text-center text-sm font-medium text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
          >
            Entrar
          </button>
        </form>

        {/* Separador */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-500">ou</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Botão de Login com Google */}
        <button
          onClick={() => signIn('google')}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M23.494 12.276c0-.857-.076-1.5-.239-2.143H12.27v4.06h6.558c-.318 1.71-1.57 3.12-3.34 3.99v3.3h5.39c3.15-2.9 4.61-7.09 4.61-9.21z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M12.27 23.983c3.94 0 7.235-1.302 9.63-3.54l-5.39-3.3c-1.438.95-3.28 1.51-4.24 1.51-3.17 0-5.85-2.08-6.83-4.86H.869v3.34c2.38 4.56 7.19 7.85 11.4 7.85z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M5.44 14.8c-.34-1.02-.52-2.11-.52-3.27s.18-2.25.52-3.27V4.92H.868C-.048 6.94-.37 8.92-.37 11c0 2.08.322 4.06 1.24 6.08L5.44 14.8z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M12.27 3.77c2.24 0 3.98.96 4.91 1.76l3.64-3.64C18.99.32 16.15-.04 12.27-.04c-4.2 0-9.02 3.3-11.4 7.86l4.57 3.32c.99-2.78 3.67-4.86 6.83-4.86z"
              clipRule="evenodd"
            />
          </svg>
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
