import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="typora-header">
      <Link className="link-style" to="/">
        <div className="typora-logo">
          type<span> note</span>
        </div>
      </Link>
    </header>
  );
}
