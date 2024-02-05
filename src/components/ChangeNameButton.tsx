interface ChangeNameButtonProps {
  resetName: () => void;
}

const ChangeNameButton = ({ resetName }: ChangeNameButtonProps) => {
  return (
    <button className="change-name-button" onClick={resetName}>
      Change Name
    </button>
  );
};

export default ChangeNameButton;
