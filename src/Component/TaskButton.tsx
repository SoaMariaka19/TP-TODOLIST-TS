import React from "react";
import { useState } from "react";

const TaskForm = (props: { addTask: (arg0: string) => void; }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "5px", marginLeft: "300px" ,marginTop:"89px" }}
      />
    </form>
  );
};

export default TaskForm;