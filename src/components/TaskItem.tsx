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
      <li>
        {task.text}
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TaskItem;
