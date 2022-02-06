import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Spinner } from "react-bootstrap";
import Card from "./Components/Card";
import Add from "./Components/Add";

function App() {
  const initTasks = [
    { id: 0, descreption: "coding", done: false },
    { id: 1, descreption: "meeting my mom", done: false },
  ];
  const [tasks, setTasks] = useState(initTasks);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((elt) => elt.id !== id));
  };
  const done = (id) => {
    setTasks(
      tasks.map((elt) => {
        return elt.id == id ? (elt.done = true) : (elt.done = false);
      })
    );
  };
  useEffect(() => {
    console.log("updating");
  }, [tasks]);

  return (
    <div className="App" style={{ margin: "150px" }}>
      <Add addTask={addTask} />
      {tasks.map((task, index) => (
        <Card
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          done={done}
        />
      ))}
    </div>
  );
}

export default App;
