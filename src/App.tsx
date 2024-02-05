import { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FloatingDots from "./components/FloatingDots";
import DeleteAllCheckedButton from "./components/DeleteAllCheckedButton";
import NameForm from "./components/NameForm";
import ChangeNameButton from "./components/ChangeNameButton";

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

  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem("currentName");
    return storedName ? JSON.parse(storedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("currentName", JSON.stringify(name));
  });

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

  const editTask = (taskId: number, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const addName = (newName: { text: string }) => {
    setName(newName.text);
  };

  const resetName = () => {
    setName("");
  };

  if (name === "") {
    return (
      <>
        <NameForm addName={addName} />
        <FloatingDots />
      </>
    );
  } else
    return (
      <>
        <h1 className="list-heading">{name}'s to-do list</h1>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />

        <TaskForm addTask={addTask} />

        <DeleteAllCheckedButton
          deleteAllFinishedTasks={deleteAllFinishedTasks}
        />

        <ChangeNameButton resetName={resetName} />

        <FloatingDots />
      </>
    );
}

export default App;
