import React from "react";
import "../components/style.css";

const ToDoItime = (props) => {
  const handelDell = () => {
    props.onToDodel(props.id);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>{props.title}</div>
      <button onClick={handelDell} style={{ marginLeft: "60px" }}>
        -
      </button>
    </div>
  );
};
export default ToDoItime;
