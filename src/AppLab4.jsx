import "./lab4index.css";
import VisorDocumento from "./components/VisorDocumento";
import TemporizadorPomodoro from "./components/TemporizadorPomodoro";
import ConfiguracionUsuario from "./components/configuracionusuario";
import Ejercicio4 from "./components/ej4lab4";
import { useState } from "react";
function AppLab4() {
      const [mostrarVisor, setMostrarVisor] = useState(true);
  return (
    <div className="App">

      <h1>Laboratorio 4</h1>

   
      <section className="seccion">
        <h2>Ejercicio 1</h2>
       

        <button onClick={() => setMostrarVisor(!mostrarVisor)}>
          {mostrarVisor ? "Desmontar componente" : "Montar componente"}
        </button>

        {mostrarVisor && <VisorDocumento />}
      </section>
   
    
      <section className="seccion">
        <h2>Ejercicio 2</h2>
        <TemporizadorPomodoro />
      </section>
        <section className="seccion">
            <h2>Ejercicio 3</h2>
            < ConfiguracionUsuario />
        </section>
         <section className="seccion">
            <h2>Ejercicio 4</h2>
            < Ejercicio4 />
        </section>
      
    </div>
  );
}

export default AppLab4;