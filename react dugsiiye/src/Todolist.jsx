import { useState } from "react";
const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    setinputValue("");
    }
    
  };

  return (
    <div>
      <h2> Todo List </h2>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}> add task</button>
      <ul>
        {tasks.map((task) => (
          <li> {task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
