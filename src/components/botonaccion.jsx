const BotonAccion = ({
  texto,
  variante = "primario",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`boton ${variante}`}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};

export default BotonAccion;