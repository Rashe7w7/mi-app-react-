import { useEffect, useState } from "react";

const CLAVE_STORAGE = "config-usuario";

const valoresPorDefecto = {
  nombre: "",
  tema: "claro",
  notificaciones: true,
};

export default function ConfiguracionUsuario() {
  const [config, setConfig] = useState(() => {
    try {
      const guardado = localStorage.getItem(CLAVE_STORAGE);
      return guardado ? JSON.parse(guardado) : { ...valoresPorDefecto };
    } catch (error) {
      console.error("Error al leer localStorage:", error);
      return { ...valoresPorDefecto };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(config));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [config.nombre, config.tema, config.notificaciones, config]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setConfig((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const restablecer = () => {
    localStorage.removeItem(CLAVE_STORAGE);
    setConfig({ ...valoresPorDefecto });
  };

  return (
    <div className="config">
      <h2>Configuración de Usuario</h2>

      <div className="config__form">
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={config.nombre}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tema:</label>
          <select
            name="tema"
            value={config.tema}
            onChange={handleChange}
          >
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="notificaciones"
              checked={config.notificaciones}
              onChange={handleChange}
            />
            Notificaciones
          </label>
        </div>

        <button onClick={restablecer}>
          Restablecer valores
        </button>
      </div>

      <div className="config__preview">
        <h3>Vista previa</h3>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
    </div>
  );
}