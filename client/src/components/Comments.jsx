import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Comments = () => {
  const commentRef = useRef();
  const { category, id } = useParams();
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    socket.on("comments", (data) => setCommentList(data));
  }, []);

  useEffect(() => {
    socket.emit("fetchComments", { category, id });
  }, [category, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("addComment", {
      comment: commentRef.current.value,
      category,
      id,
      userId: localStorage.getItem("userId"),
    });
    commentRef.current.value = "";
  };
  return (
    <div className="comments__container">
      <form className="comment__form" onSubmit={handleSubmit}>
        <label htmlFor="comment">Add a comment</label>
        <textarea
          placeholder="Write your comment..."
          rows={5}
          id="comment"
          name="comment"
          required
          ref={commentRef}
        ></textarea>
        <button className="commentBtn">ADD COMMENT</button>
      </form>

      <div className="comments__section">
        <h2>Existing Comments</h2>
        {commentList?.map((comment) => (
          <div key={comment.id}>
            <p>
              <span style={{ fontWeight: "bold" }}>{comment.text} </span>by{" "}
              {comment.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comments;
