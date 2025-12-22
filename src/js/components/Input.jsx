import React, { useState } from "react";

const Input = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if ((event.key === "Enter") & (input != "")) {
      console.log("Enter is pressed, adding a task");
      const newTask = {
        label: input,
        is_done: false,
      };
      console.log(`Add new task: ${newTask.label}`);
      addTask(newTask);

      setInput("");
    }
  };

  return (
    <input
      className="form-control mb-3"
      type="text"
      placeholder="What needs to be done?"
      value={input}
      onKeyDown={handleKeyDown}
      onChange={(event) => setInput(event.target.value)}
    />
  );
};

export default Input;
