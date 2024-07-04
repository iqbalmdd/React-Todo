import React from "react";
import Tag from "./Tag";
import "./TaskCard.css"
import deleteIcon from "../assets/delete.png"

export default function TaskCard() {
  return (
    <article className="task_card">
      <p className="task_text">This is for Title</p>
      <div className="task_card_bottom_line">
        <div className="task_card_text">
            <Tag tagName='HTML' /> 
            <Tag tagName='CSS' /> 
        </div>
        <div className="task_delete">
            <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
}
