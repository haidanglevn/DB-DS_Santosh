import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Palindrom from "./components/Palindrom";
import Home from "./components/Home";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/palindrom" element={<Palindrom />} />
          </Routes>
          <Outlet />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
