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
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
