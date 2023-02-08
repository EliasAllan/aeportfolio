import React from "react";
// import petAdoptionSc from '../pet-adoption.png'

function ProjectCard(props) {
    console.log(props)
  return (
  <h1>{props.props.title}</h1>,
  <img>{props.props.img}</img>
  )
}

export default ProjectCard;
