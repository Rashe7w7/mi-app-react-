import { useState } from "react";
import Alerta from "./Alerta";
import BotonAccion from "./BotonAccion";

const FormularioEvento = () => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    fecha: "",
    categoria: "",
    descripcion: "",
    esPublico: false,
  });

  const [errores, setErrores] = useState({});
  const [confirmacion, setConfirmacion] = useState(false);
  const [eventos, setEventos] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validar = () => {
    const nuevosErrores = {};
    const hoy = new Date();

    if (formulario.titulo.trim().length < 5) {
      nuevosErrores.titulo = "El título debe tener al menos 5 caracteres";
    }

    if (!formulario.fecha) {
      nuevosErrores.fecha = "La fecha es obligatoria";
    } else {
      const fechaEvento = new Date(formulario.fecha);
      if (fechaEvento < hoy.setHours(0, 0, 0, 0)) {
        nuevosErrores.fecha = "La fecha no puede ser pasada";
      }
    }

    if (!formulario.categoria) {
      nuevosErrores.categoria = "Debes seleccionar una categoría";
    }

    if (formulario.descripcion.trim().length < 20) {
      nuevosErrores.descripcion =
        "La descripción debe tener al menos 20 caracteres";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validar()) return;

    const nuevoEvento = {
      ...formulario,
      id: Date.now(),
    };

    setEventos((prev) => [...prev, nuevoEvento]);

    setConfirmacion(true);

    setFormulario({
      titulo: "",
      fecha: "",
      categoria: "",
      descripcion: "",
      esPublico: false,
    });

    setErrores({});

    setTimeout(() => {
      setConfirmacion(false);
    }, 4000);
  };

  const camposVacios =
    !formulario.titulo ||
    !formulario.fecha ||
    !formulario.categoria ||
    !formulario.descripcion;

  return (
    <div className="formulario-evento">

      <h2>Registro de Eventos</h2>

      <form onSubmit={handleSubmit} className="form">

        
        <input
          type="text"
          name="titulo"
          placeholder="Título del evento"
          value={formulario.titulo}
          onChange={handleChange}
        />
        {errores.titulo && (
          <Alerta tipo="error" titulo="Error">
            <p>{errores.titulo}</p>
          </Alerta>
        )}

      
        <input
          type="date"
          name="fecha"
          value={formulario.fecha}
          onChange={handleChange}
        />
        {errores.fecha && (
          <Alerta tipo="error" titulo="Error">
            <p>{errores.fecha}</p>
          </Alerta>
        )}

        
        <select
          name="categoria"
          value={formulario.categoria}
          onChange={handleChange}
        >
          <option value="">Selecciona categoría</option>
          <option value="conferencia">Conferencia</option>
          <option value="taller">Taller</option>
          <option value="seminario">Seminario</option>
          <option value="otro">Otro</option>
        </select>

        {errores.categoria && (
          <Alerta tipo="error" titulo="Error">
            <p>{errores.categoria}</p>
          </Alerta>
        )}

      
        <textarea
          name="descripcion"
          placeholder="Descripción del evento"
          value={formulario.descripcion}
          onChange={handleChange}
        />

        {errores.descripcion && (
          <Alerta tipo="error" titulo="Error">
            <p>{errores.descripcion}</p>
          </Alerta>
        )}

        
        <label>
          <input
            type="checkbox"
            name="esPublico"
            checked={formulario.esPublico}
            onChange={handleChange}
          />
          Evento público
        </label>

        <BotonAccion
          texto="Registrar evento"
          variante="primario"
          disabled={camposVacios}
        />

      </form>

   
      {confirmacion && (
        <Alerta tipo="exito" titulo="Evento registrado">
          <p>{formulario.titulo || "Evento registrado correctamente"}</p>
        </Alerta>
      )}

      
      <div className="lista-eventos">
        <h3>Eventos registrados</h3>

        {eventos.map((evento) => (
          <div key={evento.id} className="evento">
            <p><strong>{evento.titulo}</strong></p>
            <p>Fecha: {evento.fecha}</p>
            <p>Categoría: {evento.categoria}</p>
            <p>{evento.esPublico ? "Público" : "Privado"}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FormularioEvento;