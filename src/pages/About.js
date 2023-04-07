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
        looking for better opportunities. 
        I worked in the service industry for 9 years. I honed my soft skills , 
        multitasking abilities and customer service before I decided to follow my passion for tech, but the knowledge I acquired bartending
        helps in every aspect of my life.
        It took some soul searching, but I decided the best way to to follow my passion for technology was to become a
        web developer. I could satisfy my need for a challenge because of the complexity of it.
        At the same time I could be creative, and create good relationships with people .
        That was my favorite part of my past career.
        I joined the bootcamp program at the university of Pennsylvania not long after that, and after 6 months of learning, self-discovery, and lots of teamwork
        I was proudly certified as a Full Stack Web Developer. 
        I was humbled.
        That entire time, I never had a doubt in my mind, 
        that's where I was supposed to be.
        Contact me to create something special.
      </h1>
    </div>
  );
}

export default About;
