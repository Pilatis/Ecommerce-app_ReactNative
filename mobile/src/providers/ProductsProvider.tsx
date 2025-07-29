import React, { useCallback, useState } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import useApi from '../hooks/useApi';
import { ProductType } from '../types/dataMock';

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [productDetails, setProductDetails] = useState<ProductType | null>(
    null
  );
  const [productsSale, setProductsSale] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingProductDetail, setLoadingProductDetail] =
    useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getProducts = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(false);

    try {
      const response = await api.get('/products');

      if (response.status === 200) {
        setProducts(response.data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [api]);

  const getProductDetails = useCallback(
    async (
      productType: 'products' | 'saleProducts',
      id: number
    ): Promise<ProductType | null> => {
      setLoadingProductDetail(true);

      try {
        const response = await api.get(`/${productType}/${id}`);

        if (response.status === 200) {
          setProductDetails(response.data);
          return response.data;
        } else {
          return null
        }
      } catch (error) {
        console.error(error);
        return null;
      } finally {
        setLoadingProductDetail(false);
      }
    }, [api, productDetails]);

  const getProductsSale = useCallback(async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await api.get('/saleProducts');

      if (response.status === 200) {
        setProductsSale(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [api]);

  return (
    <ProductsContext.Provider
      value={{ getProducts, getProductsSale, getProductDetails, productDetails, productsSale, products, loading, loadingProductDetail, error }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
