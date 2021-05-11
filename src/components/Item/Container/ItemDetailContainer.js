import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addItems } = useContext(CartContext);
  //const [cart, setCart] = useContext(CartContext);
  const { id } = useParams();

  //UseEffect para montar los productos con una promise + un setTimeout para hacer un delay de 2 segundos en la entrega.

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        const productos = [
          {
            id: 1,
            category: 'camisa',
            title: 'Camisa',
            description:
              'Camisa 100% algodón manga larga azul marino con manchas blancas',
            price: 200,
            stock: 20,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa1_mvazpn.jpg',
          },
          {
            id: 2,
            title: 'Camisa 2',
            category: 'camisa',
            description: 'Camisa manga larga blanca con lunares',
            price: 300,
            stock: 7,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372705/camisa2_tmojul.jpg',
          },
          {
            id: 3,
            category: 'camisa',
            title: 'Camisa 3',
            description: 'Camisa manga larga azul con rayas',
            price: 400,
            stock: 6,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa3_xyt1ay.jpg',
          },
          {
            id: 4,
            category: 'camisa',
            title: 'Camisa 4',
            description: 'Camisa manga larga azul marino con lunares',
            price: 500,
            stock: 10,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa4_ehruek.jpg',
          },
          {
            id: 5,
            category: 'rinonera',
            title: 'riñonera 1',
            description: 'Riñonera beige de cuero con dos cierres',
            price: 145,
            stock: 13,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/rinonera1C_alnfaf.jpg',
          },
          {
            id: 6,
            category: 'rinonera',
            title: 'riñonera 2',
            description: 'Riñonera negra de cuero con dos cierres',
            price: 155,
            stock: 13,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/rinonera2C_vhgeuc.jpg',
          },
          {
            id: 7,
            category: 'rinonera',
            title: 'riñonera 3',
            description: 'Riñonera negray gris de cuero con dos cierres',
            price: 167,
            stock: 3,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/rinonera3C_hnxpzc.jpg',
          },
          {
            id: 8,
            category: 'rinonera',
            title: 'riñonera 4',
            description: 'Riñonera negra militar de cuero con dos cierres',
            price: 142,
            stock: 6,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/rinonera4C_vk8crq.jpg',
          },
          {
            id: 9,
            category: 'billetera',
            title: 'billetera 1',
            description: 'Billetera de cuero',
            price: 147,
            stock: 3,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372705/billetera1C_gygduo.jpg',
          },
          {
            id: 10,
            category: 'billetera',
            title: 'billetera 2',
            description: 'Billetera de cuero',
            price: 167,
            stock: 5,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/billetera2C_bf0hvq.jpg',
          },
          {
            id: 11,
            category: 'billetera',
            title: 'billetera 3',
            description: 'Billetera de cuero',
            price: 60,
            stock: 8,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372705/billetera3C_x07jtl.jpg',
          },
          {
            id: 12,
            category: 'billetera',
            title: 'billetera 4',
            description: 'Billetera de cuero',
            price: 20,
            stock: 8,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372705/billetera4C_jpsrxi.jpg',
          },
          {
            id: 13,
            category: 'remera',
            title: 'remera 1',
            description: 'Remera manga corta',
            price: 200,
            stock: 8,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/remera1_zhdmkj.jpg',
          },
          {
            id: 14,
            category: 'remera',
            title: 'remera 2',
            description: 'Remera manga corta',
            price: 220,
            stock: 9,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera2_pe94nf.jpg',
          },
          {
            id: 15,
            category: 'remera',
            title: 'remera 3',
            description: 'Remera manga corta',
            price: 250,
            stock: 9,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
          },
          {
            id: 16,
            category: 'remera',
            title: 'remera 4',
            description: 'Remera manga corta',
            price: 280,
            stock: 9,
            img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera4_wyfums.jpg',
          },
        ];
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
    };
    getItem().then((res) => {
      //filtrar el Id del producto a mostrar en ItemDetail
      //eslint-disable-next-line
      const itemFiltrado = res.filter((item) => item.id == `${id}`);
      setItem(itemFiltrado);
    });
  }, [id]);

  //la funcion onAdd se encarga de agregar productos al carrito y se dispara en el ItemCount. Los parametros se los pasan a la funcion addItems
  const onAdd = (counter) => {
    addItems(counter, item[0]);
    //setCart([...cart, { ...item[0], cantidad: counter }]);
  };

  return (
    <>
      {item.length > 0 ? (
        <ItemDetail item={item[0]} onAdd={onAdd} />
      ) : (
        <h2 className="text-center">Cargando...</h2>
      )}
    </>
  );
};

export default ItemDetailContainer;
