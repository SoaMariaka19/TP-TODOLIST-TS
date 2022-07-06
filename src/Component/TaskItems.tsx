import React from "react";
import { Key } from "react";
import TaskItemes from "./TaksListes";
import TaskItem from "./TaskItem";

const TasksListes = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

  return (
    <>
      {props.tasks.map((t: { id: Key | undefined; }) => (
        <TaskItemes
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
      
    </>
  );
};

export default TasksListes;
