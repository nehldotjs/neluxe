import React from "react";
import "../styles/login.css";

import model from "../assets/model.png"

function LoginScreen() {
  return (
    <div className="login-wrapper">
      <div className="backgroundImageWrapper">
        <img src={model} alt="" />
      </div>
      <div className="signUpForm">
        <div className="signUpFormContainer">
          <div className="signupFormInputWrapper">
            <h3>signUpFormContainer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
