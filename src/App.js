import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Register from "./components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import LoginSpotify from "./components/Login/LoginSpotify";
// import Header from "./components/Header/Header";
// import Profile from "./components/Profile/Profile";
// import PostDetail from "./components/Home/Posts/PostDetail/PostDetail";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
// import Search from "./components/Search/Search";
import Dashboard from "./components/Dashboard/Dashboard";
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="App">
      {code ? <Dashboard code={code} /> : <LoginSpotify />}
{/* <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:_id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search/>} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
