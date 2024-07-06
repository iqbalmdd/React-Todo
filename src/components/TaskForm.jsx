import React, {useState} from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTask}) => {
  const [taskData, setTaskData] = useState({
    task:"",
    status:"todo",
    tags:[],
  });

  const handleChange = (e) => {
    const {name,value} = e.target;

    setTaskData((prev) => {
      return {...prev, [name]:value} /* ...prev digunakan untuk mengambil properti lainnya (task, status, tags) */
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTask(prev => {
      return [...prev, taskData]
    })
    setTaskData({
      task:"",
      status:"todo",
      tags:[],
    })
  }

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = (tag) => {
    if (taskData.tags.some(item => item === tag)) { /* Check 'tag' ada di array tags nggak */
      const filterTag = taskData.tags.filter(item => item !== tag) /* kalo ada, buat array baru yang berisi semua elemen array lama kecuali 'tag'  */
      setTaskData(prev => {
        return {...prev, tags:filterTag} /* filterTag menjadi array tags yang baru */ /* ...prev digunakan untuk mengambil properti lainnya (task & status) */
      })
    } else {
      setTaskData(prev => {
        return {...prev, tags:[...prev.tags, tag]} /* mengambil properti selain tags, dan mengambil semua elemen tags + 'tag' yang di klik  */
      })
    }
  }

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo")

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value)
  // };
  // const handleStatusChange = (e) => {
  //   setTask(e.target.value)
  // };
  // console.log(task, status)
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          name="task"
          onChange={handleChange}
        />
        {/* Button Tag */}
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName='HTML' selectTag={selectTag} selected={checkTag("HTML")}/>
            <Tag tagName='CSS' selectTag={selectTag} selected={checkTag("CSS")}/>
            <Tag tagName='JavaScript' selectTag={selectTag} selected={checkTag("JavaScript")}/>
            <Tag tagName='React' selectTag={selectTag} selected={checkTag("React")}/>
          </div>
          {/* DropDown */}
          <div>
            <select className="task_status" name="status" value={taskData.status} onChange={handleChange}>
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            {/* Submit Button */}
            <button className="task_submit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
