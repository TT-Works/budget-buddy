import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loading from 'components/Loading';

const MAX_TIMEOUT = 3 * 1000;

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { data: session } = useSession();
    let timeout;

    useEffect(() => {
      clearTimeout(timeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeout = setTimeout(() => {
        setLoading(false);
        if (!session) {
          setLoading(false);
          router.push('/login');
        }
      }, MAX_TIMEOUT);

      if (session) {
        setLoading(false);
      }

      return () => {
        clearTimeout(timeout);
      };
    }, [router, session]);

    if (loading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
