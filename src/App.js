import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import PostDetail from "./components/Home/Posts/PostDetail/PostDetail";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Music from "./components/Music/Music";
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:_id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
