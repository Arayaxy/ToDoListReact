
export const Formulario = () => {
  const handleSubmit = (ev) =>{
    ev.preventDefault()
    const tarea = ev.target.tarea.value;
    const descripcion = ev.target.descripcion.value;
    console.log(tarea)
     console.log(descripcion)

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Lista Tareas</h2>
      <h3>Añadir tarea</h3>
      <input type="text" placeholder='tarea'name= 'tarea' />
      <textarea placeholder="Descripcion"name="descripcion" />
      <button type="submit"  value="Añadir tarea">añadir tarea</button>
    </form>
  )
}
