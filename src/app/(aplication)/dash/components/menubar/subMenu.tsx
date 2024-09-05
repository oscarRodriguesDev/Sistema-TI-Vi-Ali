export function SubMenu() {
    return (
      <div className= "z-20 bg-transparent  dark:bg-gray-900 fixed top-[6%] left-[17%] mx-auto p-6 rounded-xl shadow-xl w-[80%] transform transition-all duration-300 ease-in-out hover:shadow-2xl">
        <ul className="flex w-full justify-between items-center">
          <li className="flex-1">
            <button className="w-[15%] bg-gradient-to-r from-slate-300 to-slate-500 dark:from-gray-700 dark:to-gray-900 text-gray-900 dark:text-gray-100 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105">
              Item 1
            </button>
          </li>
          <li className="flex-1 flex justify-end">
            <button className="w-[15%] bg-gradient-to-r from-slate-300 to-slate-500 dark:from-gray-700 dark:to-gray-900 text-gray-900 dark:text-gray-100 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105">
              Item 2
            </button>
          </li>
        </ul>
      </div>
    );
  }
  