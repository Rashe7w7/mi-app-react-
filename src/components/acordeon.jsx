import { useState } from "react";

const Acordeon = ({ titulo, children }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="acordeon">
      <div
        className="acordeon-header"
        onClick={() => setExpandido(!expandido)}
      >
        <span>{titulo}</span>
        <span>{expandido ? "▼" : "▶"}</span>
      </div>

      {expandido && (
        <div className="acordeon-contenido">
          {children}
        </div>
      )}
    </div>
  );
};

export default Acordeon;