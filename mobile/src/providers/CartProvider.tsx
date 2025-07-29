import React, { useCallback, useState } from 'react';
import CartContext from '../contexts/CartContext';
import useApi from '../hooks/useApi';
import { CartType } from '../types/cartContextType';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [cartItems, setCartItems] = useState<CartType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingPost, setLoadingPost] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCartItems = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get('/cart');

      if (response.status === 200) {
        setCartItems(response.data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(false);
    } finally {
      setLoading(false);
    }
  }, [api]);

  const postCartItem = useCallback(
    async (item: CartType): Promise<'success' | 'failure'> => {
      setLoadingPost(true);

      console.log('chegou na request do post: ', item)

      try {
        const response = await api.post('/cart', item);

        if (response.status === 200) {
          return 'success';
        } else {
          setError(true);
          return 'failure';
        }
      } catch (error) {
        console.error(error);
        setError(false);
        return 'success';
      } finally {
        setLoadingPost(false);
      }
    },
    []
  );
  return (
    <CartContext.Provider
      value={{ getCartItems, postCartItem, cartItems, loading, error }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
