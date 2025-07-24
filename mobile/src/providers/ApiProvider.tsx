import React from 'react'
import ApiContext from '../contexts/ApiContext';
import axios, { AxiosInstance } from 'axios';

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiClient: AxiosInstance = axios.create({
        baseURL: apiBaseUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    })
  return (
    <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>
  )
}

export default ApiProvider