import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = ({ project }) => {
  return (
    <div
      className=" rounded-3xl flex flex-col gap-2 w-full justify-self-center items-start justify-end bg-cover origin-center h-[70vh] text-white drop-shadow-lg md:w-[60vw] md:max-w-[400px] md:min-w-[400px] "
      style={{ backgroundImage: `url("${project.img}")` }}
    >
      <div className=" rounded-b-3xl  w-full p-10 flex flex-col gap-1 project-card-text-bg-gradient text-center md:text-left">
        <h5 className="text-2xl pb-5">{project.name}</h5>

        <p className="text-sm">{project.details}</p>

        <p className="text-stone-500 pt-1">{project.hashtTags}</p>

        {/* <a href="" className="pt-5">
          More detail project page ==
        </a> */}
      </div>
    </div>
  );
};

const Projects = () => {
  const projectDetails = [
    {
      name: 'Selena Nicole portfolio',
      img: '/projects/1.webp',
      hashtTags: '#ui #ux  #figma #glassmorphism #minimalistic',
      details:
        'Portfolio for a singer with a simple, clear layout, glassmorphism theme, and strong visual imagery. Including features such as streamable music and easy-to-find video content.',
    },
    {
      name: 'Deliverable factory',
      img: '/projects/2.webp',
      hashtTags: '#html #css #js #gsap #parallax',
      details:
        'Desktop-focused, parallax website with interactive scroll animations for a provided design.',
    },
    {
      name: 'AI image generator',
      img: '/projects/3.webp',
      hashtTags: '#reactjs #tailswindCss #mongoDB #mongoose #nodejs #expressjs',
      details: "MERN stack app connected to the open-AI's DALL-E API. Which generates images for a given prompt. The site includes a gallery connected to the Cloudinary platform.",
    },
    {
      name: 'Deliverabl',
      img: '/projects/4.webp',
      hashtTags: '#html #css #js #gsap',
      details: '',
    },
    {
      name: 'Deliverabl',
      img: '/projects/5.png',
      hashtTags: '#html #css #js #gsap',
      details: '',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      className="flex flex-col mt-32 bg-[url('/bg-deco.png')] gap-20 py-5 md:py-20 md:px-20 "
    >
      <h3 className="text-white  text-center text-4xl">Our recent projects</h3>
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
