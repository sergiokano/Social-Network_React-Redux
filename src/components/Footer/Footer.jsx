import React from "react";
import "./Footer.scss"

const Footer = () => {
  const user = JSON.parse(localStorage.getItem("user"));
console.log(user)

return (
    <div className="footer">
      <p className="welcome-message">Welcome, <span className="name">{user.user.name}</span></p>
    </div>
  );
};

export default Footer;