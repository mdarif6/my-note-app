import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth-context";
export default function Header() {
  const { state, dispatch } = useAuth();

  return (
    <header className="typora-header">
      {state.isAuthenticated ? (
        <Link className="link-style" to="/home">
          <div className="typora-logo">
            type<span> note</span>
          </div>
        </Link>
      ) : (
        <Link className="link-style" to="/">
          <div className="typora-logo">
            type<span> note</span>
          </div>
        </Link>
      )}
    </header>
  );
}
