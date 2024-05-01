import React from 'react';

//TODO: Delete this if using next-auth
export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  const [user, setUser] = React.useState('');

  useIsomorphicLayoutEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) {
      setUser(user);
    }
  }, []);

  const value = React.useMemo(() => [user, setUser], [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
