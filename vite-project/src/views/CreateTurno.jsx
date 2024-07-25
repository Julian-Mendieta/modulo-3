// src/views/CreateTurno.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserAppointments } from '../store';

const CreateTurno = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);

  const handleCreateTurno = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/turns', { date, time, userId });
      dispatch(setUserAppointments(response.data)); // Actualizar la lista de turnos del usuario en el store
      setDate('');
      setTime('');
      alert('Turno creado exitosamente!');
    } catch (error) {
      console.error('Error creating turno:', error);
      alert('Hubo un error al crear el turno. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="create-turno">
      <h1>Crear Turno</h1>
      <form onSubmit={handleCreateTurno}>
        <label>
          Fecha:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Hora:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Crear Turno</button>
      </form>
    </div>
  );
};

export default CreateTurno;
