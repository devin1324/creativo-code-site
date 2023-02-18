import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = ({ project }) => {
  return (
    <div
      className=" rounded-3xl flex flex-col gap-2 w-full justify-self-center items-start justify-end bg-cover h-[70vh] text-white md:w-[60vw] md:max-w-[400px] md:min-w-[400px] "
      style={{ backgroundImage: `url("${project.img}")` }}
    >
      <div className=" w-full p-10 flex flex-col gap-1 project-card-text-bg-gradient">
        <h5 className="text-2xl">{project.name}</h5>

        <p>
          Project description Project description Project description Project
          description Project description Project description
        </p>

        <p className="text-gray-500">#Tec #used #and #hash #tags</p>

        <a href="" className="pt-5">
          More detail project page ==
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectDetails = [
    { name: 'Deliverables', img: '/projects/1.png' },
    { name: 'Deliverable', img: '/projects/2.png' },
    { name: 'Deliverabl', img: '/projects/3.png' },
    { name: 'Deliverabl', img: '/projects/1.png' },
    { name: 'Deliverabl', img: '/projects/1.png' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    centerMode: true,

    centerPadding: '5vw',
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: `15vw`,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div
      id="projects"
      className="flex flex-col mt-32 bg-[url('/bg-deco.png')] gap-20 md:py-20 md:px-20 "
    >
      <h3 className="text-white  text-center text-4xl">
        SOME OF THE RECENT THAT WE HAVE DONE
      </h3>
      <div className="md:block hidden">
        <Slider {...settings}>
          {projectDetails.map((project) => (
            <Project project={project} key={project.name} />
          ))}
        </Slider>
      </div>

      <div className="md:hidden flex flex-col w-full px-5 gap-10">
        {projectDetails.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
