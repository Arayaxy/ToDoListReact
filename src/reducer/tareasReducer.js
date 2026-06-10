
export const tareasReducer = (state = [], action) => {

  switch (action.type) {
    case 'add tarea':

      console.log(action.payload)
      return [...state, action.payload]
        ;
    case 'toggle tarea':
      return state.map((tarea) =>
        tarea.id === action.payload
          ? { ...tarea, done: !tarea.done }
          : tarea
      )

        ;

    case 'TODO: delete tarea':
      break
      ;

    default: return state;
  }


}
