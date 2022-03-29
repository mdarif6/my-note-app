import React from "react";
import "./SignupPage.css";
export default function SignupMain() {
  return (
    <div class="login-main-container">
      <div class="typora-login-content">
        <div class="typora-login-window">
          <h2>Signup</h2>

          <form action="inputs">
            <div className="login-input-wraper">
              <div class="t-input-text">
                <label>Name</label>
                <input type="text" placeholder="Type your name" />
              </div>

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
                <label for="consent">I accept all terms and conditions</label>
              </div>
            </div>
            <a href="#">
              <button class="btn btn-primary">Create New Account</button>
            </a>
            <div class="login-bottom-text">
              <a href="#">
                Already have an account <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
