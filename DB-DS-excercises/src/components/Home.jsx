import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <h1>Hello there, this is my hub for all the DS - DB excercises.</h1>
      <h2>Please choose one of the projects below to learn more!</h2>
      <div className="content">
        <div className="page-nav">
          <Link to="/palindrom" className="page-nav-page palindrom-page">
            <div className="page-nav-title">
              <h1>Palindrom</h1>
            </div>
          </Link>
        </div>
        <div className="page-nav">
          <Link to="/bubble" className="page-nav-page palindrom-page">
            <div className="page-nav-title">
              <h1>Bubble Sort</h1>
            </div>
          </Link>
        </div>
        <div className="page-nav">
          <Link to="/stack" className="page-nav-page palindrom-page">
            <div className="page-nav-title">
              <h1>Stack Data Structure</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
