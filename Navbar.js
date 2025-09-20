import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <h2 className="navbar-brand">Employee Dashboard</h2>
      <div className="ms-auto">
        <Link className="btn btn-outline-light mx-2" to="/">Home</Link>
        <Link className="btn btn-outline-light mx-2" to="/form">Employee Form</Link>
      </div>
    </nav>
  );
}

export default Navbar;
