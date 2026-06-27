import { useEffect, useRef, useState } from "react";

export default function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);
  const timeoutRef = useRef(null);

  const mostrar = (mensaje, tipo = "info") => {
    const nueva = {
      id: Date.now(),
      mensaje,
      tipo,
    };

    setNotificacion(nueva);
  };

  const cerrar = () => {
    setNotificacion(null);
  };

  useEffect(() => {
    if (!notificacion) return;

    // limpiar timeout anterior si existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setNotificacion(null);
    }, duracion);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [notificacion, duracion]);

  return {
    notificacion,
    mostrar,
    cerrar,
  };
}