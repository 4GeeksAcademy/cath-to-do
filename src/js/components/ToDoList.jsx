import React, { useState, useEffect } from "react";
import Input from "./Input";
import TaskList from "./TaskList";
import Footer from "./Footer";

const userName = "cathoup";
const url = "https://playground.4geeks.com/todo";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // Task array

  const getUser = async (userName) => {
    const resp = await fetch(`${url}/users/${userName}`);
    if (!resp.ok) {
      return { success: false };
    } else {
      const data = await resp.json();
      return { success: true, data: data.todos };
    }
  };

  const createUser = async (userName) => {
    const resp = await fetch(`${url}/users/${userName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp.ok;
  };

  const loadTasks = async (userName) => {
    const tasks = await getUser(userName);
    if (!tasks.success) {
      console.log("GET user failed. Returning empty task array.");
      setTasks([]);
    } else {
      console.log("GET user successful. Returning task array.");
      setTasks(tasks.data);
    }
  };

  const addTask = async (task) => {
    const resp = await fetch(`${url}/todos/${userName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (resp.ok) {
      await loadTasks(userName);
    }
  };

  const deleteTask = async (tasks, taskToDelete) => {
    // Get the id of the task to delete
    const taskId = tasks.find((task) => task.label === taskToDelete).id;

    console.log(`Deleting task with id: ${taskId}`);

    const resp = await fetch(`${url}/todos/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (resp.ok) {
      await loadTasks(userName);
    }
  };

  useEffect(() => {
    const init = async () => {
      const resp = await getUser(userName);

      if (!resp.success) {
        console.log(`User ${userName} does not exist. Creating user.`);
        await createUser(userName);
      } else {
        console.log(`User ${userName} exists.`);
      }

      await loadTasks(userName);
    };

    init();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1>TODOs</h1>
      <div className="card shadow-sm p-4" style={{ width: "30rem" }}>
        <Input addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          taskCount={tasks.length}
        />
        <Footer taskCount={tasks.length} />
      </div>
    </div>
  );
};

export default ToDoList;
