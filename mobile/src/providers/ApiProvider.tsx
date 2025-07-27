import React, { useCallback } from 'react';
import ApiContext from '../contexts/ApiContext';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ApiContextType } from '../types/apiContextType';

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiBaseURL = 'http://10.0.2.2:3001';
  const apiClient: AxiosInstance = axios.create({
    baseURL: apiBaseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

 const get = useCallback(
    async (path: string, params?: any): Promise<ReturnType<any>> => {
      try {
        const response: AxiosResponse = await apiClient.get(path, {
          params
        });

        return {
          data: response.data,
          status: response.status
        };
      } catch (error) {
        const axiosError = error as AxiosError;
        return {
          errors: axiosError.response?.data || axiosError.message,
          status: axiosError.response?.status || 500
        };
      }
    }, [apiClient]);

  const post = useCallback(
    async (path: string, params?: any): Promise<ReturnType<any>> => {
      try {
        const response = await apiClient.post(path, params);

        return {
          data: response.data,
          status: response.status
        };
      } catch (error) {
        const axiosError = error as AxiosError;
        return {
          errors: axiosError.response?.data || axiosError.message,
          status: axiosError.response?.status || 500
        };
      }
    }, [apiClient]);

  const contextValue: ApiContextType = {
    api: { get, post }
  };
  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
