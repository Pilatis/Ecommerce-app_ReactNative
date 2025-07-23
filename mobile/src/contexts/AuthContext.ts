import React, { createContext } from 'react'
import { AuthContextType } from '../types/authContextType';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
