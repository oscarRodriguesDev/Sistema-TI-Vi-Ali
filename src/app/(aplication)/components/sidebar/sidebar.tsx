'use client';

export function Sidebar() {
  return (
    <aside className=" fixed top-16 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h2>
      </div>
      <nav className="mt-5">
        <ul className="space-y-2">
          <li>
            <a href="/dashboard/overview" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Visão Geral
            </a>
          </li>
          <li>
            <a href="/dashboard/analytics" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Analytics
            </a>
          </li>
          <li>
            <a href="/dashboard/settings" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Configurações
            </a>
          </li>
          <li>
            <a href="/dashboard/profile" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Perfil
            </a>
          </li>
          <li>
            <a href="/dashboard/support" className="block p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
              Suporte
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
