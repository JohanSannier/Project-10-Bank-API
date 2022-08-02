import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function ConnectedUser(props) {
  const user = useSelector((state) => state.user.profile.firstName);
  return (
    <Link to="/profile" className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} />
      <span className="sign-in-span">{user}</span>
    </Link>
  );
}

export default ConnectedUser;
