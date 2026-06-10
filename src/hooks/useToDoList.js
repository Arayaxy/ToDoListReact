import {useReducer} from "react"
import { tareasReducer } from "../reducer/tareasReducer"

 export const useToDoList = () => {
  const [tareas, dispatch] = useReducer(tareasReducer, [])

  const handleAddTarea = (nuevaTarea)=>{
    const action = {
        type: "add tarea",
        payload: nuevaTarea
    }
   
    dispatch(action)

  }

  const handleToggleTarea = (id)=>{

    const action = {
      type: "toggle tarea",
      payload: id
    }
    dispatch(action)

  }

 const handleDeleteTarea = (id) =>{

  const action = {
    type: "delete tarea",
    payload: id

  }

  dispatch(action)
  

  }


    return {
    tareas,
    handleAddTarea,
    handleToggleTarea,
    handleDeleteTarea
  }
}

 

