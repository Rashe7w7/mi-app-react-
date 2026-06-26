function Clima() {
  const temperatura = 26

  let sensacion = ''
  let recomendacion = ''

  if (temperatura < 15) {
    sensacion = 'frio'
    recomendacion = 'Lleva abrigo'
  } else if (temperatura <= 25) {
    sensacion = 'agradable'
    recomendacion = 'Disfruta el día'
  } else {
    sensacion = 'caluroso'
    recomendacion = 'Mantente hidratado'
  }

  return (
  <div className={`clima-card ${sensacion}`}>
    <h2 className="clima-titulo">Clima</h2>

    <p className="clima-texto">
      Temperatura: <span>{temperatura}°C</span>
    </p>

    <p className="clima-texto">
      Sensación: <span>{sensacion}</span>
    </p>

    <p className="clima-recomendacion">
      {recomendacion}
    </p>
  </div>
)
}

export default Clima