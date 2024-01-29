interface Task {
  id: number;
  text: string;
}

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ task, deleteTask }: TaskItemProps) => {
  return (
    <>
      <li className="task-item">
        {task.text}
        <button
          type="button"
          className="task-delete"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TaskItem;
