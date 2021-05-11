import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css';

const CartWidget = () => {
  const { unidades } = useContext(CartContext);

  return (
    <div className="carrito">
      <span className="unidades">{unidades()}</span>
      <AiOutlineShoppingCart />
    </div>
  );
};

export default CartWidget;
