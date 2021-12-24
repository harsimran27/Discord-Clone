import React from "react";
import { auth, provider } from "../firebase";
import "../css/Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1.png"
          alt=""
        />
      </div>
      <button className="loginBtn" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
