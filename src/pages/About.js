import React from "react";
import profileSc from "../assets/Brazilpic.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <div class="container">
    <div id="about-description">
      <Link to="/" id="myname"><span></span>Hi! I'm Allan Elias</Link>
      
      <img className="selfie" src={profileSc} alt="allan" width="30%" />
    </div>
      <h4 id="about-text">
      Born in Brazil, I moved to the U.S. at 17 and spent 9 years in the service industry honing my soft skills. Pursuing my passion for tech, I completed the University of Pennsylvania's Full Stack Web Development Bootcamp. Now, I’m a developer ready to create impactful projects. Let’s connect!

      </h4>
      </div>
      </>
  );
}

export default About;
