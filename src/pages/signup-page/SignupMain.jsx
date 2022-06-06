import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignupPage.css";
import axios from "axios";
import { useAuth } from "../../auth-context";
export default function SignupMain() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useAuth();
  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", register);

      if (response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        navigate("/home");
        dispatch({ type: "SET_AUTH", payload: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-main-container">
      <div className="typora-login-content">
        <div className="typora-login-window">
          <h2>Signup</h2>

          <form action="inputs" onSubmit={formSubmitHandler}>
            <div className="login-input-wraper">
              <div className="t-input-text">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Type your name"
                  onChange={(e) =>
                    setRegister((prevState) => {
                      return { ...prevState, name: e.target.value };
                    })
                  }
                />
              </div>

              <div className="t-input-text">
                <label>Email address</label>
                <input
                  type="text"
                  placeholder="xyz@email.com"
                  onChange={(e) =>
                    setRegister((prevState) => {
                      return { ...prevState, email: e.target.value };
                    })
                  }
                />
              </div>

              <div className="t-input-text">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="***************"
                  onChange={(e) =>
                    setRegister((prevState) => {
                      return { ...prevState, password: e.target.value };
                    })
                  }
                />
              </div>
            </div>

            {/* <div className="login-check">
              <div className="login-check-label">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  value="remember"
                />
                <label for="consent">I accept all terms and conditions</label>
              </div>
            </div> */}
            <a href="#">
              <button className="btn btn-primary">Create New Account</button>
            </a>
            <div className="login-bottom-text">
              <Link to="/login">
                Already have an account <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
