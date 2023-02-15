import React from "react";
import { Link } from "react-router-dom";

function Resume() {

  return (
    <>
    <div id="tech-skill">
    <h1 font-weight="bolder">Technical Skills</h1>
    
      <ul>
        CSS
      </ul>
      <ul>
        Javascript
      </ul>
      <ul>
        React
      </ul>
      <ul>
        Node
      </ul>
      <ul>
        MongoDB
      </ul>
      <ul>
       GraphQL
      </ul>
    
    </div>
    <div id="resume-link">
    <Link to="https://docs.google.com/document/d/1RKSWOc18Bm8h0nnGLRxivGJdHxHOTb7QcF83kEY5db0/edit?usp=sharing" href="true">Click here to see and/or download my resume</Link>
    </div> 
    </>
  );
}

export default Resume;
