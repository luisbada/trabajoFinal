import React, { useState } from 'react'

import { FaSquarePlus } from "react-icons/fa6";


import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css'


const TaskForm = ({ addTask }) => {

  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleSubmitTask = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const task = { title, description, createdAt: new Date().toDateString(), id: uuidv4() }
    console.log(task)
    addTask(task)
    handleCloseModal();
  }


  return (
    <div>
      <button className='addButton' onClick={handleOpenModal}>nueva tarea <FaSquarePlus className='btn-plus' /></button>
      {
        isOpenModal
        &&
        <div className='modal-background'>
          <div className='modal'>
            <h2>Agregar nueva tarea</h2>

            <form onSubmit={handleSubmitTask}>
              <div className='imput-container'>
                <label htmlFor="title">Título:</label>
                <input type="text" id='title' name='title' placeholder='Ingrese un título' required />
              </div>

              <div className='imput-container'>
                <label htmlFor="description">Descripción:</label>
                <textarea name="description" id="description" placeholder='Escriba una breve descripción de la tarea...' required></textarea>
              </div>
              <div className='btn-container'>
                <button onClick={handleCloseModal}>Cancelar tarea</button>
                <button type='Submit'>Agregar tarea</button>

              </div>
            </form>
          </div>
        </div>
      }


    </div>
  )
}

export default TaskForm