import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { CartContextType } from '../types/cartContextType';

const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  return context;
};

export default useCart;
