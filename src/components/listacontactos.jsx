import { useState } from "react";
import Alerta from "./Alerta";
import Modal from "./Modal";
import BotonAccion from "./BotonAccion";

const ListaContactos = () => {
  const [contactos, setContactos] = useState([
    {
      id: 1,
      nombre: "Rachel Gari",
      telefono: "54901419",
      favorito: true,
    },
    {
      id: 2,
      nombre: "Moises Bermudez",
      telefono: "58072819",
      favorito: false,
    },
    {
      id: 3,
      nombre: "Lainey Escarra",
      telefono: "52768031",
      favorito: true,
    },
    {
      id: 4,
      nombre: "Vivian Saez",
      telefono: "54251335",
      favorito: false,
    },
    {
      id: 5,
      nombre: "Marcos Gari",
      telefono: "54340330",
      favorito: false,
    },
  ]);

  const [nuevoBusqueda, setNuevoBusqueda] = useState("");
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [contactoEliminar, setContactoEliminar] = useState(null);

  const favoritos = contactos.filter((c) => c.favorito).length;

  const contactosFiltrados = contactos.filter((contacto) => {
    const coincideBusqueda =
      contacto.nombre.toLowerCase().includes(nuevoBusqueda.toLowerCase()) ||
      contacto.telefono.includes(nuevoBusqueda);

    const coincideFavorito =
      !mostrarFavoritos || contacto.favorito;

    return coincideBusqueda && coincideFavorito;
  });

  const cambiarFavorito = (id) => {
    setContactos((prev) =>
      prev.map((contacto) =>
        contacto.id === id
          ? {
              ...contacto,
              favorito: !contacto.favorito,
            }
          : contacto
      )
    );
  };

  const solicitarEliminar = (contacto) => {
    setContactoEliminar(contacto);
    setModalAbierto(true);
  };

  const eliminarContacto = () => {
    setContactos((prev) =>
      prev.filter(
        (contacto) => contacto.id !== contactoEliminar.id
      )
    );

    setModalAbierto(false);
    setContactoEliminar(null);
  };

  return (
    <div className="lista-contactos">

      <h2>Lista de Contactos</h2>

      <input
        type="text"
        placeholder="Buscar por nombre o teléfono..."
        value={nuevoBusqueda}
        onChange={(e) => setNuevoBusqueda(e.target.value)}
        className="busqueda"
      />

     <BotonAccion
  texto={mostrarFavoritos ? "Mostrar todos" : "Solo favoritos"}
  variante={mostrarFavoritos ? "primario" : "secundario"}
  onClick={() => setMostrarFavoritos((prev) => !prev)}
      />

      <p className="contador-contactos">
        Favoritos: {favoritos} de {contactos.length} |
        Resultados: {contactosFiltrados.length}
      </p>

      {contactosFiltrados.length === 0 ? (
        <Alerta tipo="info" titulo="Información">
          <p>No se encontraron contactos.</p>
        </Alerta>
      ) : (
        contactosFiltrados.map((contacto) => (
          <div
            key={contacto.id}
            className="contacto"
          >
            <div className="datos-contacto">
              <h3>{contacto.nombre}</h3>

              <p>{contacto.telefono}</p>
            </div>

            <button
              className="favorito"
              onClick={() =>
                cambiarFavorito(contacto.id)
              }
            >
              {contacto.favorito ? "★" : "☆"}
            </button>

            <BotonAccion
              texto="Eliminar"
              variante="peligro"
              onClick={() =>
                solicitarEliminar(contacto)
              }
            />
          </div>
        ))
      )}

      <Modal
        titulo="Confirmar eliminación"
        abierto={modalAbierto}
      >
        <p>
          ¿Estás seguro de eliminar a{" "}
          <strong>
            {contactoEliminar?.nombre}
          </strong>
          ?
        </p>

        <div className="acciones-modal">
          <BotonAccion
            texto="Cancelar"
            variante="secundario"
            onClick={() => {
              setModalAbierto(false);
              setContactoEliminar(null);
            }}
          />

          <BotonAccion
            texto="Eliminar"
            variante="peligro"
            onClick={eliminarContacto}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ListaContactos;