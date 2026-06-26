function ListaTareas() {
  const tareas = [
    { id: 1, titulo: 'Laboratorio 2 Web ', completada: false, prioridad: 'alta' },
    { id: 2, titulo: 'Ir al gym ', completada: true, prioridad: 'media' },
    { id: 3, titulo: 'Lavar ', completada: false, prioridad: 'baja' },
    { id: 4, titulo: 'Practica Laboral Proyecto Final ', completada: true, prioridad: 'alta' },
    { id: 5, titulo: 'Tarea Computacion Grafica ', completada: false, prioridad: 'media' },
    { id: 6, titulo: 'Limpiar habitación ', completada: true, prioridad: 'baja' },
    { id: 7, titulo: 'Estudiar React ', completada: false, prioridad: 'alta' }
  ]

  const pendientes = tareas.filter(t => !t.completada)
  const completadas = tareas.filter(t => t.completada)

  return (
    <div >
      <h2>Lista de Tareas</h2>

      <h3 className="contador">
        Tareas pendientes ({pendientes.length})
      </h3>

      {pendientes.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul className="lista-tareas">
          {pendientes.map(tarea => (
            <li
              key={tarea.id}
              className={tarea.prioridad === 'alta' ? 'alta' : tarea.prioridad}
            >
              {tarea.titulo}

              <span className={`badge ${tarea.prioridad}`}>
                {tarea.prioridad}
              </span>
            </li>
          ))}
        </ul>
      )}

    
      <h3 className="contador">
        Tareas completadas ({completadas.length})
      </h3>

      {completadas.length === 0 ? (
        <p>No hay tareas completadas</p>
      ) : (
        <ul className="lista-completadas">
          {completadas.map(tarea => (
            <li key={tarea.id} className="completada">
              {tarea.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaTareas