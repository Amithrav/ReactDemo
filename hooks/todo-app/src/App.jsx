import React from "react"; 
import React, { useState } from "react";

 
export default function App() { 
    const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

  return ( 
    <div style={{ textAlign: "center", marginTop: "50px" }}> 
      <h1>My To-Do App</h1> 
         <input 
        type="text" 
        placeholder="Enter a new task" 
        value={newTask} 
onChange={(e) => setNewTask(e.target.value)} 
/> 
<button>
  const addTask = () = < {
if (newTask.trim() === "") return; 
setTasks([...tasks, { id , Date.now(), text, newTask, done,false }]); 
setNewTask("");
};  />
</button>

    </div> 
  ); 
}