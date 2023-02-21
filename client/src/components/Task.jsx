import Navbar from "./Navbar";
import AddTask from "./AddTask";
import TasksContainer from "./TasksContainer";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Task = () => {
  return (
    <>
      <Navbar />
      <AddTask socket={socket} />
      <TasksContainer socket={socket} />
    </>
  );
};
export default Task;
