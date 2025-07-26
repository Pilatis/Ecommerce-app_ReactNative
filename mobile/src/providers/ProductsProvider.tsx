import React, { useCallback, useState } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import useApi from '../hooks/useApi';
import { ProductType } from '../types/dataMock';

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [productsSale, setProductsSale] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingProductsSale, setLoadingProductsSale] =
    useState<boolean>(false);

  const getProducts = useCallback(async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await api.get('/products');

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [api]);

  const getProductsSale = useCallback(async () => {
    setLoadingProductsSale(true);

    try {
      const response = await api.get('/saleProducts');

      if (response.status === 200) {
        setProductsSale(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingProductsSale(false);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ getProducts, products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
