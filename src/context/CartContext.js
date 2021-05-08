import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {};

  const removeItem = (id) => {
    items.filter((item) => item.id !== id);
  };

  const clear = () => {};

  const isInCart = () => {};

  return (
    <>
      <CartContext.Provider
        value={{ addItem, removeItem, clear, isInCart, items }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
