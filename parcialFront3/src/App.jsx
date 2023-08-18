import React from "react";
import Card from Card;
import React, { useState } from 'react';


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  
  const [nombre, setNombre] = useState('');
  const [colorFavorito, setColorFavorito] = useState('');
  const [card, setCard] = useState(false);


  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleColorChange = (event) => {
    setColorFavorito(event.target.value);
  };

  const handleFormSubmit = () => {
    if (nombre && colorFavorito) {
      setCard(true);
    } else {
      alert('Por favor, ingresa nombre y color favorito');
    }
  };

  return (
    <div>
      <h1>Card</h1>
      <div>
        <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} />
        <input type="text" placeholder="Color Favorito" value={colorFavorito} onChange={handleColorChange} />
        <button onClick={handleFormSubmit}>Enviar</button>
      </div>
      {card && <Card nombre={nombre} color={colorFavorito} />}
    </div>
  );
};
 

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form>
        <div>
          <input type="text" placeholder="Nombre:" />
          <input type="text" placeholder="Color favorito:" />
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );

export default App;

