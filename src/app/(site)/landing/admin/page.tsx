'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false, // Evita redirecionamento automático
      email,
      password,
    });

    if (result?.error) {
      setError('Credenciais inválidas');
    } else {
      // Redirecionar manualmente para a dashboard após login bem-sucedido
      window.location.href = '/dash/dashboard';
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 py-2 border rounded-lg"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Login with Email
        </button>
      </form>

      <button
        onClick={() => signIn('google')}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}

