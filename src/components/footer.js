import React from 'react';
import { IconContext } from 'react-icons';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';


const Footer = () => {
  return (
    <footer className="w-full flex flex-col-reverse justify-around items-center  py-5 px-10 bg-slate-100 shadow-lg gap-y-4 md:gap-y-0 md:flex-row md:justify-between md:px-32">
      <p className='text-gray-600'> © Copyright 2023 Creativo Code.</p>

     
        <IconContext.Provider value={{ color: 'grey', size: '1.4rem' }}>
          <div className="flex flex-row justify-center items-center gap-5">
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

    </footer>
  );
};

export default Footer;
