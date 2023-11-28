import React, { useState, useEffect } from 'react'
import './App.css'
import { TaskForm, TaskList } from './Components'

function App() {

  const [tasks, setTasks] = useState([])
  const [currentTasks, setCurrentTasks] = useState ([])
  const [searchString, setSearchString] = useState('')
  
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (taskId) =>{
    window.confirm("Esta por eliminar una de las tareas ¿Desea continuar?")?
    setTasks(tasks.filter(task => task.id !== taskId)): false
  }

  const handleChangeFilter = (e) => {
    setSearchString(e.target.value)
  }

  useEffect(()=>{
    setCurrentTasks(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))||
    setCurrentTasks(tasks.filter(task => task.description.toLowerCase().includes(searchString.toLowerCase())))
  
    },[searchString, tasks])


   
  return (
    <>
      <div className='controls'>
        <div>
          <label htmlFor="search">ENCUENTRA UNA TAREA</label>
          <input type="text" id="search" placeholder='buscar la tarea' value={searchString} onChange={handleChangeFilter} className='searchInput' />
        </div>

        <TaskForm addTask={addTask} />
      </div>
      <TaskList tasks_={currentTasks} deleteTask={deleteTask}  />

    </>
  )
}

export default App
