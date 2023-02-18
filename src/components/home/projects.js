import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = ({ project }) => {
  return (
    <div className="bg-red-200 p-10 rounded-tl-3xl rounded-br-3xl flex flex-col gap-2 md:max-w-[400px] md:min-w-[400px] justify-self-center">
      <h5 className="text-2xl">Topic</h5>

      <p>
        Project description Project description Project description Project
        description Project description Project description
      </p>

      <p className="text-gray-500">#Tec #used #and #hash #tags</p>

      <a href="" className="pt-5">
        More detail project page ==
      </a>
      <Image
        src="/ph-projects.jpg"
        alt=""
        width="300"
        height="300"
        className="h-72 w-60 rounded-xl mt-5 self-center md:h-80 md:w-72"
      />
    </div>
  );
};

const Projects = () => {
  const projectDetails = [
    { name: 'Deliverables' },
    { name: 'Deliverable' },
    { name: 'Deliverabl' },
    { name: 'Deliverabl' },
    { name: 'Deliverabl' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div id="projects" className=" mt-32 bg-blue-200 md:px-20">
      <Slider {...settings}>
        {projectDetails.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
