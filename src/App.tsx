import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

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

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <h1 className="list-heading">Rares's to-do list</h1>

      <TaskList tasks={tasks} deleteTask={deleteTask} />

      <TaskForm addTask={addTask} />
    </>
  );
}

export default App;
