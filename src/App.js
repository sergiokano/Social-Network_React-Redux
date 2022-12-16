import React from "react";
import Register from "./components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
