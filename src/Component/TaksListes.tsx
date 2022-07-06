import React from "react";
import './../css/App.css';
const TaskItemes = (props: { task: any; toggleTask: any; deleteTask: any; }) => {
  
    const { task, toggleTask, deleteTask } = props;
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
  
          <span
            className="forme"
            onClick={() => deleteTask(task.id)}
            role="button"
            style={{ padding: "5px", marginLeft: "20px" , fontSize:"20px" }}
          >
           X
          </span>
        </label>
      </div>
      
    );
  };
  
  export default TaskItemes;