import { useState } from "react";

interface TaskFormProps {
  addTask: (newTask: { id: number; text: string }) => void;
}

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
      addTask(newTask);
      setTaskText("");
    }
  };

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="Add a new task"
        />{" "}
        <button type="submit" className="task-submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default TaskForm;
