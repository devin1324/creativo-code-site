import React from 'react';

const Service = ({ service }) => {
  return (
    <div className="bg-[url('/ph-projects.jpg')] w-60 h-72 flex items-end text-left p-5 rounded-3xl">
      <h4 className="text-white text-[200%]">{service.name}</h4>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    { name: 'Graphic design' },
    { name: 'Front end' },
    { name: 'Back end' },
    { name: 'UI/UX' },
    { name: '3D Modeling' },
  ];

  return (
    <div id="services">
      <h2 className="text-3xl text-center py-20">Our Services</h2>

      <div className="flex flex-row gap-10 flex-wrap justify-center px-10">
        {servicesData.map((service, i) => (
          <Service service={service} key={service.name} />
        ))}
      </div>




      <div>
        
      </div>
    </div>
  );
};

export default Services;
