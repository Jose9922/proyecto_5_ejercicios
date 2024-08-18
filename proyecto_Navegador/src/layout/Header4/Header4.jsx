import React, { useState } from 'react';
import './Header4.css';

export const Header4 = () => {
  const [task, setTask] = useState({
    name: '',
    description: ''
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, task]);

    setTask({
      name: '',
      description: ''
    });
  };

  return (
    <div className="task-container">
      <h1 className="task-title">Registro de Tareas</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Nombre de la tarea"
          required
          className="task-input"
        />
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Descripción de la tarea"
          required
          className="task-input"
        />
        <button type="submit" className="task-button">Guardar Tarea</button>
      </form>
      <div className="task-list-container">
        <h2 className="task-list-title">Lista de Tareas</h2>
        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index} className="task-item">
              <strong>{t.name}:</strong> {t.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
