import useNotificacion from "../hooks/useNotificacion";
import useLocalStorage from "../hooks/useLocalStorage";
import "../lab4index.css";
export default function Ejercicio4() {
  const [nombre, setNombre] = useLocalStorage("nombre", "");
  const { notificacion, mostrar, cerrar } = useNotificacion(3000);

  return (
    <div>
 

      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />

      <button onClick={() => mostrar("Guardado correctamente", "success")}>
        Mostrar notificación
      </button>
<pre>
{JSON.stringify(
  {
    nombre,
    valorEnStorage: JSON.parse(localStorage.getItem("nombre") ?? '""')
  },
  null,
  2
)}
</pre>
      {notificacion && (
        <div style={{ padding: "10px", background: "#eee", marginTop: 10 }}>
          <p>{notificacion.mensaje}</p>
          <button onClick={cerrar}>Cerrar</button>
        </div>
      )}
    </div>
  );
} 