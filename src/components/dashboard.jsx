function Dashboard() {
  const usuario = {
    nombre: 'Rachel',
    email: 'rachel@email.com',
    rol: 'Admin'
  }

  const notificaciones = [
    { id: 1, mensaje: 'Nuevo mensaje recibido', leida: false },
    { id: 2, mensaje: 'Tu perfil fue actualizado', leida: true },
    { id: 3, mensaje: 'Tienes una nueva tarea', leida: false },
    { id: 4, mensaje: 'Se completó una actividad', leida: true }
  ]

  const actividadReciente = [
    { id: 1, accion: 'Inicio de sesión', fecha: '25/05/2026' },
    { id: 2, accion: 'Actualización de perfil', fecha: '24/05/2026' },
    { id: 3, accion: 'Creación de una tarea', fecha: '23/05/2026' }
  ]

  const noLeidas = notificaciones.filter(
    notificacion => !notificacion.leida
  )

  return (
    <>
      <div className="dashboard">

        <section className="card usuario">
          <h2>Información del usuario</h2>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Rol:</strong> {usuario.rol}</p>
        </section>

        <section className="card">
          <h2>Notificaciones ({noLeidas.length})</h2>

          {noLeidas.length === 0 ? (
            <p>No tienes notificaciones pendientes</p>
          ) : (
            <ul>
              {notificaciones.map(notificacion => (
                <li
                  key={notificacion.id}
                  className={
                    notificacion.leida
                      ? 'notificacion leida'
                      : 'notificacion'
                  }
                >
                  {notificacion.mensaje}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="card">
          <h2>Actividad reciente</h2>

          {actividadReciente.length === 0 ? (
            <p>No hay actividad reciente</p>
          ) : (
            <ul>
              {actividadReciente.map(actividad => (
                <li key={actividad.id}>
                  {actividad.accion} - {actividad.fecha}
                </li>
              ))}
            </ul>
          )}
        </section>

      </div>
    </>
  )
}
export default Dashboard