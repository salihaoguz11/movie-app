import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);

    console.log(email, password);
  };

  return (
    <form
      className="justify-center container text-center"
      onSubmit={handleSubmit}
    >
      <h2 className="text-danger mt-4 text-center">Sign In</h2>

      <div className="form-group mt-4">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mt-4">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-danger mt-4">
        Login
      </button>
    </form>
  );
};

export default Login;
