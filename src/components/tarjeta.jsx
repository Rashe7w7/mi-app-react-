function Tarjeta() {
  const datos = {
    titulo: 'Aprendiendo React',
    descripcion: 'Este es un componente de tarjeta básico para practicar renderizado.',
    etiquetas: ['React', 'JavaScript', 'Frontend', 'UI'],
    destacado: true
  }

  return (
    <div className={datos.destacado ? 'tarjeta destacada' : 'tarjeta'}>
      <h3>{datos.titulo}</h3>

      <p>{datos.descripcion}</p>

      <div className="etiquetas">
        {datos.etiquetas.map(etiqueta => (
          <span key={etiqueta} className="etiqueta">
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Tarjeta