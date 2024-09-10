export function SubMenu() {
  return (
    <div className="z-20 bg-transparent dark:bg-gray-900 fixed top-[10%] left-[5%] md:left-[17%] mx-auto p-4 md:p-6 rounded-xl shadow-xl w-[95%] md:w-[80%] lg:w-[60%] transform transition-all duration-300 ease-in-out hover:shadow-2xl">
      <ul className="flex flex-col md:flex-row w-full justify-between items-center">
        <li className="w-full md:flex-1 mb-4 md:mb-0">
          <button className="w-full md:w-[15%] bg-gradient-to-r from-slate-300 to-slate-500 dark:from-gray-700 dark:to-gray-900 text-gray-900 dark:text-gray-100 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105">
            Item 1
          </button>
        </li>
        <li className="w-full md:flex-1 md:flex md:justify-end">
          <button className="w-full md:w-[15%] bg-gradient-to-r from-slate-300 to-slate-500 dark:from-gray-700 dark:to-gray-900 text-gray-900 dark:text-gray-100 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105">
            Item 2
          </button>
        </li>
      </ul>
    </div>
  );
}
