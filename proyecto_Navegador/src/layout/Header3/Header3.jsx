import React, { useState } from 'react';
import './Header3.css';

export const Header3 = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    correo: '',
    telefono: '',
    id: ''
  });

  const [personas, setPersonas] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = personas.some(
      (persona) => persona.id === formData.id || persona.correo === formData.correo
    );

    if (exists) {
      alert('Una persona con este ID o correo ya existe.');
    } else {
      setPersonas([...personas, formData]);

      setFormData({
        nombre: '',
        usuario: '',
        correo: '',
        telefono: '',
        id: ''
      });
    }
  };

  return (
    <div className="registration-container">
      <h1 className="registration-title">Registro de Personas</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className="registration-input"
        />
        <input
          type="text"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          placeholder="Usuario"
          required
          className="registration-input"
        />
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Correo"
          required
          className="registration-input"
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
          className="registration-input"
        />
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          required
          className="registration-input"
        />
        <button type="submit" className="registration-button">Registrar</button>
      </form>
    </div>
  );
}
