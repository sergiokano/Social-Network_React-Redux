import React from "react";
import Posts from "./Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import video1 from "../../assets/videos/pexels-diva-plavalaguna-5664481.mp4"

import "./Home.scss";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <h1>Home</h1>
      {user ? (
        <Posts />
      ) : (
        <div class="wrapper">
          <video
            src={video1}
            autoPlay
            loop
            muted
          />
          <div class="content">
            <h2>Share your favourite music with your friends and the world.</h2>
            <div class="buttons">
            <span class="login"><a class="login" href="#"></a></span>
            <span class="register"><a class="register" href="#"></a></span>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
