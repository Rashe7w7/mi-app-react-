import { useNotas } from "../hooks/useNotas";

function TestNotas() {
  const { state } = useNotas();

  return (
    <div>
      <h2>Total de notas: {state.notas.length}</h2>
    </div>
  );
}

export default TestNotas;