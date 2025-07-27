import React, { useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import { User } from '../types/userContextType';
import useApi from '../hooks/useApi';
import { CreateUserData } from '../types/authContextType';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const createUser = async (data: CreateUserData) => {
   setLoading(true);

   try {
    const response = await api.post('/users');

    if (response.status === 200) {
      setUser(response.data)
    }
   } catch (error) {
     console.error(error)
   } finally {
    setLoading(false)
   }
  };

  const login = async () => {

  };

  const logout = async () => {

  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
