import { createContext } from 'react';
import { CartContextType } from '../types/cartContextType';

const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export default CartContext;
