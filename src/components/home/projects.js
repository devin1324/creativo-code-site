import React from 'react';
import Image from 'next/image';

const Project = ({ project }) => {
  return (
    <div className="bg-red-200 p-10 rounded-tl-3xl rounded-br-3xl flex flex-col gap-2 md:max-w-[400px] md:min-w-[400px] ">
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

  return (
    <div
      id="projects"
      className="flex flex-col  "
    >
      <h2 className='text-center text-3xl pb-10'>Projects</h2>
      <div className='flex flex-col items-center gap-20 bg-blue-20 px-8 md:flex-row  md:px-10 md:justify-center md:flex-wrap'>
        {projectDetails.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
