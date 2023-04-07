import React from "react";
import { Link } from "react-router-dom";

// import petAdoptionSc from '../pet-adoption.png'

function ProjectCard(props) {
    console.log(props)
  return (
  <div className="proj-card w-100 p-3">
  <h1 className="proj-title">{props.props.title}</h1>
  <h4 className="proj-summary">{props.props.summary}</h4>
  <Link to={props.props.gitLink} >Click here to go to {props.props.title}'s GitHub repository</Link>
  <>{props.props.img}</>
  </div>
  )
}

export default ProjectCard;
