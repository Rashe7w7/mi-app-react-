function Perfil() {
  const nombre = "Rachel"
  const profesion = "Estudiante de Ingeniería Informática"
  const experiencia = 3
  const disponible = false

  return (
    <div className="perfil">
      <h2>{nombre}</h2>

      <p className="profesion">{profesion}</p>

      <p>
        <strong>Experiencia:</strong> {experiencia} años de experiencia
      </p>

      <p className={disponible ? "disponible" : "nodisponible"}>
        {disponible
          ? "Disponible para contratar"
          : "No disponible"}
      </p>
    </div>
  )
}

export default Perfil