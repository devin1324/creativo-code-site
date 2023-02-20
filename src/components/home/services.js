import React from 'react';
import { motion } from 'framer-motion';

const Service = ({ service, i }) => {
 
  return (
    <div
      
      className="bg-cover bg-no-repeat  flex items-center text-left  rounded-3xl origin-bottom service-parent overflow-hidden"
      style={{ backgroundImage: `url(${service.img})` }}
      
      
    >
      <div className='bg-stone-800 w-full h-full p-2 flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-30'>
        <h4 className="text-white text-md text-center md:text-left  md:text-2xl">{service.name}</h4>
        
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    { name: 'Website development', img: '/services/Webdevelopment.jpg' },
    { name: 'Website design', img: '/services/Websitedesign.jpg' },
    { name: 'E-commerce solutions', img: '/services/E-commercesolutions.jpg' },
    { name: 'Digital Design', img: '/services/DigitalDesign.jpg' },
    {
      name: 'Search Engine Optimization (SEO)',
      img: '/services/SearchEngineOptimization.webp',
    },
    {
      name: 'Website maintenance and support',
      img: '/services/Websitemaintenanceandsuppor.jpg',
    },
    {
      name: 'Branding and identity design',
      img: '/services/Brandingandidentitydesign.jpg',
    },
    { name: '3D modeling', img: '/services/Advertisingdesign.jpg' },
  ];

  return (
    <div id="services" className="md-[20vh] md:mb-[25vh] lg:px-16">
      <h2 className="text-4xl text-center py-20">Our Services</h2>

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
