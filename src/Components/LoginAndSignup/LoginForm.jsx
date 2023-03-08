import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleCLick = (e) => {
    e.preventDefault();
    navigate("/home");
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
              console.log(email);
            }}
          />
        </div>
        <div className='password input-feild'>
          <label htmlFor='password'>PASSWORD *</label>
          <br />
          <input
            type='password'
            required={true}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className='button-container'>
        <button type='submit' onClick={handleCLick}>
          LOGIN
        </button>
        <p>
          <p className='to-be-dissappeared'>Don't have an account? </p>
          <Link to={"/signup"}>Sign-up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
