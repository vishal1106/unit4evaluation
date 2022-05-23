import React, { useState } from "react";
import styles from "./task.module.css";
import image from "../../assets/empty.svg"
import Counter from "../Counter/Counter"
const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const checking=()=>{
    props.data.filter((item)=>{
      if(item.done=="false")
      {

      }
    })
  }
  const [isCompleted,setIsCompleted]=useState(props.item.done);
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" 
      onChange={(e)=>{
        setIsCompleted(e.target.checked)
      }} />
      <div className={styles.text1}>
        <span className={{textDecoration:isCompleted ? "line-through":"none"}}>{props.item.text}</span>
      </div>
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter item={props.item} />
      <button data-cy="task-remove-button" className="remove"  onClick={()=>
      props.onDelete(props.item.id)}> 
      <img src={image} alt="" />
      </button>
    </li>
  );
};

export default Task;
