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
          className="btn-close"
          aria-label="Close"
          onClick={() => deleteTask(task.id)}
        />
      </li>
    </>
  );
};

export default TaskItem;
