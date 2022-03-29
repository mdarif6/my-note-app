import React from "react";
import "./LoginPage.css";
export default function LoginMain() {
  return (
    <div class="login-main-container">
      <div class="typora-login-content">
        <div class="typora-login-window">
          <h2>Login</h2>

          <form action="inputs">
            <div className="login-input-wraper">
              <div class="t-input-text">
                <label>Email address</label>
                <input type="text" placeholder="xyz@email.com" />
              </div>

              <div class="t-input-text">
                <label>Password</label>
                <input type="password" placeholder="***************" />
              </div>
            </div>

            <div class="login-check">
              <div class="login-check-label">
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
              <button class="btn btn-primary">Login</button>
            </a>
            <div class="login-bottom-text">
              <a href="#">
                Create New Account <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
