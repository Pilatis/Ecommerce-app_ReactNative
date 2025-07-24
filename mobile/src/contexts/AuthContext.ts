import React, { createContext } from 'react'
import { AuthContextType } from '../types/authContextType';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
