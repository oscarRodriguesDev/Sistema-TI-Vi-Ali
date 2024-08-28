'use client'
import React from 'react';
import { useTheme } from '@/app/theme/ThemeContext'; // Certifique-se de ajustar o caminho


export function Header() {
  const { theme, toggleTheme } = useTheme();


  

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Meu Sistema</a>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex space-x-4">
          <a href="/home" className="hover:text-blue-500 dark:hover:text-blue-300">
            Home
          </a>
          <a href="/about" className="hover:text-blue-500 dark:hover:text-blue-300">
            Sobre
          </a>
          <a href="/services" className="hover:text-blue-500 dark:hover:text-blue-300">
            Serviços
          </a>
          <a href="/contact" className="hover:text-blue-500 dark:hover:text-blue-300">
            Contato
          </a>
        </nav>

        {/* Opções do Usuário */}
        <div className="flex items-center space-x-4">
          {/* Botão para alternar o tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Link para Login */}
          <a
            href="/admin"
            className="px-4 py-2 rounded-md bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-800"
          >
            Admin Login
          </a>
        </div>
    
      </div>
    </header>
  );
}
