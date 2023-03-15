import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-primary d-flex flex-wrap items-center justify between">
      <Link className="navbar-brand ms-4" to="/">
        React Movie App
      </Link>
      <ul className="navbar d-flex me-4  align-items-center justify-between navbar-right">
        <li className="navbar-right me-4">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="navbar-right me-4">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="navbar-right">
          <span className="nav-link" to="/register" onClick={() => logOut()}>
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
