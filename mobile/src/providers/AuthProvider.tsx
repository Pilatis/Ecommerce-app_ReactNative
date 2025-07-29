import React, { useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import { User } from '../types/userContextType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../hooks/useApi';
import { CreateUserData, LoginData } from '../types/authContextType';

const USER_STORAGE_KEY = '@ecommerceApp:user';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [loadingLogout, setLoadingLogout] = useState<boolean>(false);
  
  const createUser = async (data: CreateUserData) => {
   setLoading(true);

   try {
    const response = await api.post('/users', data);

    if (response.status === 200) {
      setUser(response.data)
    }
   } catch (error) {
     console.error(error)
   } finally {
    setLoading(false)
   }
  };

  const login = async (data: LoginData) => {
    setLoadingLogin(true);

    try {
      const response = await api.post('/login', data);

      if (response.status === 200) {
        const userData = response.data;
        await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error in starting login:', error);
    } finally {
      setLoading(false);
    }
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
