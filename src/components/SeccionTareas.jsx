import { Tareas } from "./Tareas"

export const SeccionTareas = ({tareas, handleToggleTarea, handleDeleteTarea}) => {
  return (
    <Tareas tareas= {tareas} handleToggleTarea={handleToggleTarea} handleDeleteTarea= {handleDeleteTarea}/>
  )
}