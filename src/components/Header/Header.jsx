import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import "./Header.scss";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);

    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
  };

  const dispatch = useDispatch();
  return (
    <div className="container-header">
      <span>Logo</span>

      <input onKeyUp={handleChange} placeholder="search post" name="text" />

      <nav>
        <Link to="/">Home</Link>
      </nav>

      {user ? (
        <>
          <Link to="/music">Music</Link>
          <Link to="/profile">Profile</Link>
          <span onClick={() => dispatch(logout())}>Logout</span>
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
