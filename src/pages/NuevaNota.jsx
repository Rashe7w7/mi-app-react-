import { useNavigate } from 'react-router-dom';
import { useNotas } from '../hooks/useNotas';
import FormularioNota from '../components/FormularioNota';

function NuevaNota() {
  const { agregarNota } = useNotas();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const nuevaNota = {
      id: Date.now().toString(),
      titulo: formData.titulo,
      contenido: formData.contenido,
      categoria: formData.categoria,
      fijada: formData.fijada,
      fechaCreacion: new Date().toISOString()
    };

    agregarNota(nuevaNota);
    navigate('/Applab5/notas');
  };

  const handleCancel = () => {
    navigate('/Applab5/notas');
  };

  return (
    <FormularioNota
      tituloFormulario=" Crear Nueva Nota"
      botonTexto=" Guardar Nota"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
}

export default NuevaNota;