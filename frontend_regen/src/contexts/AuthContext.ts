import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  authenticated: boolean;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('access_token', token);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);