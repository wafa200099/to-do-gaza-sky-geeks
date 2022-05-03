import ToDoHeader from "../components/ToDoHeader";
import ToDoItime from "../components/ToDoItime";
import ToDoFooter from "../components/ToDoFooter";
import { useState } from "react";

const ToDo = () => {
  const [toDos, setToDos] = useState([]);

  const onToDoAdd = (toDo) => {
    setToDos([toDo, ...toDos]); // add todo on the list of todos
  };

  const onToDodel = (id) => {
    const filtered = toDos.filter((item) => item.id !== id);
    setToDos(filtered); // add todo on the list of todos
  };

  const onToDodellAll = () => {
    setToDos([]);
  };

  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "500px",
        marginLeft: "450px",
        marginTop: "50px",
      }}
    >
      <ToDoHeader onToDoAdd={onToDoAdd} />
      {toDos.map((item) => (
        <ToDoItime title={item.title} id={item.id} onToDodel={onToDodel} />
      ))}

      <ToDoFooter onToDodellAll={onToDodellAll} length={toDos.length} />
    </div>
  );
};
export default ToDo;
