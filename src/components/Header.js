import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
// class Example extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
  
//   }

//   render () {
//     // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//     return (
//       <Menu>
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//         <a id="contact" className="menu-item" href="/contact">Contact</a>
//         <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
//       </Menu>
//     );
//   }
// }
function Header() {
  const activeClassName = {
    background: "aqua",
    borderRadius: "5px"
    
  }
  return (
    
    <>
 
       <Menu>
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

      </Menu>
      
      <Link to="/" id="myname"><span></span>Allan Elias</Link>
    {/* <Navbar />  */}
    </>
  );
}

export default Header;