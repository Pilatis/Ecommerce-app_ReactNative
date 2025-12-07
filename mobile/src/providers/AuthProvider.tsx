import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import { User } from '../types/userContextType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../hooks/useApi';
import { CreateUserData, LoginData } from '../types/authContextType';
import Toast from 'react-native-toast-message';

const USER_STORAGE_KEY = '@ecommerceApp:user';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [loadingLogout, setLoadingLogout] = useState<boolean>(false);

  const createUser = async (data: CreateUserData): Promise<'success' | 'failure'> => {
    setLoading(true);

    try {
      const response = await api.post('/api/auth/register', data);

      if (response.status === 201 && response.data?.success) {
        const user = response.data.data;
        setUser(user);
        Toast.show({
          type: 'success',
          text1: 'Conta criada com sucesso!'
        });
        return 'success';
      } else {
        const errorMessage = response.data?.error?.message || 'Não foi possível criar sua conta';
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: errorMessage
        });
        return 'failure';
      }
    } catch (error: any) {
      console.error(error);
      const errorMessage = error?.errors?.error?.message || error?.errors?.message || 'Erro inesperado ao criar conta';
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: errorMessage
      });
      return 'failure';
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginData): Promise<'success' | 'failure'> => {
    setLoadingLogin(true);

    try {
      const response = await api.post('/api/auth/login', data);

      if (response.status === 200 && response.data?.success) {
        const { user, token } = response.data.data;
        await AsyncStorage.setItem(
          USER_STORAGE_KEY,
          JSON.stringify({ token, user })
        );
        setUser(user);
        setIsAuthenticated(true);
        Toast.show({
          type: 'success',
          text1: 'Login realizado com sucesso!'
        });
        return 'success';
      } else {
        const errorMessage = response.data?.error?.message || 'Não foi possível fazer seu login';
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: errorMessage
        });
        return 'failure';
      }
    } catch (error: any) {
      console.error('Error in starting login:', error);
      const errorMessage = error?.errors?.error?.message || error?.errors?.message || 'Erro ao fazer login';
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: errorMessage
      });
      return 'failure';
    } finally {
      setLoadingLogin(false);
    }
  };

  const logout = async () => {
    setLoadingLogout(true);

    try {
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      setUser(null);
      setIsAuthenticated(false);
      Toast.show({
        type: 'success',
        text1: 'Logout realizado com sucesso!'
      });
    } catch (error) {
      console.error('Erro no logout:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao sair'
      });
    } finally {
      setLoadingLogout(false);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      try {
        const storedData = await AsyncStorage.getItem(USER_STORAGE_KEY);
        if (storedData) {
          const { user, token } = JSON.parse(storedData);
          if (user && token) {
            setUser(user);
            setIsAuthenticated(true);
          } else {
            // Dados inválidos, limpar storage
            await AsyncStorage.removeItem(USER_STORAGE_KEY);
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        await AsyncStorage.removeItem(USER_STORAGE_KEY);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, createUser, login, logout, loadingLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
