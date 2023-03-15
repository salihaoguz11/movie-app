import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);

    console.log(firstName, lastName, email, password);
  };

  return (
    <form
      className="justify-center container text-center"
      onSubmit={handleSubmit}
    >
      <h2 className="text-danger mt-4 text-center">Register</h2>
      <div className="form-group mt-5">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
          // value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group mt-4">
        <label>Surname</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Surname"
          // value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
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
        Register
      </button>
    </form>
  );
}

export default Register;
