import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
        <span>Logo</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Sign In</Link>
      </nav>
    </div>
  );
};

export default Header;
