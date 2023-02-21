import { useRef } from "react";

const AddTask = ({ socket }) => {
  const taskRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createTask", taskRef.current.value);
    taskRef.current.value = "";
  };
  return (
    <form className="form__input" onSubmit={handleSubmit}>
      <label htmlFor="task">Add Task</label>
      <input
        type="text"
        name="task"
        id="task"
        className="input"
        required
        ref={taskRef}
      />
      <button className="addTodoBtn">ADD</button>
    </form>
  );
};
export default AddTask;
