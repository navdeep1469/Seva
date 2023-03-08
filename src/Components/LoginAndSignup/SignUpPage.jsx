import React from "react";
import SignUpForm from "./SignUpForm";
import "./styles.css";

function SignUp() {
  return (
    <div className="container">
      <div className="login-form-container">
        <SignUpForm />
        <div className="login-image">
          <h1>Seva ~ Give a helping hand to those in need.</h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
