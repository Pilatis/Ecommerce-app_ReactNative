import React from 'react'
import CartContext from '../contexts/CartContext'

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartContext.Provider value={{}}>{children}</CartContext.Provider>
  )
}

export default CartProvider