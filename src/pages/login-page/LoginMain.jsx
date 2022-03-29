import React from "react";
import "./LoginPage.css";
export default function LoginMain() {
  return (
    <div className="login-main-container">
      <div className="typora-login-content">
        <div className="typora-login-window">
          <h2>Login</h2>

          <form action="inputs">
            <div className="login-input-wraper">
              <div className="t-input-text">
                <label>Email address</label>
                <input type="text" placeholder="xyz@email.com" />
              </div>

              <div className="t-input-text">
                <label>Password</label>
                <input type="password" placeholder="***************" />
              </div>
            </div>

            <div className="login-check">
              <div className="login-check-label">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  value="remember"
                />
                <label for="consent">Remember me</label>
              </div>
              <div>
                <a href="#">Forgot Your Password ?</a>
              </div>
            </div>
            <a href="#">
              <button className="btn btn-primary">Login</button>
            </a>
            <div className="login-bottom-text">
              <a href="#">
                Create New Account <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
