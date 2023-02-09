import LandingPage from 'components/Landing/LandingPage';
import withAuth from 'hoc/withAuth';
import Head from 'next/head';
import React from 'react';

function Home({}) {
  return (
    <div>
      <Head>
        <title>Budget Buddy</title>
        <meta name="description" content="Budget Buddy Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </div>
  );
}

export default withAuth(Home);
