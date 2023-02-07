import React from "react";
import ProjectCard from "../components/ProjectCard"

function Projects() {
    const projects = [
        {title: "Proj 1",
        link: "www.google.com"},
        {title: "Proj 2",
        link: "www.google.com"}
    ]
  return   <div className="container">
    {projects.map(project => <ProjectCard props ={project} />)}
  </div>;
}

export default Projects;
