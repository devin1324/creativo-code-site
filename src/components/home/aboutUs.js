import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div id='aboutUs' className="w-full h-auto  flex flex-col gap-10 px-10 py-20 md:pt-20 md:px-32">
      <div className="bg-[url('/bg-deco.png')] rounded-3xl md:p-20 p-10 flex flex-col gap-6 drop-shadow-xl">
        <h3 className="text-center text-4xl text-white">About Us</h3>

        <p className="text-center lg:px-20 text-xl text-white">
          We are a team of highly dedicated and talented members working
          together to bring your brand to the next level. Our team includes
          graphic designers, full-stack developers, web designers, and content
          writers who are capable of working with the latest cutting-edge
          technologies. Join with us and take the next big stride of your
          business!
        </p>
      </div>
      
    </div>
  );
};

export default AboutUs;
