// import  { createContext, useReducer, useContext, useEffect } from 'react';
// import useNotificacion from '../hooks/useNotificacion';
// import useLocalStorage from '../hooks/useLocalStorage';

// const NotasContext = createContext();

// const estadoInicial = {
//   notas: [
//     {
//       id: "1",
//       titulo: "Pendiente",
//       contenido: "Limpiar cuarto y lavar",
//       categoria: "personal",
//       fijada: true,
//       fechaCreacion: new Date().toISOString(),
//     },
//     {
//       id: "2",
//       titulo: "Hacer Lab5",
//       contenido: "Empezar a hacer ele ejrcicio2",
//       categoria: "estudio",
//       fijada: false,
//       fechaCreacion: new Date().toISOString(),
//     },
//     {
//       id: "3",
//       titulo: "Reunión",
//       contenido: "Revisar avances del proyecto.",
//       categoria: "trabajo",
//       fijada: true,
//       fechaCreacion: new Date().toISOString(),
//     },
//     {
//       id: "4",
//       titulo: "Idea para aplicación",
//       contenido: "Crear una app para organizar tareas.",
//       categoria: "ideas",
//       fijada: false,
//       fechaCreacion: new Date().toISOString(),
//     },
//     {
//       id: "5",
//       titulo: "Base de Datos",
//       contenido: "hacer CP8",
//       categoria: "estudio",
//       fijada: false,
//       fechaCreacion: new Date().toISOString(),
//     },
//   ],

//   // INCISO 3
//   filtroCategoria: "todas",
//   busqueda: "",
// };


// function notasReducer(state, action) {
//   switch (action.type) {

//     // AGREGAR NOTA
//     case "AGREGAR_NOTA":
//       return {
//         ...state,
//         notas: [action.payload, ...state.notas],
//       };

//     // ELIMINAR NOTA
//     case "ELIMINAR_NOTA":
//       return {
//         ...state,
//         notas: state.notas.filter((nota) => nota.id !== action.payload),
//       };

//    case "EDITAR_NOTA":
//   return {
//     ...state,
//     notas: state.notas.map((nota) =>
//       nota.id === action.payload.id
//         ? { ...nota, ...action.payload.data }  // ← usa action.payload.data
//         : nota
//     ),
//   };

//     // TOGGLE FIJADA
//     case "TOGGLE_FIJADA":
//       return {
//         ...state,
//         notas: state.notas.map((nota) =>
//           nota.id === action.payload
//             ? { ...nota, fijada: !nota.fijada }
//             : nota
//         ),
//       };

//     // CAMBIAR FILTRO
//     case "CAMBIAR_FILTRO":
//       return {
//         ...state,
//         filtroCategoria: action.payload,
//       };

//     // CAMBIAR BUSQUEDA
//     case "CAMBIAR_BUSQUEDA":
//       return {
//         ...state,
//         busqueda: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// function NotasProvider({ children }) {
//   // 👇 Usa localStorage para persistir el estado
//   const [estadoPersistido, setEstadoPersistido] = useLocalStorage('notasApp', estadoInicial);
  
//   // 👇 Inicializa el reducer con el estado guardado
//   const [state, dispatch] = useReducer(notasReducer, estadoPersistido);

//   // 👇 Sincroniza cambios con localStorage
//   useEffect(() => {
//     setEstadoPersistido(state);
//   }, [state, setEstadoPersistido]);

//   const agregarNota = (nota) => {
//     dispatch({
//       type: "AGREGAR_NOTA",
//       payload: nota,
//     });
//   };

//   const eliminarNota = (id) => {
//     dispatch({
//       type: "ELIMINAR_NOTA",
//       payload: id,
//     });
//   };

//  const editarNota = (id, data) => {
//   dispatch({
//     type: "EDITAR_NOTA",
//     payload: { id, data },  // ← envía id y data
//   });
// };

//   const toggleFijada = (id) => {
//     dispatch({
//       type: "TOGGLE_FIJADA",
//       payload: id,
//     });
//   };

//   const cambiarFiltro = (categoria) => {
//     dispatch({
//       type: "CAMBIAR_FILTRO",
//       payload: categoria,
//     });
//   };

//   const cambiarBusqueda = (texto) => {
//     dispatch({
//       type: "CAMBIAR_BUSQUEDA",
//       payload: texto,
//     });
//   };

