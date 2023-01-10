import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import "./Header.scss";
import logo from "../../assets/images/Logo_spotify_social.png";

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
    <>
      {user ? (
        <div className="container-header">
          <span className="logo-header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </span>

          <input onKeyUp={handleChange} placeholder="search post" name="text" />

          <nav>
            <Link to="/">Home</Link>
          </nav>

          <>
            <Link to="/music">Music</Link>
            <Link to="/profile">Profile</Link>
            <span onClick={() => dispatch(logout())}>Logout</span>
          </>
        </div>
      ) : (
        <nocode></nocode>
      )}
    </>
  );
};

export default Header;
