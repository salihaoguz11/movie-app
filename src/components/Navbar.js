import { useContext } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-light bg-primary d-flex flex-wrap items-center justify between">
      <Link className="navbar-brand ms-4" to="/">
        React Movie App
      </Link>
      <ul className="navbar d-flex me-4  align-items-center justify-between navbar-right">
        <li className="navbar-right me-4">
          {currentUser && (
            <h6 className="me-3 mt-2">{currentUser?.displayName}</h6>
          )}
        </li>

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
          <Link className="nav-link" to="/login" onClick={() => logOut()}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
