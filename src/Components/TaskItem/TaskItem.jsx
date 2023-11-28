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
        <h3>{task.title}<span>TAREA COMPLETADA</span></h3>
        <p>{task.description}</p>
        </div>
        :
        <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        </div>
      }

           

      <span>{task.createdAt} </span><br />
      <button onClick={() => deleteTask(task.id)}>Finalizar</button>
      {
        completed_Task
        ? <button className='btn-uncompleted' onClick={()=>handleUncomepletedTask()} >Tarea completada <FaTrashCan className='trashIcon'/></button>
        :<button className='btn-completed' onClick={()=>handleComepletedTask()} >Tarea completada <FaTrashCan className='trashIcon'/></button>
      }
      
      <hr />
    </div>
  )
}

export default TaskItem