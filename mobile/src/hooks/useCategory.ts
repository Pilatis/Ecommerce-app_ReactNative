import React, { useContext } from 'react';
import CategoryContext from '../contexts/CategoryContex';
import { CategoryContextType } from '../types/categoryContextType';

const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);

  return context;
};

export default useCategory;
