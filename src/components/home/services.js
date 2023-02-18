import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Service = ({ service, i }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <motion.div
      layout
      className="bg-[url('/ph-projects.jpg')]  flex items-center text-left p-5 rounded-3xl origin-bottom service-parent"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      data-isMouseOver={isMouseOver}
    >
      <motion.div layout>
        <h4 className="text-white text-[200%]">{service.name}</h4>
        <p
          data-isMouseOver={isMouseOver}
          className="text-white service-content"
        >
          zdfjkzsndklzsmdkzsd zsnd zkdzkdmd zj
        </p>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const servicesData = [
    { name: 'Graphic design' },
    { name: 'Front end' },
    { name: 'Back end' },
    { name: 'UI/UX' },
    { name: '3D Modeling' },
    { name: 'Graphic design' },
    { name: 'Front end' },
    { name: 'Front end' },
  ];

  return (
    <div id="services" className='md-[20vh] md:mb-[25vh]'>
      <h2 className="text-3xl text-center py-20">Our Services</h2>

      <motion.div className=" grid grid-flow-col-dense grid-rows-4 grid-cols-2  px-10 w-full h-[70vh] md:h-[40vh] md:grid-rows-2 md:grid-cols-4 gap-1">
        {servicesData.map((service, i) => (
          <Service service={service} i={i} key={service.name} />
        ))}
      </motion.div>

      <div></div>
    </div>
  );
};

export default Services;
