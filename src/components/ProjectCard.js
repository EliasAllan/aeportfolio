import React from "react";


function ProjectCard(props) {
    console.log(props)
  return <h1>{props.props.title}</h1>;
}

export default ProjectCard;
