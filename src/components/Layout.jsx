import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

function Layout() {


  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="header-content">
          <h1>MisNotas</h1>
          
          <nav className="layout-nav">
            <NavLink 
              to="/Applab5" 
              className={({ isActive }) => isActive ? 'active' : ''}
              end
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/Applab5/notas" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Notas
            </NavLink>
            <NavLink 
              to="/Applab5/notas/nueva" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Nueva nota
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="layout-main">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <p>© 2026 MisNotas - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Layout;