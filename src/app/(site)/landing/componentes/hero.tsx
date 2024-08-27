'use client'
import React from 'react';
import { useTheme } from '@/app/theme/ThemeContext';
import Image from 'next/image';
import hero from '../../../../../public/hero.jpg'

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className={`relative h-screen flex items-center justify-center ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    } text-white`}>
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image src={hero}
        width={300}
        height={300}
        alt='teste'
          className="w-full h-full object-cover opacity-50"
          quality={100}
        />

    
     
      </div>

      {/* Conteúdo da Seção Hero */}
      <div className="relative z-10 text-center p-4 md:p-8">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Transforme Seu Futuro com <span className="text-blue-400">Inovação</span>
        </h1>
        <p className={`text-lg md:text-2xl mb-8 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Descubra as soluções que vão revolucionar o seu negócio.
        </p>
        <a
          href="/get-started"
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ${
            theme === 'dark'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Comece Agora
        </a>
      </div>
    </section>
  );
}

