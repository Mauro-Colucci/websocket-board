import { useRef } from "react";

const Comments = () => {
  const commentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div></div>
      </div>
    </div>
  );
};
export default Comments;
