import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  const activeClassName = {background: "aqua"}
  return (
    <nav id="navbar">
      
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        About me
      </NavLink>

      <NavLink 
      class="navitem"
      to="/projects"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Portfolio
      </NavLink>

      <NavLink 
      class="navitem"
      to="/contact"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Contact me
      </NavLink>

      <NavLink 
      class="navitem"
      to="/resume"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Resume
      </NavLink>

    </nav>
  );
}

export default Navbar;
