import React, { Fragment } from "react";
import ProjectCard from "../components/ProjectCard";
import petAdoptionSc from "../assets/pet-adoption.png";
import drinkFindifierSc from "../assets/drinkrenderscreen.png";
import futureblogSc from "../assets/homepage.png";
import horiseonSc from "../assets/horiseon.png";
import studyBuddySc from "../assets/study-buddy.png";
import jateSc from "../assets/jate.png";
import { Link } from "react-router-dom";
import Media from "react-media";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function Projects() {
  const projects = [
    {
      title: "Study buddy",
      summary: "A study card creator that lets you create study cards with input and share your study cards with other users. Made using React, Node, Javascript and Heroku",
      link: "https://study-buddy-dream-team.herokuapp.com/",
      gitLink: "https://github.com/EliasAllan/study-buddy",
      img: (
        <Link to="https://study-buddy-dream-team.herokuapp.com/" href="true">
          <img
            className="project-screenshot"
            src={studyBuddySc}
            alt="study-buddy-screenshot"
            width="100%"
            border="20px"
          />
        </Link>
      ),
    },
    {
      title: "Pet Adoption",
      summary: "A website where you can view a database of pets available for adoption. You can choose pets from a list and add them to an adoption basket. Made using React, Node, Javascript, MySql and express",
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
      summary: "A website that finds instructions on how to make classic cocktails. You enter the name of an ingredient you have available and the app will find drinks that contain that ingredient. You can also see instructions on how to make those drinks. Made using Javascript and a cocktail API",
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
      summary: "A blog style website where you can login and post tech related articles. Other users can comment on articles. Made using Handlebars, Node, Javascript, Sequelize and Heroku",
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
      title: "J.A.T.E",
      summary: "A text editor that allows you to save your notes. You can install it in your computer and access your notes offline if internet is not available (PWA). Made using Node, Javascript, and Heroku.",
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
      summary: "Simple static marketing website. Optimized for user experience, screen readers and search engines. styled using CSS. ",
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
  ];
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <>
                <swiper-container slides-per-view="1" speed="500" loop="true" pagination="true" >
                  {projects.map((project, index) => (
                    <>
                      <swiper-slide  >
                        <ProjectCard key={index} props={project} />
                      </swiper-slide>
                    </>
                  ))}
                </swiper-container>
              </>
            )}
            {matches.medium && (
              <>
                <swiper-container slides-per-view="2" speed="500" loop="true" pagination="true">
                  {projects.map((project, index) => (
                    <>
                      <swiper-slide>
                        <ProjectCard key={index} props={project} />
                      </swiper-slide>
                    </>
                  ))}
                </swiper-container>
              </>
            )}
            {matches.large && (
              <div className="container">
                {projects.map((project, index) => (
                  <ProjectCard key={index} props={project} />
                ))}
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}

export default Projects;
