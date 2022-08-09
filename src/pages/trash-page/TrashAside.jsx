import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth-context";
export default function TrashAside() {
  const { state, dispatch } = useAuth();

  function logoutHandler() {
    localStorage.removeItem("authToken");
    dispatch({ type: "SET_AUTH", payload: false });
  }

  return (
    <aside className="typora-aside">
      <div className="aside-content-wraper">
        <div className="typora-aside-content">
          <div className="aside-content-label">
            <div>
              <i className="fas fa-home"></i>
            </div>
            <Link className="link-style" to="/home">
              <div>Home</div>
            </Link>
          </div>

          <div className="aside-content-label">
            <div>
              <i className="fas fa-tag"></i>
            </div>
            <Link className="link-style" to="/label">
              <div>Labels</div>
            </Link>
          </div>

          <div className="aside-content-label">
            <div>
              <i className="fas fa-archive"></i>
            </div>
            <Link className="link-style" to="/archive">
              <div>Archive</div>
            </Link>
          </div>
          <div className="aside-content-label">
            <div>
              <i className="fas fa-trash"></i>
            </div>
            <div className="link-active">Trash</div>
          </div>

          {state.isAuthenticated ? (
            <div className="aside-content-label">
              <div className="typora-logout-btn" onClick={logoutHandler}>
                <i className="fas fa-power-off"></i>
                <div>Logout</div>
              </div>
            </div>
          ) : (
            <div className="aside-content-label">
              <div>
                <i className="far fa-user-circle"></i>
              </div>
              <Link className="link-style" to="/login">
                <div>Login</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
