import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";

import './TaskItem.css'
const TaskItem = ({task, deleteTask,}) => {


  const [completed_Task, setCompleted_Task] = useState (false)

  const handleComepletedTask = () => {
    setCompleted_Task(true)
  }
  
  const handleUncomepletedTask = () => {
    setCompleted_Task(false)
  }

  return (
    <div className='container-taskItem'>
     
      
      
      {
        completed_Task
          ?
          <div className='completedTask' >
            <h3>{task.title}</h3>
            <p>TAREA COMPLETADA</p>
          </div>
          :
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
      }

           

      <span>{task.createdAt} </span><br />
      <div className='buttons'>
      <button className='trash' onClick={() => deleteTask(task.id)}>Finalizar tarea<FaTrashCan className='trashIcon'/></button>
       {
        completed_Task
        ?<div className='completedButtons'>
            <button className='btn-completed' onClick={()=>handleUncomepletedTask()} >Tarea completada </button>
            <button className='trash' onClick={() => deleteTask(task.id)}>Eliminar Tarea<FaTrashCan className='trashIcon'/></button>
        </div>
        :<button onClick={()=>handleComepletedTask()} >Tarea completada </button>
        
       }
      </div>
      <hr />
    </div>
  )
}

export default TaskItem