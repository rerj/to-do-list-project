interface DeleteAllCheckedButtonProps {
  deleteAllFinishedTasks: () => void;
}

const DeleteAllCheckedButton = ({
  deleteAllFinishedTasks,
}: DeleteAllCheckedButtonProps) => {
  return (
    <button className="delete-all-button" onClick={deleteAllFinishedTasks}>
      Delete all finished tasks
    </button>
  );
};

export default DeleteAllCheckedButton;
