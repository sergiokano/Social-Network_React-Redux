import React from "react";
import "./Footer.scss"

const Footer = () => {
  const user = JSON.parse(localStorage.getItem("user"));
console.log(user)

return (
    <div className="footer">
      <>
      {user ? (<p className="welcome-message">Welcome, <span className="name">{user.user.name}</span></p>) : (<p className="welcome-message">Your favourite social app</p>)}
      </>
    </div>
  );
};

export default Footer;