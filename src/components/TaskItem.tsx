import { useState } from "react";

interface Task {
  id: number;
  text: string;
}

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ task, deleteTask }: TaskItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={`task-item ${checked ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <li className="task-text">{task.text}</li>
      <button
        type="button"
        className="task-delete"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
