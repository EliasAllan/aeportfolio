import React from "react";
import profileSc from "../assets/Brazilpic.jpg";

function About() {
  
  return (
    <div id="about-description">
      <img
        className="selfie"
        src={profileSc}
        alt="allan"
        width="30%"
      />

      <h1 id="about-text">
        Born and raised in Brazil, I moved to the United States at 17 years of age 
        looking for better opportunities. I worked in the service industry for 9
        years and decided I wanted to expand my skillset , so I decided to become a 
        web developer, following my passion for technology. Contact me to create something special.
      </h1>
    </div>
  );
}

export default About;
