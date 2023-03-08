import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleCLick = () => {
    console.warn("Signup Clicked");
  };
  return (
    <div className='login-form'>
      <div>
        <h1>Welcome</h1>
      </div>
      <div className='input-feilds'>
        <div className='email input-feild'>
          <label htmlFor='email'>EMAIL *</label>
          <br />
          <input
            type='text'
            required={true}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='input-feild'>
          <label htmlFor='password'>PASSWORD *</label>
          <br />
          <input
            type='text'
            required={true}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className='input-feild'>
          <label htmlFor='password'>CONFIRM PASSWORD *</label>
          <br />
          <input
            type='password'
            required={true}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className='button-container'>
        <button onClick={handleCLick}>SIGNUP</button>
        <p>
          <p className='to-be-dissappeared'>Already have an account? </p>
          <Link to={"/login"}>Sign-in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
