import misTurnos from "../../helpers/misTurnos";
import { useState } from "react";
import Turno from "../../components/Turno/Turno";

const MisTurnos = () => {
  const [turnos, setTurnos ] = useState(misTurnos);
  return (
    <>
      <h1>Mis Turnos papu</h1>
      <h2>Aqui se deben mostrar los turnos del usuario desde turno.jsx</h2>
      <div>
            {turnos.map(turno => (
                <Turno
                    key={turno.id}
                    id={turno.id}
                    date={turno.date}
                    time={turno.time}
                    userId={turno.userId}
                    status={turno.status}
                />
            ))}
        </div>
    </>
  );
};

export default MisTurnos;
