import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";

interface Task {
  id: number;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Clean the kitchen" },
    { id: 2, text: "Wash the dishes" },
    { id: 3, text: "Buy groceries" },
    { id: 4, text: "Cook dinner" },
  ]);

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const sampleTask: Task = {
    id: 1,
    text: "Sample Task",
  };

  return (
    <>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
