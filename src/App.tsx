import React, { useState } from "react";
import TaskForm from "./Component/TaskButton";
import TasksList from "./Component/TasksList";
import './css/App.css';
import TasksListes from "./Component/TaskItems";
function App():any{

    const [tasks, setTasks] = useState([
      { id: 1, text: "Manger!", done: true },
    ]);
    const [doing, setDoing] = useState([
      {}
    ]);
    const [done, setDone] = useState([
      {}
    ]);
  
    const addTask = (text: any) => {
      const newTask = {
        text,
        id: Date.now(),
        done: false,
      };
  
      setTasks([...tasks, newTask]);
    };
    const addTask1 = (text: any) => {
      const newTask = {
        text,
        id: Date.now(),
        done: false,
      };
  
      setDoing([...tasks, newTask]);
    };
    const addTask2 = (text: any) => {
      const newTask = {
        text,
        id: Date.now(),
        done: true,
      };
  
      setDone([...doing, newTask]);
    };
    const deleteTask = (id: number) => {
      const filteredTasks = tasks.filter((t) => t.id !== id);
      setTasks(filteredTasks);
      addTask1(filteredTasks)
    };
    const deleteTask2 = (id: number) => {
      const filteredTasks = tasks.filter((t) => t.id !== id);
      setDoing(filteredTasks);
      addTask2(filteredTasks)
    };
    const deleteTask3 = (id: number) => {
      const filteredTasks = tasks.filter((t) => t.id !== id);
      setDone(filteredTasks);
    }

   
    const toggleTask = (id:number ) => {
      const realTask = tasks.find((t) => t.id === id);
      const index = tasks.findIndex((t) => t.id === id);
      const taskCopy = { ...realTask };
      const tasksListCopy :any = [...tasks];
  
      tasksListCopy[index] = taskCopy;
      setTasks(tasksListCopy);
    };
  
    return(
      <div className="App">

    <header>
      <div className="nav-bar">        
        <TaskForm addTask={addTask}/>      
      </div>
    </header>
      <div className="Container">
          <div className="todo">
            <div className="todo-body">
              <table>
                <thead>
                  <th>
                  <span className="title1">TO DO</span>
                  </th>
                </thead>
                <tbody>
                    <TasksList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
                </tbody>
              </table>
            </div>
          </div>
          <div className="doing">
            <div className="doing-body">
            <table>
                <thead>
                <span className="title2">DOING</span>
                </thead>
                <tbody>
                  <th>
                <TasksList tasks={doing} toggleTask={toggleTask} deleteTask={deleteTask2}/>
                  </th>
                </tbody>
              </table>
            </div>
          </div>
          <div className="done">
            <div className="done-body">
            <table>
                <thead>
                  <th>
                  <span className="title3">DONE</span>
                  </th>
                </thead>
                <tbody>
                  <th>
                  <TasksListes tasks={done} toggleTask={toggleTask} deleteTask={deleteTask3}/>
                  </th>
                </tbody>
              </table>
            </div>
          </div>
      </div>
      
    </div>
    )
}
export default App;

