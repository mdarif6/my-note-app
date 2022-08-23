import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useAuth } from "../../auth-context";
export default function LoginMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", { email, password });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        dispatch({ type: "SET_AUTH", payload: true });
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loginAsGuest(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        dispatch({ type: "SET_AUTH", payload: true });
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-main-container">
      <div className="typora-login-content">
        <div className="typora-login-window">
          <h2>Login</h2>

          <form action="inputs" onSubmit={submitHandler}>
            <div className="login-input-wraper">
              <div className="t-input-text">
                <label>Email address</label>
                <input
                  type="text"
                  placeholder="xyz@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="t-input-text">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="***************"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <a href="#">
              <button
                className={
                  email.length > 0 && password.length > 0
                    ? "btn btn-primary "
                    : "btn btn-primary disabled-btn"
                }
                disabled={
                  email.length > 0 && password.length > 0 ? false : true
                }
              >
                Login
              </button>
            </a>
            <a href="#">
              <button className="btn outline-primary" onClick={loginAsGuest}>
                Login as Guest
              </button>
            </a>
            <div className="login-bottom-text">
              <Link to="/signup">
                Create New Account <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
