import React, { useState } from "react";
import "./styles.css";
import Navbar from "../Navbar/Navbar";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import image from "../../images/5498791.jpg";
import theme from "../../theme";

function LoginAndSignUp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='loginPage'>
      <Navbar />
      <div className='formAndImageContainer'>
        {!isLoggedIn ? <LoginForm /> : <SignUpForm />}

        <div className='imageContainer'>
          <h2 style={{ color: theme.button }}>
            “Volunteering is at the very core of being a human. No one has made
            it through life without someone else’s help.” – Heather French Henry
          </h2>
          <img src={image} alt='' className='image' />
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignUp;
