import { useEffect, useRef, useState } from "react";


export default function TemporizadorPomodoro() {
  const TIEMPO_INICIAL = 25 * 60;

  const [tiempo, setTiempo] = useState(TIEMPO_INICIAL);
  const [activo, setActivo] = useState(false);
  const intervalRef = useRef(null);

  const formato = (seg) => {
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!activo) return;

    intervalRef.current = setInterval(() => {
      setTiempo((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setActivo(false);
          alert("¡Tiempo terminado!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [activo]);

  const iniciar = () => setActivo(true);

  const pausar = () => {
    setActivo(false);
    clearInterval(intervalRef.current);
  };

  const reiniciar = () => {
    setActivo(false);
    clearInterval(intervalRef.current);
    setTiempo(TIEMPO_INICIAL);
  };

  return (
    <div className="pomodoro">
      <h2>Temporizador Pomodoro</h2>

      <div className="pomodoro__tiempo">
        {formato(tiempo)}
      </div>

      <div className="pomodoro__botones">
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  );
}