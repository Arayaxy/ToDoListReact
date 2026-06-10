 import useReducer from "react"
import { tareasReducer } from "../reducer/tareasReducer"

 export const useToDoList = () => {
  const [tareas, dispatch] = useReducer(tareasReducer, [], init)

  const handleAddTarea = (newTarea)=>{
    const action = {
        type: "add tarea",
        payload: newTarea
    }

    dispatch(action)

  }

  const handleToggleTarea = (id)=>{
    // const action = {
    //     type: "toggle tarea",
    //     payload: id
    //
     }
 const handleDeleteTarea = (deleteTarea)=>{

  }
    return {
    tareas,
    handleAddTarea,
    handleToggleTarea,
    handleDeleteTarea
  }
}

 
   


