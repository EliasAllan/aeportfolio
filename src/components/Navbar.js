import React from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  const activeClassName = {background: "aqua"}
  return (
    <nav id="navbar">
      <Link to="/">Allan Elias</Link>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        About me
      </NavLink>

      <NavLink 
      to="/projects"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Portfolio
      </NavLink>

      <NavLink 
      to="/contact"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Contact me
      </NavLink>

      <NavLink 
      to="/resume"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Resume
      </NavLink>

    </nav>
  );
}

export default Navbar;
