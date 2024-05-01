import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSession, signIn } from 'next-auth/react';
import GoogleButton from 'components/GoogleButton';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (session) {
      router.push(`/dashboard/${currentYear}/${currentMonth}`);
    }
  }, [currentMonth, currentYear, router, session]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col-reverse justify-center items-center">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Budget Buddy
          </h1>
          <Image
            className="w-32 h-32"
            width={32}
            height={32}
            src="/images/finance-insurance.svg"
            alt="logo"
          />
        </div>

        <GoogleButton />
      </div>
    </section>
  );
}
