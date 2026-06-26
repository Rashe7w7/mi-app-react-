function Productos() {
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 35000, disponible: true },
    { id: 2, nombre: 'Mouse', precio: 20000, disponible: false },
    { id: 3, nombre: 'Teclado', precio: 28000, disponible: true },
    { id: 4, nombre: 'Monitor', precio: 40000, disponible: true },
    { id: 5, nombre: 'Audífonos', precio: 22000, disponible: false }
  ]

  return (
    <div>
      <h2>Productos</h2>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>

              <td>
                ${producto.precio.toFixed(2)}
              </td>

              <td
               
              >
                {producto.disponible ? 'Disponible' : 'Agotado'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Productos