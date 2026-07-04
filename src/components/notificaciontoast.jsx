

function NotificacionToast({ notificacion, onClose }) {
  if (!notificacion) return null;

  const { mensaje, tipo } = notificacion;

  const colores = {
    success: {
      background: '#e6f4ea',
      border: '#34a853',
      texto: '#1e7e34'
    },
    error: {
      background: '#fce8e6',
      border: '#d93025',
      texto: '#d93025'
    },
    info: {
      background: '#e8f0fe',
      border: '#1a73e8',
      texto: '#1a73e8'
    }
  };

  const estilo = colores[tipo] || colores.info;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: estilo.background,
      borderLeft: `4px solid ${estilo.border}`,
      padding: '16px 24px',
      borderRadius: '8px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      zIndex: 9999,
      maxWidth: '400px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      animation: 'slideIn 0.3s ease'
    }}>
      <span style={{
        color: estilo.texto,
        fontSize: '1rem',
        fontWeight: '500'
      }}>
        {mensaje}
      </span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          color: estilo.texto,
          padding: '0 4px'
        }}
      >
        ✕
      </button>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default NotificacionToast;