import React from "react";
import ProjectCard from "../components/ProjectCard";
import petAdoptionSc from '../pet-adoption.png'
function Projects() {
  const projects = [
    {
      title: "Proj 1",
      link: "www.google.com",
      img: (
        <img
          className="project-screenshot"
          src={petAdoptionSc}
          alt="pet-adoption-screenshot"
        />
      ),
    },
    { title: "Proj 2", link: "www.google.com" },
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
