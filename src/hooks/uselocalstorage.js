import { useEffect, useState } from "react";

export default function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave);
      return guardado ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error("Error guardando localStorage:", error);
    }
  }, [clave, valor]);

  return [valor, setValor];
}