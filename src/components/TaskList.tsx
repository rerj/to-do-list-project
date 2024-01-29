import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask }: TaskListProps) => {
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
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
