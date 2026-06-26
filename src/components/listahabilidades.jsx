
function Habilidades() {
  const habilidades = [
    'React',
    'JavaScript',
    'CSS',
    'Node.js',
    'Git',
    'TypeScript'
  ]

 return (
  <div className="habilidades">
    <h2>Habilidades técnicas</h2>

    <p className="total">
      Total de habilidades: {habilidades.length}
    </p>

    <ul className="lista-habilidades">
      {habilidades.map((habilidad, index) => (
        <li key={index}>{habilidad}</li>
      ))}
    </ul>
  </div>
)
}

export default Habilidades