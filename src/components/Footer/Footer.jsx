import React from "react";
import "./Footer.scss"

const Footer = () => {
  const user = JSON.parse(localStorage.getItem("user"));
console.log(user)

return (
    <div className="footer">
      <>
      {user ? (<p className="welcome-message">Welcome, <span className="name">{user.user.name}</span></p>) : (<p className="welcome-message">Your favourite social app</p>)}
      <span className="author">Designed by xX_theKano0_x44xX</span>
      </>
    </div>
  );
};

export default Footer;