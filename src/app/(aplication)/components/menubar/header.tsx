'use client'
import { useTheme } from '@/app/theme/ThemeContext'; // Certifique-se de ajustar o caminho

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full bg-white  backdrop-blur-md dark:bg-gray-800 dark: text-gray-900 dark:text-gray-100 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/dashboard">Painel Admin</a>
        </div>

        {/* Opções do Usuário */}
        <div className="flex items-center space-x-4">
          {/* Ícone de Notificações */}
          <button className="relative p-2 rounded-md bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500">
            🔔
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>

          {/* Botão para alternar o tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Foto do Usuário e Status */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-gray-900 dark:text-gray-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 4a4 4 0 11-8 0 4 4 0 018 0zm-2 8a6 6 0 00-4.472 2.164A6.036 6.036 0 0110 18a6.036 6.036 0 016.472-3.836A6 6 0 0010 14z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden md:inline-block font-medium">
              John Doe
            </span>
          </div>

          {/* Logout */}
          <a
            href="/logout"
            className="px-4 py-2 rounded-md bg-red-500 dark:bg-red-700 text-white hover:bg-red-600 dark:hover:bg-red-800"
          >
            Logout
          </a>
        </div>
      </div>
    </header>
  );
}
