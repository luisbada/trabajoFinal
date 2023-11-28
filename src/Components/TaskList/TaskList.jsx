import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ tasks_, deleteTask, }) => {
  return (


    <div>
      {
        tasks_.length == 0?
          <h2>Aun no has ingresado ninguna tarea</h2>
          : tasks_.map (task => (
            <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>
          ))
      }
    </div>


  )
}

export default TaskList
