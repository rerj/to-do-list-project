import { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FloatingDots from "./components/FloatingDots";
import DeleteAllCheckedButton from "./components/DeleteAllCheckedButton";

interface Task {
  id: number;
  text: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const deleteAllFinishedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.checked));
  };

  return (
    <>
      <h1 className="list-heading">Rares's to-do list</h1>

      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />

      <TaskForm addTask={addTask} />

      <DeleteAllCheckedButton deleteAllFinishedTasks={deleteAllFinishedTasks} />

      <FloatingDots />
    </>
  );
}

export default App;
