import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpWithGoogle } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);

    console.log(email, password);
  };
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <form
      className="justify-center container text-center mt-5"
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

      <div class="d-grid gap-3 mt-5 ">
        <button className="btn btn-danger " type="submit">
          Login
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleGoogleProvider}
        >
          Continue With Google
        </button>
      </div>
    </form>
  );
};

export default Login;
