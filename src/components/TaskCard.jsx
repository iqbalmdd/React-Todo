import React from "react";
import Tag from "./Tag";
import "./TaskCard.css"
import deleteIcon from "../assets/delete.png"

export default function TaskCard({title, tags, handleDelete, index}) {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_text">
            {tags.map(
              (tag,index) => ( <Tag key={index} tagName={tag} selected />
            ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
            <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
}
