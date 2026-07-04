import "./lab4index.css";
import VisorDocumento from "../components/VisorDocumento";
import TemporizadorPomodoro from "../components/TemporizadorPomodoro";
import ConfiguracionUsuario from "../components/configuracionusuario";
import Ejercicio4 from "../components/ej4lab4";
import { useState } from "react";


function AppLab4() {
  const [mostrarVisor, setMostrarVisor] = useState(true);

  return (
    <div className="App">
      <div className="lab4-container">

        <h1>Laboratorio 4</h1>

        {/* EJERCICIO 1 */}
        <section className="seccion">
          <h2>Ejercicio 1</h2>

          <button onClick={() => setMostrarVisor(!mostrarVisor)}>
            {mostrarVisor ? "Desmontar componente" : "Montar componente"}
          </button>

          {mostrarVisor && <VisorDocumento />}
        </section>

        {/* EJERCICIO 2 */}
        <section className="seccion">
          <h2>Ejercicio 2</h2>
          <TemporizadorPomodoro />
        </section>

        {/* EJERCICIO 3 */}
        <section className="seccion">
          <h2>Ejercicio 3</h2>
          <ConfiguracionUsuario />
        </section>

        {/* EJERCICIO 4 */}
        <section className="seccion">
          <h2>Ejercicio 4</h2>
          <Ejercicio4 />
        </section>

      </div>
    </div>
  );
}

export default AppLab4;