import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import LoginSpotify from "../Login/LoginSpotify";
const code = new URLSearchParams(window.location.search).get("code");

const Music = () => {
  return <div>{code ? <Dashboard code={code} /> : <LoginSpotify />}</div>;
};

export default Music;
