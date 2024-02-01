import { useState, useEffect } from "react";

interface Task {
  id: number;
  text: string;
  checked: boolean;
}

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleTask: (taskId: number) => void;
  editTask: (taskId: number, newText: string) => void;
}

const TaskItem = ({
  task,
  deleteTask,
  toggleTask,
  editTask,
}: TaskItemProps) => {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    toggleTask(task.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedText(task.text);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  useEffect(() => {
    if (isEditing) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          handleSaveClick();
        } else if (event.key === "Escape") {
          handleCancelClick();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isEditing, handleSaveClick, handleCancelClick]);

  return (
    <div className={`task-item ${checked ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <>
          <input
            className="text-edit"
            type="text"
            value={editedText}
            onChange={handleChange}
          />

          <button type="button" className="task-save" onClick={handleSaveClick}>
            &#10004; {/*Checkmark*/}
          </button>

          <button
            type="button"
            className="task-cancel"
            onClick={handleCancelClick}
          >
            &#10006; {/*Cross*/}
          </button>
        </>
      ) : (
        <>
          <li className="task-text">{task.text}</li>

          <button type="button" className="task-edit" onClick={handleEditClick}>
            Edit
          </button>

          <button
            type="button"
            className="task-delete"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
