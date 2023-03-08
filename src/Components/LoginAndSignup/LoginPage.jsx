import React from "react";
import LoginForm from "./LoginForm";
import "./styles.css";

function Login() {
  return (
    <div className="container">
      <div className="login-form-container">
        <LoginForm />
        <div className="login-image">
          <h1>Seva ~ Give a helping hand to those in need. Be a volunteer.</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
