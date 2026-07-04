import { useNotas } from '../hooks/useNotas';
import { useParams, Link, useNavigate } from 'react-router-dom';

function DetalleNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, eliminarNota, toggleFijada } = useNotas();
  
  const nota = state.notas.find(n => n.id === id);

  if (!nota) {
    return (
      <div className="error-container">
        <h2>Nota no encontrada</h2>
        <p>La nota que buscas no existe o ha sido eliminada.</p>
        <Link to="/Applab5/notas" className="btn-primary">← Volver a notas</Link>
      </div>
    );
  }

  const handleEliminar = () => {
    if (window.confirm('¿Estás seguro de eliminar esta nota?')) {
      eliminarNota(nota.id);
      navigate('/Applab5/notas');
    }
  };

  return (
    <div className="detalle-container">
      <div className="detalle-header">
        <Link to="/Applab5/notas" className="btn-secondary">← Volver</Link>
        <div className="detalle-actions">
          <button 
            className={`btn-fijar ${nota.fijada ? 'activo' : ''}`}
            onClick={() => toggleFijada(nota.id)}
          >
            {nota.fijada ? ' 📌Fijada' : ' 📌Fijar'}
          </button>
          <Link to={`/Applab5/notas/${nota.id}/editar`} className="btn-editar">
             Editar
          </Link>
          <button 
            className="btn-eliminar"
            onClick={handleEliminar}
          >
             Eliminar
          </button>
        </div>
      </div>

      <div className="detalle-contenido">
        <span className={`categoria-tag ${nota.categoria}`}>
          {nota.categoria === 'personal' && ' Personal'}
          {nota.categoria === 'trabajo' && 'Trabajo'}
          {nota.categoria === 'estudio' && 'Estudio'}
          {nota.categoria === 'ideas' && ' Ideas'}
        </span>
        <h1>{nota.titulo}</h1>
        <p className="detalle-texto">{nota.contenido}</p>
        <div className="detalle-meta">
          <span className="detalle-fecha">
             {new Date(nota.fechaCreacion).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span>
          {nota.fijada && <span className="fijada-badge">Fijada</span>}
        </div>
      </div>
    </div>
  );
}

export default DetalleNota;