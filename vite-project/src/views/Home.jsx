import React from 'react';
import './Home.css'; // Importar el archivo CSS creado

const Home = () => {
  return (
    <div className="home-content">
      <h1>Bienvenido al Sistema de Turnos y Citas Hospitalarias</h1>
      <p>
        En nuestro sistema puedes gestionar tus turnos médicos y citas de manera eficiente.
        Puedes ver tus próximos turnos, cancelarlos si es necesario, y también reservar nuevos turnos
        con tus médicos favoritos. También puedes gestionar citas para consultas médicas, exámenes o
        procedimientos especiales.
      </p>
    </div>
  );
};

export default Home;