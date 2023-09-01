// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function StreameruseAuth() {
  return useContext(AuthContext);
}

export function StreamerAuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('StreamerToken'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyToken() {
      if (token) {
        try {
          const response = await fetch('https://api.dcvip.one/streamer/protected', {
            method: 'GET',
            headers: {
              Authorization: token,
            },
          });

          if (response.ok) {
            setLoading(false);
          } else {
            logout();
            setLoading(false);
          }
        } catch (error) {
          console.error('Token verification error:', error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }

    verifyToken();
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
