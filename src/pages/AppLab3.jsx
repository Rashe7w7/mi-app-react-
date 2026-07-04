

import "./lab3index.css";
import Alerta from "../components/Alerta";
import Acordeon from "../components/Acordeon";
import Modal from "../components/Modal";
import BotonAccion from "../components/BotonAccion";
import Contador from "../components/Contador";
import ListaContactos from "../components/ListaContactos";
import FormularioEvento from "../components/formularioeventos";
import { useState } from "react";

function Lab3() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div className="App">

     
      <Acordeon titulo="Ejercicio 1 - Componentes Reutilizables" expandidoInicial={true}>

        <h2>Componente Alerta</h2>

        <Alerta tipo="exito" titulo="Entrega completada">
          <p>La práctica de Investigación de Operaciones se envió correctamente.</p>
        </Alerta>

        <Alerta tipo="advertencia" titulo="Recordatorio">
          <p>Revisa las restricciones del modelo antes de resolver el ejercicio.</p>
        </Alerta>

        <Alerta tipo="error" titulo="Error en el modelo">
          <p>No fue posible encontrar una solución factible.</p>
        </Alerta>

        <Alerta tipo="info" titulo="Información">
          <p>Ya está disponible el material del Tema I.</p>
        </Alerta>

        <h2>Acordeón</h2>

        <Acordeon titulo="Tema I - Programación Lineal">
          <ul>
            <li>C1 Modelos de Programación Lineal.</li>
            <li>C2 Método Simplex.</li>
            <li>C3 Método Simplex en dos fases.</li>
          </ul>
        </Acordeon>

        <Acordeon titulo="Tema II - Programación Entera">
          <ul>
            <li>C6 Programación Entera.</li>
            <li>C7 Redes.</li>
          </ul>
        </Acordeon>
          <Acordeon titulo="Tema III - Simulación">
            <ul>
              <li>Introducción a los sistemas de colas.</li>
              <li>Números aleatorios.</li>
              <li>Teoría de colas.</li>
              <li>Modelos de simulación.</li>
            </ul>
  </Acordeon>
      </Acordeon>

     

      <Acordeon titulo="Ejercicio 2 - Estado y Eventos">

        <BotonAccion
          texto="Abrir modal"
          variante="primario"
          onClick={() => setModalAbierto(true)}
        />

        <Modal
          titulo="Información"
          abierto={modalAbierto}
        >
          <p>
            Este modal demuestra el uso de composición mediante children.
          </p>

          <BotonAccion
            texto="Cerrar"
            variante="secundario"
            onClick={() => setModalAbierto(false)}
          />
        </Modal>

        <Contador />

      </Acordeon>

     

      <Acordeon titulo="Ejercicio 3 - Lista de Contactos">

        <ListaContactos />

      </Acordeon>

    
      <Acordeon titulo="Ejercicio 4 - Formulario Controlado">

        <FormularioEvento />

      </Acordeon>

    </div>
  );
}

export default Lab3;