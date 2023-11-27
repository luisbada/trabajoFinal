import React, { useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './Components'

function App() {

  const [tasks, setTasks] = useState([])
  
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  console.log(tasks)

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id != taskId))

  }


  return (
    <>
    <TaskForm addTask={addTask} />
    <TaskList tasks_={tasks} deleteTask={deleteTask}  />
         
    </>
  )
}

export default App
