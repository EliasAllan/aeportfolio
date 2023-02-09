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
        Born and raised in Brazil, I moved to the United States at 17 years old 
        looking for better opportunities. I worked in the service industry for 9
        years and decided that it was not for me, so I decided to get into the
        tech industry, following my passion for computers.
      </h1>
    </div>
  );
}

export default About;
