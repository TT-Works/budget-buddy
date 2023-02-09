import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import GoogleButton from 'components/GoogleButton';
import Dropdown from 'components/Landing/LandingNav/Dropdown';
import Link from 'next/link';

export default function LandingNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session } = useSession();

  return (
    <header>
      <nav className="bg-white border-gray-200 px-6 lg:px-10 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <Link href={'/'} className="flex justify-start items-center">
            <Image
              src="images/finance.svg"
              width={32}
              height={32}
              className="mr-3 h-8"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Budget Buddy
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {session ? (
              <>
                <button
                  onMouseEnter={() => setIsOpen(true)}
                  id="dropdown-button"
                  className="relative flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-600 duration-300">
                  <Image
                    id="dropdown-button"
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                    src={session.user.image}
                    alt="user photo"
                  />
                  <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
                </button>
              </>
            ) : (
              <GoogleButton />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

// Create a tooltip triangle
const meow = (
  <div className="absolute w-3 h-3 bg-white transform rotate-45 -top-1.5 -left-1.5" />
);
