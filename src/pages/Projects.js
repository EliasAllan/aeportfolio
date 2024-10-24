import React, { Fragment } from "react";
import ProjectCard from "../components/ProjectCard";
import petAdoptionSc from "../assets/pet-adoption.png";
import drinkFindifierSc from "../assets/drinkrenderscreen.png";
import futureblogSc from "../assets/homepage.png";
import horiseonSc from "../assets/horiseon.png";
import studyBuddySc from "../assets/study-buddy.png";
import { Link } from "react-router-dom";
import Media from "react-media";
import { Navigation, Pagination, EffectCreative, EffectCards, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import function to register Swiper custom elements
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// register();

// import Swiper JS
// import Swiper from 'swiper/bundle';
// // import Swiper styles
// import 'swiper/css';

// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],

// });

function Projects() {
  const projects = [
    // {
    //   title: "Study buddy",
    //   summary:
    //     "A study card creator. It takes inputs by the user and it saves it as study cards.It also allows you to share your study cards with other users. Made using React, Node, Javascript and Heroku",
    //   link: "https://study-buddy-dream-team.herokuapp.com/",
    //   gitLink: "https://github.com/EliasAllan/study-buddy",
    //   img: (
    //     <Link
    //       to="https://study-buddy-dream-team.herokuapp.com/"
    //       href="true"
    //       target="_blank"
    //     >
    //       <img
    //         className="project-screenshot"
    //         src={studyBuddySc}
    //         alt="study-buddy-screenshot"
    //         width="100%"
    //         border="20px"
    //       />
    //     </Link>
    //   ),
    // },
    // {
    //   title: "Pet Adoption",
    //   summary:
    //     "A website where you can view a database of pets available for adoption. You can choose pets from a list and add them to an adoption basket. Made using React, Node, Javascript, MySql and express",
    //   link: "https://pet-adoption-store.herokuapp.com/",
    //   gitLink: "https://github.com/EliasAllan/pet-adoption-website",
    //   img: (
    //     <Link
    //       to="https://pet-adoption-store.herokuapp.com/"
    //       href="true"
    //       target="_blank"
    //     >
    //       <img
    //         className="project-screenshot"
    //         src={petAdoptionSc}
    //         alt="pet-adoption-screenshot"
    //         width="100%"
    //         border="20px"
    //       />
    //     </Link>
    //   ),
    // },
    {
      title: "The Cocktail Findifier",
      summary:
        "This website helps you make classic cocktails easily. Just enter an ingredient you have and find recipes with instructions. Made using Javascript and a cocktail API, it's simple and easy to use.",
      link: "https://chocochip287.github.io/cocktail-recipes/",
      gitLink: "https://github.com/chocochip287/cocktail-recipes",
      img: (
        <Link
          to="https://chocochip287.github.io/cocktail-recipes/"
          href="true"
          target="_blank"
        >
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
      summary:
        "A blog style website where you can login and post tech related articles. Other users can comment on the articles posted. Made using Handlebars, Node, Javascript, Sequelize and Heroku",
      link: "https://the-future-blog.herokuapp.com/",
      gitLink: "https://github.com/EliasAllan/the-future-blog",

      img: (
        <Link
          to="https://the-future-blog-ba18722eaf07.herokuapp.com/"
          href="true"
          target="_blank"
        >
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
      summary: "A text editor that allows you to save your notes. You can install it in your computer and access your the app and your notes offline (PWA). Made using Node, Javascript, and Heroku.",
      link: "https://extra-doodle.herokuapp.com/",
      gitLink: "https://github.com/EliasAllan/extra-doodle",
      img: (
        <Link to="https://extra-doodle.herokuapp.com/" href="true" target="_blank">
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
      summary:
        "Simple static marketing website. Optimized for user experience, screen readers and search engines. Styled using CSS. ",
      link: "https://eliasallan.github.io/code-refactor/",
      gitLink: "https://github.com/EliasAllan/code-refactor",
      img: (
        <Link
          to="https://eliasallan.github.io/code-refactor/"
          href="true"
          target="_blank"
        >
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
    <>
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
                  {projects.map((project, index) => (
                    <>
                      <Swiper



                        disabledClass='swiper-button-disabled'
                      // slides-per-view="1"
                      // speed="500"
                      // loop="true"
                      // pagination="true"
                      >
                        <SwiperSlide>
                          <ProjectCard key={index} props={project} />
                        </SwiperSlide>
                      </Swiper>
                    </>
                  ))}
                </>
              )}
              {matches.medium && (
                <>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                  // slides-per-view="1"
                  // speed="500"
                  // loop="true"
                  // pagination="true"

                  >
                    {projects.map((project, index) => (
                      <>
                        <SwiperSlide>
                          <ProjectCard key={index} props={project} />
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </>
              )}
              {matches.large && (
                <>
                  <Swiper
                    //  spaceBetween={50}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}

                    modules={[Navigation, Pagination, EffectCoverflow]}
                    navigation
                    effect="coverflow"


                    pagination={{ clickable: true }}
                  // slides-per-view="1"
                  // speed="500"
                  // loop="true"
                  // pagination="true"
                    className="mySwiper"
                  >
                    {projects.map((project, index) => (
                      <>
                        <SwiperSlide>
                          <ProjectCard key={index} props={project} />
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>

    </>
  );
}

export default Projects;
