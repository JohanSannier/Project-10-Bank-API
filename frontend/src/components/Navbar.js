import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import argentBankLogo from "../img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import ConnectedUser from "./ConnectedUser";
import { logout } from "../features/loginSlice";
import { clearUser } from "../features/userSlice";

function Navbar(props) {
  const dispatch = useDispatch();
  const { isConnected } = useSelector((state) => state.login);
  const handleSignOut = () => {
    dispatch(logout());
    dispatch(clearUser());
  };
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
        {isConnected ? (
          <>
            <ConnectedUser />
            <Link to="/" className="main-nav-item">
              <FontAwesomeIcon icon={faSignOut} />
              <span className="sign-in-span" onClick={handleSignOut}>
                Sign Out
              </span>
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="sign-in-span">Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
