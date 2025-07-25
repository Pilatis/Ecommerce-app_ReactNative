import React, { useCallback, useState } from 'react';
import CategoryContext from '../contexts/CategoryContex';
import useApi from '../hooks/useApi';
import { CategoryProduct } from '../types/dataMock';

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [categories, setCategories] = useState<CategoryProduct[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategories = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get('/categories');

      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [api]);
  return (
    <CategoryContext.Provider value={{ getCategories, categories, loading }}>{children}</CategoryContext.Provider>
  );
};

export default CategoryProvider;
