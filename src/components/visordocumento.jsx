import { useEffect, useState } from "react";


export default function VisorDocumento() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`;

    return () => {
      document.title = "Mi App";
    };
  }, [contador]);

  return (
    <div className="visor-doc">
      <h2>Visor Documento</h2>

      <p className="visor-doc__contador">
        Contador: {contador}
      </p>

      <div className="visor-doc__botones">
        <button onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>

        <button onClick={() => setContador(contador - 1)}>
          Decrementar
        </button>
      </div>
    </div>
  );
}