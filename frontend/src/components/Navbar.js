import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import argentBankLogo from "../img/argentBankLogo.png";

function Navbar(props) {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          <span className="sign-in-span">Sign In</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
