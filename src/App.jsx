import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { SeccionTareas } from './components/SeccionTareas'
import { useToDoList } from './hooks/useToDoList'


function App() {

  const {tareas, handleAddTarea, handleToggleTarea, handleDeleteTarea} = useToDoList()
  


  return (
    <>
      <header>
        <h1>Práctica TodoList</h1>
      </header>
      <main>
        <Formulario handleAddTarea= {handleAddTarea}/>
          <SeccionTareas handleToggleTarea={handleToggleTarea} tareas={tareas} handleDeleteTarea={handleDeleteTarea}/>
      </main>
      <footer>Práctica TodoList</footer>

    </>
  )
}

export default App
