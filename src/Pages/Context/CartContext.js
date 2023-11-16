import React, { createContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
{/*  const removefromcart = (names) => {
    const filtereditem = cartItems.filter((item) => item.name !== names);
    setCartItems(...filtereditem);
} */}

const removefromcart = (varietalcount) => {
  const newitems = cartItems.filter((item) => item !== varietalcount)
  setCartItems(newitems);
};
  const cartData = {
    cartItems,
    addToCart,
    removefromcart
  };

  return (
    <CartContext.Provider value={cartData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
