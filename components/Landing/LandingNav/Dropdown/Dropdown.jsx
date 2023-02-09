import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Dropdown({ isOpen, setIsOpen }) {
  // Close the dropdown when the user clicks outside of it
  React.useEffect(() => {
    function onWindowClick(event) {
      if (
        event.target.id !== 'dropdown' &&
        event.target.id !== 'dropdown-button'
      ) {
        setIsOpen(false);
      }
    }
    window.addEventListener('click', onWindowClick);
    return () => window.removeEventListener('click', onWindowClick);
  }, [setIsOpen]);

  return (
    <div
      id="dropdown"
      onMouseLeave={() => setIsOpen(false)}
      className={
        isOpen
          ? 'z-10 absolute -right-5 top-12 bg-white rounded-lg shadow w-44 dark:bg-gray-700'
          : 'hidden'
      }>
      <div className="absolute w-3 h-3 bg-white dark:bg-gray-700 transform rotate-45 -top-1.5 right-[1.85rem]" />
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton">
        <li>
          <Link
            href="/dashboard"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
            Dashboard
          </Link>
        </li>

        <li>
          <a
            onClick={() => signOut()}
            className="block px-4 py-2 dark:hover:text-white hover:bg-red-600 dark:hover:bg-red-600 w-full">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}
