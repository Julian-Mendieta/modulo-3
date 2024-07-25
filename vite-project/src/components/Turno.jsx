// src/components/Turno.jsx
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserAppointments } from '../store';
import "./Turno.css"
const Turno = ({ id, date, time, status, userId }) => {
  const dispatch = useDispatch();

  const cancelTurno = async () => {
    try {
      await axios.patch(`http://localhost:3000/turns/${id}`, { status: 'cancelled' });
      const response = await axios.get(`http://localhost:3000/turns?userId=${userId}`);
      dispatch(setUserAppointments(response.data));
    } catch (error) {
      console.error('Error cancelling turno:', error);
    }
  };

  return (
    <div className={`turno ${status}`}>
      <p>Fecha: {date}</p>
      <p>Hora: {time}</p>
      <p>Estado: {status}</p>
      {status !== 'cancelled' && <button onClick={cancelTurno}>Cancelar</button>}
    </div>
  );
};

export default Turno;
