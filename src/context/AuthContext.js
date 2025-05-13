import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('profile_id'));

  const login = (profileId) => {
    Cookies.set('profile_id', profileId, { expires: 1 }); // Set cookie for 1 day
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove('profile_id');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!Cookies.get('profile_id'));
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
