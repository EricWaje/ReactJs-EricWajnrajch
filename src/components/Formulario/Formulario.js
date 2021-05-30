import React from 'react';

const Formulario = ({ handleInput, onSubmit }) => {
  return (
    <form onChange={handleInput}>
      <input type="text" placeholder="Nombre completo" name="nombreCompleto" />
      <input type="text" placeholder="Direccion" name="direccion" />
      <input type="number" placeholder="Teléfono" name="telefono" />
      <input type="email" placeholder="example@gmail.com" name="email" />
      <button className="btn-enviar" onClick={onSubmit}>
        Enviar Datos
      </button>
    </form>
  );
};

export default Formulario;
