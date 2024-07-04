import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        />
        {/* Button Tag */}
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName='HTML' />
            <Tag tagName='CSS' />
            <Tag tagName='JavaScript' />
            <Tag tagName='React' />
          </div>
          {/* DropDown */}
          <div>
            <select className="task_status">
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
