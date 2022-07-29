import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/loginSlice";
import { postLogin, postProfile } from "../utils/apiCall";
import { getUser } from "../features/userSlice";

function Login(props) {
  let userMail = "";
  let userPassword = "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userMail.length && userPassword.length > 0) {
      // eslint-disable-next-line no-unused-vars
      const response = await postLogin(userMail, userPassword);
      const profile = await postProfile();
      dispatch(getUser(profile));
      navigate("/profile");
      dispatch(login());
    } else {
      alert("Veuillez saisir un nom d'utilisateur et un mot de passe correct.");
    }
  };
  return (
    <main className="main bg-dark main-content">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => {
                userMail = e.target.value;
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                userPassword = e.target.value;
              }}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
