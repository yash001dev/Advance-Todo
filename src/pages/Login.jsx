import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginicon from "../assets/images/login.svg";
import { useAuth } from "../hooks/useAuth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import SignIn from "./SignIn";
import Signup from "./Signup";

function Login() {
  let { user } = useAuth();
  const navigate = useNavigate();
  if (user) {
    window.location.assign("/dashboard");
  }

  const [currentForm, setCurrentForm] = useState("login");
  return (
    <div className="container">
      <div style={{ height: "100vh" }} className="row align-item-center">
        <div className="col-6 left-sec m-auto">
          <img width="477.11" height="320" src={loginicon} alt="login" />
        </div>
        <div className="col-6 right-sec m-auto round-grey-border p-5">
          <h1 className="mb-4">
            <span
              onClick={() => setCurrentForm("login")}
              className={`px-2 ${
                currentForm === "login"
                  ? "login-sec-header text-decoration-underline"
                  : "login-sec-header-grey"
              }`}
            >
              Login In
            </span>
            <span
              onClick={() => setCurrentForm("signup")}
              className={`px-2 ${
                currentForm === "signup"
                  ? "login-sec-header text-decoration-underline"
                  : "login-sec-header-grey"
              }`}
            >
              Sign up
            </span>
          </h1>
          <div style={{ marginRight: "8rem", marginLeft: "8rem" }}>
            <hr className="mb-4" />
            {currentForm === "login" ? <SignIn /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
