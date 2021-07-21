import React, { useState } from 'react';

const Detalle = ({ id, date, buyer, total, items }) => {
  const [abre, setAbre] = useState(true);

  const abrirVentana = () => {
    setAbre(!abre);
  };
  return (
    <div>
      <p
        className="text-center"
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '4px 6px',
          cursor: 'pointer',
        }}
        onClick={abrirVentana}
      >
        {id}
      </p>
      {!abre && (
        <div>
          <p>
            Fecha de compra: <br />
            {date}
          </p>
          <div>
            {items.map((item) => (
              <div key={item.id}>
                <p>Artículo: {item.description}</p>
                <img
                  src={item.img}
                  alt="imgProducto"
                  style={{ width: '200px', margin: '10px 0px' }}
                />
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
              </div>
            ))}
          </div>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default Detalle;
