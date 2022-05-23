import React, { useState } from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
import image from "../../assets/empty.svg"
import data from  "../../data/tasks.json"
const Tasks = ({data,setunComleted,UnCompletedTask,OnDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  if(data.length <1)
  {
    return(
      <>
<div data-cy="tasks-empty" className={styles.empty}>
        <img src={image} alt="No Iteam in the Todolist" />
        <h3 className="h3tag">Empty List</h3>
        <p className="ptag"> Add a Task above</p>
      </div>
      </>
    );
}
  else{
    return (
      <>
        <ul data-cy="tasks" className={styles.tasks}>  
     {data.map((item)=>(
<Task key={item.id} OnDelete={OnDelete} item={item} data={data}
UnCompletedTask={UnCompletedTask} setunComleted={setunComleted} />

     ))}
     </ul>
      </>
    );
  }
  
};

export default Tasks;
