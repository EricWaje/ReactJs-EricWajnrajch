import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  //Comprobar si esta en el carrito el producto
  const isInCart = (id) => {
    const carrito = cart.find((i) => i.id === id);
    if (carrito !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  //Agrego los Items a mi estado del context y los sumo al carrito.
  const addItems = (counter, item) => {
    total();
    //compruebo si ya esta el item
    if (isInCart(item.id)) {
      console.log('El item ya esta en el carrito');
      //en caso de que ya este en el carrito, sumo la cantidad de items
      sumarCantidad(counter, item);
    } else {
      setCart([...cart, { ...item, cantidad: counter }]);
    }
  };

  //funcion para sumar la cantida de items del mismo producto
  const sumarCantidad = (counter, item) => {
    const cantidad = [...cart];
    cantidad.forEach((c) => {
      c.id === item.id && (c.cantidad += counter);
    });

    setCart(cantidad);
  };

  //Funcion para sumar el total
  const total = () => {
    const sumaTotal = cart.reduce((x, y) => x + y.price * y.cantidad, 0);
    return sumaTotal;
  };

  //Funcion para mostrar las unidades al lado del carrito
  const unidades = () => {
    const numeros = cart.reduce((x, y) => x + y.cantidad, 0);
    return numeros;
  };

  //Eliminar 1 solo producto del carrito
  const removeItem = (item) => {
    const itemRemoved = cart.filter((i) => i.id !== item);
    setCart(itemRemoved);
  };

  //Funcion que borra todos los productos del carrito.
  const clearItems = () => setCart([]);

  return (
    <>
      <CartContext.Provider
        value={{
          addItems,
          removeItem,
          isInCart,
          clearItems,
          total,
          unidades,
          cart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
