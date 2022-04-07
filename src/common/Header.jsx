import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header class="typora-header">
      <Link className="link-style" to="/home">
        <div class="typora-logo">
          type<span> note</span>
        </div>
      </Link>
    </header>
  );
}
