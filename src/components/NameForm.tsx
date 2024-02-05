import { useState } from "react";

interface NameFormProps {
  addName: (newName: { text: string }) => void;
}

const NameForm = ({ addName }: NameFormProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim() !== "") {
      const newName = {
        text: name,
      };
      addName(newName);
      setName("");
    }
  };

  return (
    <>
      <h1 className="list-heading">Please input your name below</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="name-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Write your name"
        />{" "}
        <button type="submit" className="task-submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default NameForm;
