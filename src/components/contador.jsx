import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador">

      {contador === 0 && (
        <Alerta tipo="info" titulo="Información">
          <p>El contador está en cero.</p>
        </Alerta>
      )}

      {contador > 10 && (
        <Alerta tipo="advertencia" titulo="Advertencia">
          <p>¡Valor alto!</p>
        </Alerta>
      )}

      <h2>Valor actual: {contador}</h2>

      <div className="botones-contador">

        <BotonAccion
          texto="Decrementar"
          variante="secundario"
          disabled={contador === 0}
          onClick={() => setContador((prev) => prev - 1)}
        />

        <BotonAccion
          texto="Incrementar"
          variante="primario"
          onClick={() => setContador((prev) => prev + 1)}
        />

        <BotonAccion
          texto="Incrementar +5"
          variante="primario"
          onClick={() => setContador((prev) => prev + 5)}
        />

        <BotonAccion
          texto="Reiniciar"
          variante="peligro"
          onClick={() => setContador(() => 0)}
        />

      </div>
    </div>
  );
};

export default Contador;