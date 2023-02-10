import React from "react";
import ProjectCard from "../components/ProjectCard";
import petAdoptionSc from "../assets/pet-adoption.png";
import drinkFindifierSc from "../assets/drinkrenderscreen.png";
import futureblogSc from "../assets/homepage.png";
import horiseonSc from "../assets/horiseon.png";
import studyGuideSc from "../assets/study-guide.png";
import jateSc from "../assets/jate.png";



import { Link } from "react-router-dom";
function Projects() {
  const projects = [
    {
      title: "Pet Adoption",
      link: "https://pet-adoption-store.herokuapp.com/",
      gitLink: "https://github.com/EliasAllan/pet-adoption-website",
      img: (
        <Link to="https://pet-adoption-store.herokuapp.com/" href="true">
          <img
            className="project-screenshot"
            src={petAdoptionSc}
            alt="pet-adoption-screenshot"
            width="100%"
            border="20px"
          />
        </Link>
      ),
    },
    {
      title: "Drink Findifier",
      link: "https://chocochip287.github.io/cocktail-recipes/",
      gitLink: "https://github.com/chocochip287/cocktail-recipes",
      img: (
        <Link to="https://chocochip287.github.io/cocktail-recipes/" href="true">
          <img
            className="project-screenshot"
            src={drinkFindifierSc}
            alt="pet-adoption-screenshot"
            width="100%"
            border="20px"
          />
        </Link>
      ),
    },
    {
      title: "The Future Blog",
      link: "https://the-future-blog.herokuapp.com/",
      gitLink: "https://github.com/EliasAllan/the-future-blog",

      img: (
        <Link to="https://the-future-blog.herokuapp.com/" href="true">
          <img
            className="project-screenshot"
            src={futureblogSc}
            alt="future-blog-screenshot"
            width="100%"
            border="20px"
          />
        </Link>
      ),
      
    },
    {
      title: "Just Another Text Editor",
      link: "https://extra-doodle.herokuapp.com/",
      gitLink: "https://github.com/EliasAllan/extra-doodle",
      img: (
        <Link to="https://extra-doodle.herokuapp.com/" href="true">
          <img
            className="project-screenshot"
            src={jateSc}
            alt="jate-screenshot"
            width="100%"
            border="20px"
          />
        </Link>
      ),
      
    },
    {
      title: "Horiseon Website",
      link: "https://eliasallan.github.io/code-refactor/",
      gitLink: "https://github.com/EliasAllan/code-refactor",
      img: (
        <Link to="https://eliasallan.github.io/code-refactor/" href="true">
          <img
            className="project-screenshot"
            src={horiseonSc}
            alt="first-website-screenshot"
            width="100%"
            border="20px"
          />
        </Link>
      ),
      
    },
    {
      title: "Study guide",
      link: "https://eliasallan.github.io/Study-guide/",
      gitLink: "https://github.com/EliasAllan/Study-guide",
      img: (
        <Link to="https://eliasallan.github.io/Study-guide/" href="true">
          <img
            className="project-screenshot"
            src={studyGuideSc}
            alt="study-guide-screenshot"
            width="100%"
            border="20px"
       
          />
        </Link>
      ),
      
    },

  ];
  return (
    <div className="container">
      {projects.map((project,index) => (
        <ProjectCard key={index} props={project} />
      ))}
    </div>
  );
}

export default Projects;
