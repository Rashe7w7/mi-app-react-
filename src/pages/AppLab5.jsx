import { Routes, Route } from 'react-router-dom';
import { NotasProvider} from '../context/NotasContext';
import { useNotas } from '../hooks/usenotas';
import Layout from '../components/Layout';
import Inicio from './Inicio';
import Notas from './Notas';
import NuevaNota from './NuevaNota';
import DetalleNota from './DetalleNota';
import EditarNota from './EditarNota';
import NoEncontrada from './NoEncontrada';
import NotificacionToast from '../components/NotificacionToast';
import './Lab5index.css';


function AppLab5Content() {
  const { notificacion, cerrar } = useNotas();

  return (
    <>
    
      <NotificacionToast 
        notificacion={notificacion} 
        onClose={cerrar} 
      />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="notas" element={<Notas />} />
          <Route path="notas/nueva" element={<NuevaNota />} />
          <Route path="notas/:id" element={<DetalleNota />} />
          <Route path="notas/:id/editar" element={<EditarNota />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </>
  );
}

function AppLab5() {
  return (
    <NotasProvider>
      <AppLab5Content />
    </NotasProvider>
  );
}

export default AppLab5;