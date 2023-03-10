import React from 'react';
import { IconContext } from 'react-icons';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const ChangingText = () => {
  return (
    <div className="h-32  w-full flex flex-col justify-center">
      <h3 className="text-center text-6xl font-semibold md:text-7xl">We are Creativo Code</h3>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-full pt-0 flex flex-col place-content-center stack-layer-grid-parent  md:min-h-[850px] "
    >
      {/* bg image */}
      <div className="stack-layer-grid-child bg-[url('/bg-landing-p.png')] bg-no-repeat  w-full h-full bg-[left_bottom] md:bg-[center_bottom_4.2rem] opacity-95 -z-20"></div>

      {/* hero content */}
      <div className="stack-layer-grid-child h-[76%] w-full flex flex-col justify-center items-center text-white gap-16  md:gap-20 ">
        <ChangingText />

        <div className="w-full flex flex-row gap-10  items-center text-center justify-center pt-10 text-lg font-semibold md:text-2xl md:pt-0">
          <h3>We Design</h3>
          <h3>We Develop</h3>
          <h3>We Solve</h3>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="text-center">Find us on</h4>
          <IconContext.Provider value={{ color: 'white', size: '1.5rem' }}>
            <div className="flex flex-row gap-5">
              <a href="https://www.instagram.com/creativo_code/">
                <BsInstagram />
              </a>
              <a href="https://twitter.com/CreativoCode">
                <BsTwitter />
              </a>
              <a href="">
               
                <BsLinkedin />
              </a>
              <a href="mailto:creativocode@outlook.com">
                <MdAlternateEmail />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
