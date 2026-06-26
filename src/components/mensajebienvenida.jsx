function MensajeBienvenida() {

  // const usuario = {
  //   nombre: "Rachel",
  //   rol: "admin"
  // }


   const usuario = null


  if (usuario === null) {
    return (
      <div className="mensaje-container error">
        <h1>Ejercicio 4</h1>
        <h2>Acceso requerido</h2>
        <p>Por favor, inicia sesión para continuar</p>
      </div>
    )
  }

  return (
    <div className="mensaje-container">
        <h1>Ejercicio 4</h1>
      <h2>Bienvenido, {usuario.nombre}</h2>

      <p>Rol: {usuario.rol}</p>

      {usuario.rol === 'admin' && (
        <p className="admin">
          Tienes acceso completo al sistema
        </p>
      )}
    </div>
  )
}

export default MensajeBienvenida