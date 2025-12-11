import React, { useState } from "react";
import Input from "./Input";
import TaskList from "./TaskList";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // Task array

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1>TODOs</h1>
      <div className="card shadow-sm p-4" style={{ width: "30rem" }}>
        <Input tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default ToDoList;
