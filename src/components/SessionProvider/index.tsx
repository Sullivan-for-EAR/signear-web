import React from 'react';
import { useEffect, useMemo, useCallback } from 'react';
import { useStore } from 'react-redux';
import Cookies from 'universal-cookie';

export const SessionProvider: React.FC = ({ children }) => {
  const store = useStore();
  const cookies = useMemo(() => new Cookies(), []);

  const setSessionToken = useCallback(
    (token: string) => cookies.set('_access_token', token, { path: '/' }),
    [cookies]
  );
  const removeSessionToken = useCallback(() => {
    cookies.remove('_access_token', { path: '/' });
  }, [cookies]);

  useEffect(() => {
    function handleSessionState() {
      const { session } = store.getState();
      if (session.accessToken) {
        setSessionToken(session.accessToken);
      } else {
        removeSessionToken();
      }
    }
    const unsubscribe = store.subscribe(() => {
      handleSessionState();
    });
    handleSessionState();

    return () => {
      unsubscribe();
    };
  }, [store, setSessionToken, removeSessionToken]);

  return <>{children}</>;
};
