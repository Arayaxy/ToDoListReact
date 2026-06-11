

export const Tareas = ({ tareas, handleToggleTarea, handleDeleteTarea }) => {
  return (

    <>

      <section>
        {tareas.map((tarea) => (
          <article key={tarea.id}>
            <h3>{tarea.tarea}</h3>
            <p>{tarea.descripcion}</p>

            <button onClick={() => handleToggleTarea(tarea.id)}
              disabled={tarea.done}>
              {tarea.done ? "Finalizada" : " En Proceso"}

            </button>

            <button onClick={() => handleDeleteTarea(tarea.id)} type="button">Eliminar</button>
          </article>
        ))}
      </section>



    </>

  )
}
