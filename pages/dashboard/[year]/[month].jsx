import React from 'react';
import { useRouter } from 'next/router';

import Dashboard from 'components/Dashboard/Dashboard';
import withAuth from 'hoc/withAuth';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

function DashboardPage({ expanses }) {
  const router = useRouter();
  const { year, month } = router.query;

  return (
    <div>
      <Dashboard expanses={expanses} year={year} month={month} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { supabaseAccessToken } =
    (await getServerSession(context.req, context.res, authOptions)) || {};

  if (!supabaseAccessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const req = await fetch('http://localhost:3000/api/dashboard/2023/february', {
    headers: {
      'supabase-access-token': supabaseAccessToken,
    },
  });

  const res = await req.json();
  return {
    props: {
      expanses: res.data.expenses,
    },
  };
}

export default withAuth(DashboardPage);
