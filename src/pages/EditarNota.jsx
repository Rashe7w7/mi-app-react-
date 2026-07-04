import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNotas } from '../hooks/useNotas';
import FormularioNota from '../components/FormularioNota';

function EditarNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, editarNota } = useNotas();

  const nota = state.notas.find(n => n.id === id);

  if (!nota) {
    return (
      <div className="error-container">
        <h2> Nota no encontrada</h2>
        <p>La nota que buscas no existe o ha sido eliminada.</p>
        <Link to="/Applab5/notas" className="btn-primary">← Volver a notas</Link>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    editarNota(id, {
      titulo: formData.titulo,
      contenido: formData.contenido,
      categoria: formData.categoria,
      fijada: formData.fijada,
    });
    navigate(`/Applab5/notas/`);
  };

  const handleCancel = () => {
    navigate(`/Applab5/notas/`);
  };

  return (
    <FormularioNota
      notaInicial={nota}
      tituloFormulario="Editar Nota"
      botonTexto="Guardar Cambios"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
}

export default EditarNota;