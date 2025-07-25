import { useContext } from 'react';
import { ProductsContextType } from '../types/productsContextType';
import ProductsContext from '../contexts/ProductsContext';

const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);

  return context;
};

export default useProducts;
