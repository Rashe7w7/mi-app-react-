import Perfil from './components/perfil'
import Clima from './components/Clima'
import EstadoPedido from './components/EstadoPedido'
import MensajeBienvenida from './components/MensajeBienvenida'
import Habilidades from './components/listahabilidades'
import './Lab2index.css'
import Productos from './components/productos'
import ListaTareas from './components/listatarea'
import Tarjeta from './components/Tarjeta'
import  Dashboard from './components/dashboard'

function AppLab2() {
  return (
    <>
<section className="pantalla">
  <div className="perfil">
    <h1>Ejercicio 1</h1>
    <div className="perfil-wrapper">
      <Perfil />
    </div>
  </div>
</section>

  <section className="pantalla">
    <div className="cuadrado clima-panel">
      <h1>Ejercicio 2</h1>
      <Clima />
    </div>
  </section>

<section className="pantalla">
  <div className="cuadrado pedido-panel">
    <h1>Ejercicio 3</h1>
    <EstadoPedido />
  </div>
</section>
<section className="pantalla">
  
  <MensajeBienvenida />
</section>
     <section className="pantalla">
  <div className="cuadrado habilidades-panel">
    <h1>Ejercicio 5</h1>
    <Habilidades />
  </div>
</section>
 <section className="pantalla">
  <div className="cuadrado productos-panel">
    <h1>Ejercicio 6</h1>
    <Productos />
  </div>
</section>     
<section className="pantalla">
  <div className="cuadrado tareas-panel">
    <h1>Ejercicio 7</h1>
    <ListaTareas />
  </div>
</section> 
<section className="pantalla">
  <div className="cuadrado tarjeta-panel">
    <h1>Ejercicio 8</h1>
    <Tarjeta />
  </div>
</section>
<section className="pantalla">
  <div className="cuadrado dashboard-panel">
    <h1>Ejercicio 9</h1>
    <Dashboard />
  </div>
</section>
    </>
   
  
  )
}
  

export default AppLab2

    
      