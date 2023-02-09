import React from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
    <Link to="/" id="myname">Allan Elias</Link>
    <Navbar /> 
    </>
  );
}

export default Header;