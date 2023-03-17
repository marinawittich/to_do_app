import axios from 'axios';

const url = "https://to-do-app-zdpq.onrender.com"

const getAllTasks = (setAllTasks) => {
    axios.get(url)
    .then(({data}) => {console.log(data)
    setAllTasks(data)
})
}

const addTask = (title, setTitle, setAllTasks) => {
    axios.post(url + '/newTask', {title})
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllTasks(setAllTasks)
    })
}

const editTask = (taskId, title, setTitle, setAllTasks,setEditing) => {
    axios.put(url + '/editTask', {_id:taskId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllTasks(setAllTasks)
    })
}

const deleteTask = (_id, setAllTasks) => {
    axios.post(url + '/deleteTask', {_id})
    .then((data) => {
        getAllTasks(setAllTasks)
    })
}

export {getAllTasks, addTask, editTask, deleteTask};