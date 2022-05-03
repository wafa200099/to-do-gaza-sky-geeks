const ToDoFooter = (props) => {
  const handleclear = () => {
    props.onToDodellAll();
  };
  return (
    <div>
      <span>you have pinding {props.length} task</span>
      <button onClick={handleclear}>Clear</button>
    </div>
  );
};

export default ToDoFooter;
