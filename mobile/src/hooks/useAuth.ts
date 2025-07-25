import React, { useContext } from 'react';
import AuthContext  from '../contexts/AuthContext';
import { AuthContextType } from '../types/authContextType';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  return context;
};
