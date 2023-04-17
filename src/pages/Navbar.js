import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ userLoggedIn, onLogout }) => {
  let btn = <Link to="/">Login</Link>;
  const userList = userLoggedIn.id ? (
    <li className="nav-item">
      <Link className="nav-link" to="/users">
        User List
      </Link>
    </li>
  ) : (
    ""
  );
  if (userLoggedIn.id) {
    btn = (
      <button
        className="btn btn-link text-dark text-decoration-none"
        onClick={() => {
          onLogout({});
          <Navigate to="/login" replace />;
        }}
      >
        Logout
      </button>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Login */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {/* Register */}
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            {userList}
          </ul>
          <div>{btn}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
