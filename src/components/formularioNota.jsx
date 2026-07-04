import { useState } from 'react';

function FormularioNota({
  notaInicial = { titulo: '', contenido: '', categoria: 'personal', fijada: false },
  onSubmit,
  onCancel,
  botonTexto = 'Guardar',
  tituloFormulario = 'Nota'
}) {
  const [formData, setFormData] = useState({
    titulo: notaInicial.titulo || '',
    contenido: notaInicial.contenido || '',
    categoria: notaInicial.categoria || 'personal',
    fijada: notaInicial.fijada || false
  });

  const [errores, setErrores] = useState({
    titulo: '',
    contenido: ''
  });

  const [mensaje, setMensaje] = useState('');

  const validarCampo = (nombre, valor) => {
    if (nombre === 'titulo' && valor.length < 3) {
      return 'El título debe tener al menos 3 caracteres';
    }
    if (nombre === 'contenido' && valor.length < 10) {
      return 'El contenido debe tener al menos 10 caracteres';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val
    });

    const error = validarCampo(name, val);
    setErrores({
      ...errores,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorTitulo = validarCampo('titulo', formData.titulo);
    const errorContenido = validarCampo('contenido', formData.contenido);

    setErrores({
      titulo: errorTitulo,
      contenido: errorContenido
    });

    if (errorTitulo || errorContenido) {
      setMensaje('Corrige los errores antes de guardar');
      return;
    }

    onSubmit(formData);
  };

  const tieneErrores = errores.titulo || errores.contenido;

  return (
    <>
      <style>{`
        .formulario-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .formulario-container h2 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #202124;
          margin-bottom: 24px;
          letter-spacing: -0.3px;
        }

        .formulario-form {
          background: #f8f9fa;
          padding: 28px;
          border-radius: 12px;
          border: 1px solid #e8eaed;
        }

        .formulario-form .form-group {
          margin-bottom: 20px;
        }

        .formulario-form label {
          display: block;
          font-weight: 500;
          color: #202124;
          margin-bottom: 6px;
          font-size: 0.9rem;
        }

        .formulario-form label .required {
          color: #d93025;
          margin-left: 2px;
        }

        .formulario-form input,
        .formulario-form textarea,
        .formulario-form select {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #dadce0;
          border-radius: 8px;
          font-size: 0.95rem;
          font-family: inherit;
          background: white;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .formulario-form input:focus,
        .formulario-form textarea:focus,
        .formulario-form select:focus {
          outline: none;
          border-color: #fdd835;
          box-shadow: 0 0 0 3px rgba(253, 216, 53, 0.2);
        }

        .formulario-form input.error,
        .formulario-form textarea.error {
          border-color: #d93025;
        }

        .formulario-form input.error:focus,
        .formulario-form textarea.error:focus {
          border-color: #d93025;
          box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.2);
        }

        .formulario-form input::placeholder,
        .formulario-form textarea::placeholder {
          color: #9aa0a6;
        }

        .formulario-form textarea {
          min-height: 120px;
          resize: vertical;
          line-height: 1.6;
        }

        .formulario-form select {
          cursor: pointer;
        }

        .formulario-form .checkbox-group {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
        }

        .formulario-form .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #fdd835;
          flex-shrink: 0;
        }

        .formulario-form .checkbox-group label {
          margin: 0;
          cursor: pointer;
          font-weight: 400;
          color: #3c4043;
        }

        .formulario-form .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e8eaed;
        }

        .formulario-form .form-actions button {
          padding: 10px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
          flex: 1;
        }

        .formulario-form .form-actions button[type="submit"] {
          background: #fdd835;
          color: #202124;
        }

        .formulario-form .form-actions button[type="submit"]:hover:not(:disabled) {
          background: #fbc02d;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(253, 216, 53, 0.3);
        }

        .formulario-form .form-actions button[type="submit"]:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .formulario-form .form-actions button[type="button"] {
          background: #f1f3f4;
          color: #5f6368;
        }

        .formulario-form .form-actions button[type="button"]:hover {
          background: #e8eaed;
        }

        .formulario-form .success-message {
          background: #e6f4ea;
          color: #1e7e34;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 16px;
          border-left: 4px solid #34a853;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .formulario-form .success-message::before {
          content: "✓";
          font-size: 1.2rem;
          font-weight: 700;
        }

        .formulario-form .error-message {
          background: #fce8e6;
          color: #d93025;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 16px;
          border-left: 4px solid #d93025;
        }

        .campo-error {
          color: #d93025;
          font-size: 0.8rem;
          margin-top: 4px;
          display: block;
        }

        @media (max-width: 768px) {
          .formulario-container {
            padding: 10px 0;
          }

          .formulario-container h2 {
            font-size: 1.5rem;
            text-align: center;
          }

          .formulario-form {
            padding: 20px;
          }

          .formulario-form .form-actions {
            flex-direction: column;
          }

          .formulario-form .form-actions button {
            width: 100%;
            padding: 12px;
          }
        }

        @media (max-width: 480px) {
          .formulario-form {
            padding: 16px;
          }

          .formulario-form input,
          .formulario-form textarea,
          .formulario-form select {
            font-size: 0.9rem;
            padding: 8px 12px;
          }

          .formulario-container h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>

      <div className="formulario-container">
        <h2>{tituloFormulario}</h2>

        <form className="formulario-form" onSubmit={handleSubmit}>
          {mensaje && (
            <div className={mensaje.includes('éxito') ? 'success-message' : 'error-message'}>
              {mensaje}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="titulo">
              Título <span className="required">*</span>
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Escribe un título para tu nota..."
              className={errores.titulo ? 'error' : ''}
            />
            {errores.titulo && <span className="campo-error">{errores.titulo}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contenido">
              Contenido <span className="required">*</span>
            </label>
            <textarea
              id="contenido"
              name="contenido"
              value={formData.contenido}
              onChange={handleChange}
              placeholder="Escribe el contenido de tu nota..."
              rows="5"
              className={errores.contenido ? 'error' : ''}
            />
            {errores.contenido && <span className="campo-error">{errores.contenido}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="personal">Personal</option>
              <option value="estudio">Estudio</option>
              <option value="trabajo">Trabajo</option>
              <option value="ideas"> Ideas</option>
            </select>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="fijada"
              name="fijada"
              checked={formData.fijada}
              onChange={handleChange}
            />
            <label htmlFor="fijada">📌 Fijar nota</label>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel}>
              Cancelar
            </button>
            <button type="submit" disabled={tieneErrores}>
              {botonTexto}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormularioNota;