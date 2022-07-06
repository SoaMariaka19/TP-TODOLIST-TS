import React from "react";
import { Key } from "react";
import TaskItem from "./TaskItem";

const TasksList = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

  return (
    <>
      {props.tasks.map((t: { id: Key | undefined; }) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
      
    </>
  );
};

export default TasksList;
