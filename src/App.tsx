import "./App.css";
import TaskItem from "./components/TaskItem";

interface Task {
  id: number;
  text: string;
}

function App() {
  const list = [
    "Clean the kitchen",
    "Wash the dishes",
    "Buy groceries",
    "Cook dinner",
  ];

  return (
    <>
      <TaskItem />
    </>
  );
}

export default App;
