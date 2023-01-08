import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=1dbe8b334ec24389932a496a87fedcfe&response_type=code&redirect_uri=http://localhost:3000/music&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const LoginSpotify = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login with Spotify
      </a>
    </Container>
  );
};

export default LoginSpotify;
