'use client';

import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn('google')}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}
