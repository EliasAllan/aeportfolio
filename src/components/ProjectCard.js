import React from "react";
// import petAdoptionSc from '../pet-adoption.png'

function ProjectCard(props) {
    console.log(props)
  return (
  
  <h1>{props.props.title}</h1>,
  <>{props.props.img}</>
  )
}

export default ProjectCard;
