import { useNotas } from '../hooks/useNotas';
// import { Link } from 'react-router-dom';

function Inicio() {
  const { state } = useNotas();

  const categorias = {};
  state.notas.forEach(nota => {
    categorias[nota.categoria] = (categorias[nota.categoria] || 0) + 1;
  });

  const totalFijadas = state.notas.filter(n => n.fijada).length;

  return (
    <div className="inicio-container">
      <div className="inicio-header">
        <h2>Bienvenido a Mis Notas!</h2>
      
      </div>
      
      <div className="inicio-resumen">
        <h3>Resumen </h3>
        <div className="resumen-grid">
          <div className="resumen-card">
            <span className="resumen-icon"></span> <span className="resumen-number">{state.notas.length}</span>
            <span className="resumen-label">Total de notas</span>
          </div>
          <div className="resumen-card">
            <span className="resumen-icon"></span><span className="resumen-number">{totalFijadas}</span>
            <span className="resumen-label">Notas fijadas</span>
          </div>
          <div className="resumen-card">
         
            <span className="resumen-number">{Object.keys(categorias).length}</span>
            <span className="resumen-label">Categorías</span>
          </div>
        </div>

        <div className="categorias-detalle">
          <h4>Por categoría:</h4>
          <div className="categoria-badges">
            {Object.entries(categorias).map(([categoria, cantidad]) => (
              <span key={categoria} className={`categoria-badge ${categoria}`}>
                {categoria}: {cantidad}
              </span>
            ))}
          </div>
        </div>

     
      </div>
    </div>
  );
}

export default Inicio;