import { Tareas } from "./Tareas"

export const SeccionTareas = ({tareas, handleToggleTarea}) => {
  return (
    <Tareas tareas= {tareas} handleToggleTarea={handleToggleTarea}/>
  )
}
