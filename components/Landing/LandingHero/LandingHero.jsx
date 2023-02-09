import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LandingHero() {
  const { data: session } = useSession();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 lg:ml-14 max-lg:mx-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Take Control of Your Finances
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">
            Our budget tracking app makes it easy for you to keep track of your
            income and expenses, so you can see where your money is going and
            make smarter financial decisions. With our app, you&apos;ll be able
            to set and stick to a budget, track your progress, and get a clear
            picture of your financial health. It&apos;s perfect for individuals
            and families looking to get a handle on their finances.
          </p>
          {/* TODO: Make this link to Plan selections */}
          {session ? (
            <Link
              href="/dashboard"
              className="max-lg:mx-auto inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              To your dashboard
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </Link>
          ) : (
            <Link
              href="/login"
              className="max-lg:mx-auto inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Start Tracking Your Budget Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </Link>
          )}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:flex-row-reverse">
          <Image
            className="object-contain"
            src="/images/landing-hero.png"
            alt="mockup"
            width={390}
            height={390}
          />
        </div>
      </div>
    </section>
  );
}
