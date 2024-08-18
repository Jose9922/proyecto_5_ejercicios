import React, { useState } from 'react';
import './Header.css';

export const Header = () => {
  const [fullName, setFullName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  const handleClick = () => {
    if (fullName.trim()) {
      setShowGreeting(true);
    } else {
      alert('Por favor, ingresa tu nombre completo');
    }
  };

  return (
    <div className="header-container">
      {!showGreeting && (
        <div className="input-container">
          <input
            type="text"
            placeholder="Ingresa tu nombre completo"
            value={fullName}
            onChange={handleChange}
            className="name-input"
          />
          <button onClick={handleClick} className="start-button">Iniciar</button>
        </div>
      )}
      {showGreeting && (
        <div className="greeting-container">
          <h1 className="greeting-title">Bienvenido {fullName}</h1>
          <h2 className="greeting-subtitle">¿Cómo podemos ayudarte?</h2>
        </div>
      )}
    </div>
  );
};
