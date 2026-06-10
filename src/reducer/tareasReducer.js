import React from 'react'

export const tareasReducer = (state = [], action) => {

  switch(action.type){
    case 'add tarea':

    return[...state, action.payload]

    // console.log(action.payload)
       
    ;
    case 'toogle tarea':
      

    ;

    case 'delete tarea':
      return state.filter(tarea => tarea.id != action.payload)
    ;

    default: 
    return state;
  }
   

}
