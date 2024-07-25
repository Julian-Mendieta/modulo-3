// src/views/MisTurnos.jsx
// src/views/MisTurnos.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Turno from '../components/Turno';

const MisTurnos = () => {
  const userAppointments = useSelector(state => state.userAppointments);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Simulación de carga, ya que ahora los turnos vienen del store global
  }, []);

  return (
    <div className="mis-turnos">
      <h1>Mis Turnos</h1>
      {loading ? (
        <p>Cargando turnos...</p>
      ) : userAppointments.length === 0 ? (
        <p>No tienes turnos agendados.</p>
      ) : (
        userAppointments.map(turno => (
          <Turno key={turno.id} {...turno} />
        ))
      )}
    </div>
  );
};

export default MisTurnos;
