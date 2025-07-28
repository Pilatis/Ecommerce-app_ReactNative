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

  const getProductDetails = useCallback(
    async (
      productType: 'products' | 'saleProducts',
      id: number
    ): Promise<void> => {
      setLoadingProductDetail(true);

      try {
        const response = await api.get(`/${productType}/${id}`);

        if (response.status === 200) {
          setProductDetails(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingProductDetail(false);
      }
    }, [api]);

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
      value={{ getProducts, getProductsSale, getProductDetails, productDetails, productsSale, products, loading, loadingProductDetail }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
