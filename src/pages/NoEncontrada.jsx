import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <div className="no-encontrada-container">
      <div className="no-encontrada-content">
        <span className="no-encontrada-icon">🔍</span>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <Link to="/Applab5" className="btn-primary">  {/* ← Ruta completa */}
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NoEncontrada;