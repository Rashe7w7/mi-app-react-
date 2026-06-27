const Modal = ({ titulo, abierto, children }) => {
  if (!abierto) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{titulo}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;