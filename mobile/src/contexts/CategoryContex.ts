import React, { createContext } from 'react';
import { CategoryContextType } from '../types/categoryContextType';

const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

export default CategoryContext;
