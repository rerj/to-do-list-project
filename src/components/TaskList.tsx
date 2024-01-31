import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
  checked: boolean;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask, toggleTask }: TaskListProps) => {
  const SortedTasks = [...tasks].sort((a, b) =>
    a.checked === b.checked ? 0 : a.checked ? 1 : -1
  );

  if (tasks.length === 0) {
    return (
      <>
        <h3 className="no-task-heading">List is currently empty...</h3>
        <div className="no-task-text">(Try adding some new tasks!)</div>
      </>
    );
  }

  return (
    <ul className="task-list">
      {SortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
