import React from "react";
import { NavLink } from "react-router-dom";

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
        <NavLink
        to="/"
      >
        About me
      </NavLink>

      <NavLink 
      className="navitem"
      to="/projects"
      >Portfolio
      </NavLink>

      <NavLink 
      className="navitem"
      to="/contact"
      >Contact me
      </NavLink>

      <NavLink 
      className="navitem"
      to="/resume"
      >Resume
      </NavLink>
      
      <NavLink 
      id="secret"
      className="navitem"
      to="/secret"
      >Secret
      </NavLink>

      <NavLink 
      id="secret"
      className="navitem"
      to="/pango"
      >Pango
      </NavLink>
  </>
    );
  }
}


// function BurgerMenu() {
  
//   return (
    
    
 
// <>
//        <NavLink
//         to="/"
//       >
//         About me
//       </NavLink>

//       <NavLink 
//       className="navitem"
//       to="/projects"
//       >Portfolio
//       </NavLink>

//       <NavLink 
//       className="navitem"
//       to="/contact"
//       >Contact me
//       </NavLink>

//       <NavLink 
//       className="navitem"
//       to="/resume"
//       >Resume
//       </NavLink>
//       </>
     
    
//   );
// }

export default BurgerMenu;