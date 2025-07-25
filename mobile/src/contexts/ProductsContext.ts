import { createContext } from 'react';
import { ProductsContextType } from '../types/productsContextType';

const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

export default ProductsContext;
