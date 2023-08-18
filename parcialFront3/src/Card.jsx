//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from "react";

function Card(props) {
  return (
    <div>
      <h2>Nombre: {props.nombre}</h2>
      <h2>Color favorito: {props.color}</h2>
    </div>
  );
}

export default Card;