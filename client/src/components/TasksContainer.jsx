import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TasksContainer = ({ socket }) => {
  return (
    <div className="container">
      <div className="pending__wrapper">
        <div className="pending__items">
          <p>New tasks</p>
          <p className="comment">
            <Link to="/comments"> 3 Comments</Link>
          </p>
        </div>
      </div>
      <div className="ongoing__wrapper">
        <div className="ongoing__items">
          <p>Ongoing tasks</p>
          <p className="comment">
            <Link to="/comments"> 3 Comments</Link>
          </p>
        </div>
      </div>
      <div className="completed__wrapper">
        <div className="completed__items">
          <p>Completed tasks</p>
          <p className="comment">
            <Link to="/comments"> 3 Comments</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default TasksContainer;
