import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FloatingDots from "./components/FloatingDots";

interface Task {
  id: number;
  text: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Clean the kitchen", checked: false },
    { id: 2, text: "Wash the dishes", checked: false },
    { id: 3, text: "Buy groceries", checked: false },
    { id: 4, text: "Cook dinner", checked: false },
  ]);

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      <h1 className="list-heading">Rares's to-do list</h1>

      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />

      <TaskForm addTask={addTask} />

      <FloatingDots />
    </>
  );
}

export default App;
