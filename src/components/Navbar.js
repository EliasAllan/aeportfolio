import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  const activeClassName = {
    background: "aqua",
    borderRadius: "5px"
    
  }
  return (
    <nav id="navbar">
      
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        About me
      </NavLink>

      <NavLink 
      className="navitem"
      to="/projects"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Portfolio
      </NavLink>

      <NavLink 
      className="navitem"
      to="/contact"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Contact me
      </NavLink>

      <NavLink 
      className="navitem"
      to="/resume"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Resume
      </NavLink>
      
      <NavLink 
      className="navitem"
      to="/resume"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >Resume
      </NavLink>

    </nav>
  );
}

export default Navbar;
