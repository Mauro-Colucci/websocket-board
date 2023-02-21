import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userid", usernameRef.current.value);
    usernameRef.current.value = "";
    navigate("/task");
  };

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="usernmae">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          ref={usernameRef}
        />
        <button>SIGN IN</button>
      </form>
    </div>
  );
};
export default Login;
