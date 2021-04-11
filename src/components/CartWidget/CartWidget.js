import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="carrito">
      <AiOutlineShoppingCart />
    </div>
  );
};

export default CartWidget;
