import LandingHero from 'components/Landing/LandingHero';
import LandingNav from 'components/Landing/LandingNav';
import withAuth from 'hoc/withAuth';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useContext } from 'react';

function Home({}) {
  return (
    <div>
      <Head>
        <title>Budget Buddy</title>
        <meta name="description" content="Budget Buddy Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingNav />
        <LandingHero />
      </main>
    </div>
  );
}

export default withAuth(Home);
