
const Alerta = ({
  tipo = "info",
  titulo,
  children
}) => {
  const iconos = {
    exito: "✔",
    advertencia: "⚠",
    error: "✖",
    info: "ℹ"
  };

  return (
    <div className={`alerta ${tipo}`}>
      <div className="alerta-header">
        <span>{iconos[tipo]}</span>
        <span>{titulo}</span>
      </div>

      <div className="alerta-contenido">
        {children}
      </div>
    </div>
  );
};

export default Alerta;