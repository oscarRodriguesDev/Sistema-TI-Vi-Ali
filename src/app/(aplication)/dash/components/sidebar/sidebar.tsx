'use client';

export function Sidebar() {
  return (
    <aside className=" fixed top-16 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h2>
      </div>
      <hr />
      <nav className="mt-5">
        <ul className="space-y-2">
          <li>
            <a href="/dash/dashboard" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Visão Geral
            </a>
          </li>
          <hr className="opacity-5"/>
         
          <li>
            <a href="/dash/analitics" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Analytics
            </a>
          </li>
          <hr className="opacity-5"/>
          <li>
            <a href="/dash/settings" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Configurações
            </a>
          </li>
          <hr className="opacity-5"/>
          <li>
            <a href="/dash/perfil" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Perfil
            </a>
          </li>
          <hr className="opacity-5"/>
          <li>
            <a href="/dash/suporte" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Suporte
            </a>
          </li>
          <hr className="opacity-5"/>
        </ul>
      </nav>
    </aside>
  );
}
