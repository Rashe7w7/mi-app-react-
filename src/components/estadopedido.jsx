function EstadoPedido() {
  const estado = 'entregado' // Cambia este valor a 'pendiente', 'enviado', 'entregado' o 'cancelado' para probar diferentes estados

  return (
    <div className={`pedido-card ${estado}`}>
      <h2>Estado del Pedido</h2>

      <p>
        {estado === 'pendiente'
          ? '⏳ Tu pedido está siendo procesado'
          : estado === 'enviado'
          ? '🚚 Tu pedido está en camino'
          : estado === 'entregado'
          ? '✅ Tu pedido ha sido entregado'
          : '❌ Tu pedido fue cancelado'}
      </p>

      {estado === 'enviado' && (
        <p>Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </div>
  )
}

export default EstadoPedido