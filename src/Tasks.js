import {AiFillEdit, AiFillDelete, AiFillCheckCircle } from 'react-icons/ai'
import './App.css'


export const MyTasks = ({title, updatingInput, deleteTask, dark }) => {

    const taskISDone = (e) => {
        const li = e.target
        li.classList.toggle('checked')
      }

    return(
        <div className='cont'>
            <div className='tasks'>
            <div className='title'>
            <AiFillCheckCircle size={40} className='iconCheck' onClick={taskISDone}></AiFillCheckCircle>
            <h5 className="text">{title}</h5>
            </div>
            <div className={`${dark ? 'darkMode' : "lightMode"} box-task-action`}>
            <AiFillEdit size={20} onClick={updatingInput}></AiFillEdit>
            <AiFillDelete size={20} onClick={deleteTask}></AiFillDelete>
            </div>
        </div>
        </div>
    )



}

