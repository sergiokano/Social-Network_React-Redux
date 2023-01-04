import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import "./Header.scss";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="container-header">
      <span>Logo</span>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      {user ? (
        <>
          <span onClick={() => dispatch(logout())}>Logout</span>
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Sign In</Link>
        </>
      )}
    </div>
  );
};

export default Header;
