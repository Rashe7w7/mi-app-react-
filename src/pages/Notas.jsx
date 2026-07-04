
import { useNotas } from "../hooks/useNotas";
// import { useState } from "react";
import "./lab5index.css";
import { Link } from "react-router-dom";


function Lab5ejercicio1() {
  const {
    state,
    // agregarNota,
   
    // toggleFijada,
    cambiarFiltro,
    cambiarBusqueda,
  } = useNotas();



  // const [form, setForm] = useState({
  //   titulo: "",
  //   contenido: "",
  //   categoria: "personal",
  // });

  const notasFiltradas = state.notas.filter((nota) => {
    const coincideCategoria =
      state.filtroCategoria === "todas" ||
      nota.categoria === state.filtroCategoria;

    const coincideBusqueda =
      nota.titulo.toLowerCase().includes(state.busqueda.toLowerCase()) ||
      nota.contenido.toLowerCase().includes(state.busqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });
const notasFijadas = notasFiltradas.filter(nota => nota.fijada);
const notasNoFijadas = notasFiltradas.filter(nota => !nota.fijada);
 

  return (
    <div className="app">

      <header className="header">
        <h1>Notas</h1>

        <div className="stats">
          <div>
            <strong>{state.notas.length}</strong>
            <span>Total</span>
          </div>

          <div>
            <strong>{state.notas.filter(n => n.fijada).length}</strong>
            <span>Fijadas</span>
          </div>
          <div>
            <strong>{notasFiltradas.length}</strong>
            <span>Visibles</span>
          </div>

        </div>
          


       <Link to="/Applab5/notas/nueva" className="primary" style={{ textDecoration: 'none', display: 'inline-block', padding: '8px 20px', borderRadius: '8px', fontWeight: '500', fontSize: '0.9rem', cursor: 'pointer', background: '#fdd835', color: '#202124' }}>
  Nueva nota
</Link>
      </header>

      <section className="filters">
        <input
          placeholder="Buscar..."
          value={state.busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
        />

        <select
          value={state.filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </section>

   
{notasFijadas.length > 0 && (
  <section className="seccion-fijadas">
    <div className="seccion-titulo">
      <h2>Notas Fijadas</h2>
      <span className="contador-fijadas">{notasFijadas.length}</span>
    </div>
    
    <div className="grid">
      {notasFijadas.map((nota) => (
        <Link to={`/Applab5/notas/${nota.id}`} key={nota.id} className="card-link">
          <article className="card fixed">
            <div className="card-top">
              <span className="tag" data-categoria={nota.categoria}>
                {nota.categoria}
              </span>
              <button 
                // onClick={(e) => {
                //   e.stopPropagation();
                //   toggleFijada(nota.id);
                // }} 
                className="btn-fijar activo"
              >
                📌Fijada
              </button>
            </div>

            <h3>{nota.titulo}</h3>
           <p>{nota.contenido.length > 100 ? nota.contenido.substring(0, 100) + '...' : nota.contenido}</p>

           <small>
   {new Date(nota.fechaCreacion).toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}
</small>

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
             
              
            </div>
          </article>
        </Link>
      ))}
    </div>
  </section>
)}


{notasNoFijadas.length > 0 && (
  <section className="seccion-no-fijadas">
    <div className="seccion-titulo">
     
      <span className="contador-no-fijadas">{notasNoFijadas.length}</span>
    </div>
    
    <div className="grid">
      {notasNoFijadas.map((nota) => (
                <Link to={`/Applab5/notas/${nota.id}`} key={nota.id} className="card-link">
        <article className="card">
          <div className="card-top">
            <span className="tag" data-categoria={nota.categoria}>
              {nota.categoria}
            </span>
            <button 
  // onClick={(e) => {
  //   e.stopPropagation();
  //   toggleFijada(nota.id);
  // }} 
  className="btn-fijar"
>
  📌 Fijar
</button>
          </div>

          <h3>{nota.titulo}</h3>
          <p>{nota.contenido.length > 100 ? nota.contenido.substring(0, 100) + '...' : nota.contenido}</p>

     <small>
   {new Date(nota.fechaCreacion).toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}
</small>

<div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>

</div>
        </article>
        </Link>
      ))}
    </div>
  </section>
)}


{notasFiltradas.length === 0 && (
  <div className="sin-notas">
    <p>No hay notas que coincidan con los filtros</p>
  </div>
)}

   
     


    </div>
  );
}

export default function Notas() {
  return (
    
      <Lab5ejercicio1 />
 
  );
}