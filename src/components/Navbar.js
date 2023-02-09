import React from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  const activeClassName = {background: "black"}
  return (
    <nav id="navbar">
      <Link to="/">Allan Elias</Link>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        About me
      </NavLink>
      <Link to="/projects">Portfolio</Link>
      <Link to="/contact">Contact me</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}

export default Navbar;
