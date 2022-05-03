import { useState } from "react";

const ToDoHeader = (props) => {
  const [title, setTitle] = useState(" ");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAddToDo = () => {
    if (title.length == 0) return;
    const newToDo = {
      title: title,
      id: Math.random(),
      date: new Date(),
    };
    props.onToDoAdd(newToDo);

    setTitle(" ");
  };
  return (
    <div>
      <h2 style={{ marginLeft: "150px" }}>TO DO LIST APP</h2>
      <input
        type="text"
        placeholder="titile"
        value={title}
        onChange={handleTitleChange}
      />
      <button onClick={handleAddToDo} style={{ marginLeft: "50px" }}>
        +
      </button>
    </div>
  );
};
export default ToDoHeader;
