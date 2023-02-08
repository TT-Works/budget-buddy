import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onWindowClick(event) {
      if (
        event.target.id !== 'default-sidebar' &&
        event.target.id !== 'sidebar-button'
      ) {
        setIsOpen(false);
      }
    }
    window.addEventListener('click', onWindowClick);
    return () => window.removeEventListener('click', onWindowClick);
  }, [setIsOpen]);

  return (
    <>
      <button
        id="sidebar-button"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg
          id="sidebar-button"
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={
          isOpen
            ? 'fixed top-0 left-0 z-40 w-64 h-screen'
            : 'hidden sm:translate-x-0 sm:block sm:fixed sm:top-0 sm:left-0 sm:z-40 sm:w-64 sm:h-screen sm:transition-transform'
        }
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-start items-center mb-10">
            <Image
              src="/images/finance.svg"
              width={32}
              height={32}
              className="mr-3 h-8"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Budget Buddy
            </span>
          </div>
          <ul className="space-y-2 ">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-red-700 text-start">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
