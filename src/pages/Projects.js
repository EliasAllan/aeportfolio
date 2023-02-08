import React from "react";
import ProjectCard from "../components/ProjectCard";
import petAdoptionSc from "../pet-adoption.png";
import drinkFindifierSc from "../drinkrenderscreen.png";
import futureblogSc from "../homepage.png";
import { Link } from "react-router-dom";
function Projects() {
  const projects = [
    {
      title: "Pet Adoption",
      link: "https://pet-adoption-store.herokuapp.com/",
      img: (
        <Link to="https://pet-adoption-store.herokuapp.com/">
          <img
            href
            className="project-screenshot"
            src={petAdoptionSc}
            alt="pet-adoption-screenshot"
            width="100%"
          
          />
        </Link>
      ),
    },
    {
      title: "Drink Findifier",
      link: "https://chocochip287.github.io/cocktail-recipes/",
      img: (
        <Link to="https://chocochip287.github.io/cocktail-recipes/">
          <img
            className="project-screenshot"
            src={drinkFindifierSc}
            alt="pet-adoption-screenshot"
            width="100%"
          />
        </Link>
      ),
    },
    {
      title: "The Future Blog",
      link: "https://the-future-blog.herokuapp.com/",
      img: (
        <Link to="https://the-future-blog.herokuapp.com/">
          <img
            className="project-screenshot"
            src={futureblogSc}
            alt="future-blog-screenshot"
            width="100%"
          />
        </Link>
      ),
    },

  ];
  return (
    <div className="container">
      {projects.map((project) => (
        <ProjectCard props={project} />
      ))}
    </div>
  );
}

export default Projects;
