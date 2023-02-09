import React from "react";
// import petAdoptionSc from '../pet-adoption.png'

function ProjectCard(props) {
    console.log(props)
  return (
  <div class="proj-card">
  <h1 class="proj-title">{props.props.title}</h1>
  <>{props.props.img}</>
  </div>
  )
}

export default ProjectCard;
