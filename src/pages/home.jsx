
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="contenedor">
        <h1>Laboratorios de   Web Avanzada</h1>
        <p>(Selecciona el lab)</p>

        <div className="grid">
          <Link to="/Applab2" className="boton-lab">
            <h2>Laboratorio 2</h2>
          
          </Link>

          <Link to="/Applab3" className="boton-lab">
            <h2>Laboratorio 3</h2>
          
          </Link>

          <Link to="/Applab4" className="boton-lab">
            <h2>Laboratorio 4</h2>
         
          </Link>

          <Link to="/Applab5" className="boton-lab">
            <h2>Laboratorio 5</h2>
          
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;