import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">
        <img src="#" alt="logo" />
      </Link>

      <div>
        <Link to="/login">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
