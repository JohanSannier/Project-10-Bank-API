import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function ConnectedUser(props) {
  return (
    <Link to="/profile" className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} />
      <span className="sign-in-span">Tony</span>
    </Link>
  );
}

export default ConnectedUser;
