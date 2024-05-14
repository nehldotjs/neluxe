import React from "react";
import "../styles/login.css";

import model from "../assets/model.png";
import { Link } from "react-router-dom";
import SvgAnimation from "../components/SvgAnimation";

function LoginScreen() {
  return (
    <div className="loginOverall">
      <div className="svgAnimationWrapper">
        <SvgAnimation />
      </div>

      
      <div className="login-wrapper">
        <div className="backgroundImageWrapper">
          <img src={model} alt="" />
        </div>
        <div className="loginForm">
          <div className="loginFormContainer">
            <div className="loginFormInputWrapper">
              <h2 className="loginFormInputWrapperHeader">Login to continue</h2>
              <div className="login-InputWrapper">
                <input type="text" className="loginInput" />
                <input type="text" className="loginInput" />
              </div>
              <Link className="forgotPasswordWrapper">
                <p>Forget password</p>
              </Link>
              <div className="loginBtnWrapper">
                <Link className="loginBtnWrapperBtn">LOGIN</Link>
              </div>
              <div className="singUp-redirectWrapper">
                <p>don't have an account yet? </p>{" "}
                <Link to={"/signup"}>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
