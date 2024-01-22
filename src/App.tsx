import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

interface Task {
  id: number;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteTask = (taskId: number) => {};

  const list = [
    "Clean the kitchen",
    "Wash the dishes",
    "Buy groceries",
    "Cook dinner",
  ];

  const sampleTask: Task = {
    id: 1,
    text: "Sample Task",
  };

  return (
    <>
      <TaskItem task={sampleTask} deleteTask={deleteTask} />
    </>
  );
}

export default App;
