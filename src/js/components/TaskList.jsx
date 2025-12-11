import React from "react";
import DeleteButton from "./DeleteButton";

const TaskList = ({ tasks, deleteTask, taskCount }) => {
  if (taskCount === 0) {
    return (
      <p className="fst-italic text-body-secondary">No tasks, add a task!</p>
    );
  }

  return (
    <ul className="list-group">
      {tasks.map((task, i) => (
        <li
          key={i}
          className="task-box list-group-item d-flex justify-content-between align-items-center"
        >
          {task}
          <DeleteButton onClick={() => deleteTask(i)} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
