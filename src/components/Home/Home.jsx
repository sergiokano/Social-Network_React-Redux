import React from "react";
import Posts from "./Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import video1 from "../../assets/videos/pexels-diva-plavalaguna-5664481.mp4";
import video2 from "../../assets/videos/pexels-cottonbro-9710742.mp4";
import video3 from "../../assets/videos/pexels-anthony-shkraba-8047357.mp4";
import video4 from "../../assets/videos/pexels-kampus-production-6296947.mp4";
import video5 from "../../assets/videos/pexels-kampus-production-8955627.mp4";
import video6 from "../../assets/videos/pexels-diva-plavalaguna-5664481.mp4";
import video7 from "../../assets/videos/pexels-ron-lach-9654075.mp4";
import video8 from "../../assets/videos/pexels-ron-lach-9654078.mp4";
import video9 from "../../assets/videos/pexels-tima-miroshnichenko-5703815.mp4";
import logo from "../../assets/images/Logo_spotify_social.png";

import "./Home.scss";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const videoArray = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
  ];
  const randomIndex = Math.floor(Math.random() * videoArray.length);
  const randomVideo = videoArray[randomIndex];

  return (
    <>
      {user ? (
        <Posts />
      ) : (
        <div class="wrapper">
          <video src={randomVideo} autoPlay loop muted />
          <div class="content">
            <h2>Share your favourite music with your friends and the world.</h2>
            <div class="buttons">
              <span class="login">
                <a class="login" href="/login"></a>
              </span>
              <span class="register">
                <a class="register" href="/register"></a>
              </span>
              <span className="logo">
                <img src={logo} alt="" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
