
import { useEffect, useState } from 'react';
import './App.css';
import { getAllTasks, addTask, editTask, deleteTask } from './FetchTasks';
import { MyTasks } from './Tasks';
import Switch from "react-switch";
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'


function App() {

const [allTasks, setAllTasks] = useState([])
const [title, setTitle] = useState("")
const [editing, setEditing] = useState(false)
const [taskId, setTaskId] = useState("")
const [dark, setDark] = useState(true);
 
useEffect (() => {
  getAllTasks(setAllTasks)
}, [])

const updatingInput = (_id, title) => {
  setEditing(true)
  setTitle(title)
  setTaskId(_id)
}


  return (
    <div className={`${dark ? 'darkMode-App' : "lightMode-App"} App`}>
      <div className='app-container'>
      <h1 className='header'>ToDo App</h1>
      <div className={`${dark ? 'darkMode-app-title-container' : "lightMode-app-title-container"} app-title-container`}>
      
      <div>
      <Switch
        checked={dark}
        onChange={() => setDark(!dark)}
        uncheckedIcon={<div className='check-sun-btn' ><BsSunFill size={18} /></div>}
        checkedIcon={<div className='check-moon-btn'><BsFillMoonStarsFill size={18} /></div>} />
      </div>
      
      <input
      className='task-input task-input-title'
      type="text"
      placeholder="Enter new task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      
      <button className={`task-btn ${dark ? 'darkMode-add-btn' : 'lightMode-add-btn'} add-btn`}
      disabled ={!title}
      onClick = {
        editing ? () => editTask(taskId, title, setTitle, setAllTasks, setEditing) :
        () => addTask(title, setTitle, setAllTasks)
      }
      >
      {editing ? "Edit" : "Add"}
      </button>
      </div>

     {allTasks.map((todo) => <MyTasks title={todo.title}  key={todo._id} 
     updatingInput = {() => updatingInput(todo._id, todo.title)}
     deleteTask = {() => deleteTask(todo._id, setAllTasks)}
     />
     )}
      </div>

     
    </div>
  )
    }




export default App;
