import React from "react";
import "./SignupPage.css";
export default function SignupMain() {
  return (
    <div className="login-main-container">
      <div className="typora-login-content">
        <div className="typora-login-window">
          <h2>Signup</h2>

          <form action="inputs">
            <div className="login-input-wraper">
              <div className="t-input-text">
                <label>Name</label>
                <input type="text" placeholder="Type your name" />
              </div>

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
                <label for="consent">I accept all terms and conditions</label>
              </div>
            </div>
            <a href="#">
              <button className="btn btn-primary">Create New Account</button>
            </a>
            <div className="login-bottom-text">
              <a href="#">
                Already have an account <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
