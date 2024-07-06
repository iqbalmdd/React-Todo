import React,{useState} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import { useEffect } from 'react'

const oldTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTask] = useState(JSON.parse(oldTasks) || []) /*Mengakses string pada local storage dan convert ke array lagi, apabila local storage null, maka diberi array kosong agar tidak error */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) /* JSON.stringify digunakan untuk convert array menjadi string agar nantinya dapat diakses kembali sebagai array */
  } , [tasks]) /* UseEffect untuk menyimpan perubahan HANYA jika [tasks] mengalami perubahan */
  
  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task,index) => index !== taskIndex)
    setTask(newTask)
  }

  console.log(tasks)

  return (
    <div className='app'>
      <TaskForm setTask={setTask} />
      <main className='app_main'>
        <TaskColumn columnName="To Do" icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn columnName="Doing" icon={doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn columnName="Done" icon={doneIcon} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App