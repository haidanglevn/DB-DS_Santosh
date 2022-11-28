import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <Link to="/">
          Database & Data Structures excercises
        </Link>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/palindrom">Palindrom</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
