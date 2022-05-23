import React, { useState }  from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [value, setValue]= useState("");
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." onChange={(e)=>{
      setValue(e.target.value);
      }} />
      <button data-cy="add-task-button" onClick={()=>{
        console.log(value);
        setValue("")
      }}>+</button>
    </div>
  );
};

export default AddTask;
