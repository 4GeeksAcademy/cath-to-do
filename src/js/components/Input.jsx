import React, { useState } from "react";

const Input = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if ((event.key === "Enter") & (input != "")) {
      console.log("Enter is pressed");
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  console.log(tasks);

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