//   return (
//   <NotasContext.Provider
//     value={{
//       state,
//       agregarNota,
//       eliminarNota,
//       editarNota,
//       toggleFijada,
//       cambiarFiltro,
//       cambiarBusqueda,
//     }}
//   >
//     {children}
//   </NotasContext.Provider>
// );
// }

import { createContext, useReducer, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useNotificacion from '../hooks/useNotificacion';

const NotasContext = createContext();

const estadoInicial = {
  notas: [
    {
      id: "1",
      titulo: "Pendiente",
      contenido: "Limpiar cuarto y lavar",
      categoria: "personal",
      fijada: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "2",
      titulo: "Hacer Lab5",
      contenido: "Empezar a hacer ele ejrcicio2",
      categoria: "estudio",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "3",
      titulo: "Reunión",
      contenido: "Revisar avances del proyecto.",
      categoria: "trabajo",
      fijada: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "4",
      titulo: "Idea para aplicación",
      contenido: "Crear una app para organizar tareas.",
      categoria: "ideas",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "5",
      titulo: "Base de Datos",
      contenido: "hacer CP8",
      categoria: "estudio",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
  ],
  filtroCategoria: "todas",
  busqueda: "",
};

function notasReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_NOTA":
      return {
        ...state,
        notas: [action.payload, ...state.notas],
      };
    case "ELIMINAR_NOTA":
      return {
        ...state,
        notas: state.notas.filter((nota) => nota.id !== action.payload),
      };
    case "EDITAR_NOTA":
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload.id
            ? { ...nota, ...action.payload.data }
            : nota
        ),
      };
    case "TOGGLE_FIJADA":
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload
            ? { ...nota, fijada: !nota.fijada }
            : nota
        ),
      };
    case "CAMBIAR_FILTRO":
      return {
        ...state,
        filtroCategoria: action.payload,
      };
    case "CAMBIAR_BUSQUEDA":
      return {
        ...state,
        busqueda: action.payload,
      };
    default:
      return state;
  }
}

function NotasProvider({ children }) {
  const [estadoPersistido, setEstadoPersistido] = useLocalStorage('notasApp', estadoInicial);
  const [state, dispatch] = useReducer(notasReducer, estadoPersistido);
  
  // 👇 AÑADE EL HOOK DE NOTIFICACIÓN
  const { notificacion, mostrar, cerrar } = useNotificacion(3000);

  useEffect(() => {
    setEstadoPersistido(state);
  }, [state, setEstadoPersistido]);

  const agregarNota = (nota) => {
    dispatch({
      type: "AGREGAR_NOTA",
      payload: nota,
    });
    mostrar(`Nota "${nota.titulo}" creada con éxito`, 'success'); 
  };

const eliminarNota = (id) => {
  const nota = state.notas.find(n => n.id === id);
  dispatch({
    type: "ELIMINAR_NOTA",
    payload: id,
  });
  if (nota) {
    mostrar(` Nota "${nota.titulo}" eliminada`, 'error');  // ← error = rojo
  }
};
  const editarNota = (id, data) => {
    dispatch({
      type: "EDITAR_NOTA",
      payload: { id, data },
    });
    mostrar(` Nota "${data.titulo || 'sin título'}" actualizada`, 'success'); // 👈 AÑADE
  };

  const toggleFijada = (id) => {
    const nota = state.notas.find(n => n.id === id);
    dispatch({
      type: "TOGGLE_FIJADA",
      payload: id,
    });
    if (nota) {
      const estado = !nota.fijada ? 'fijada' : 'desfijada';
      mostrar(` Nota "${nota.titulo}" ${estado}`, 'info'); // 👈 AÑADE
    }
  };

  const cambiarFiltro = (categoria) => {
    dispatch({
      type: "CAMBIAR_FILTRO",
      payload: categoria,
    });
  };

  const cambiarBusqueda = (texto) => {
    dispatch({
      type: "CAMBIAR_BUSQUEDA",
      payload: texto,
    });
  };

  return (
    <NotasContext.Provider
      value={{
        state,
        agregarNota,
        eliminarNota,
        editarNota,
        toggleFijada,
        cambiarFiltro,
        cambiarBusqueda,
        notificacion,  // 👈 EXPORTA
        cerrar,        // 👈 EXPORTA
      }}
    >
      {children}
    </NotasContext.Provider>
  );
}

export { NotasContext, NotasProvider };