import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { PopupButton } from 'react-calendly';
import { RxCross2 } from 'react-icons/rx';
import { RiMenu4Line } from 'react-icons/ri';

const Navbar = () => {
  const [navbarVisible, SetNavbarVisible] = useState(false);
  const [element, setElement] = useState();

  useEffect(() => {
    const ele = document.getElementById('schedule');
    setElement(ele);
    console.log(ele);
  }, []);

  return (
    <>
      {/* mobile navbar */}
      <div className="w-full h-auto  fixed top-0  z-20  md:hidden flex flex-row justify-between  px-5 bg-clip-padding bg-stone-200 backdrop-filter backdrop-blur-md bg-opacity-80 navbar-shadow">
      <Image
          src="/logo.png"
          alt="Creativo Code"
          className="w-24 h-14 self- justify-items-end mx-5"
          width="200"
          height="200"
        />
        <div
          className="flex flex-col  gap-1 justify-center  inset-y-0  "
          onClick={() => {
            SetNavbarVisible(!navbarVisible);
          }}
        >
          <IconContext.Provider value={{ color: 'black', size: '1.8rem' }}>
            {!navbarVisible ? <RiMenu4Line /> : <RxCross2 />}
          </IconContext.Provider>
        </div>

      
      </div>

      <nav
        className=" h-screen w-full flex-col md:hidden fixed top-0  bg-stone-200 backdrop-filter backdrop-blur-md bg-opacity-80 navbar-shadow z-10"
        style={{ display: navbarVisible ? 'flex' : 'none' }}
      >
        <ul className="flex flex-col gap-10 items-center justify-center h-full w-full text-xl">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#aboutUs">About Us</Link>
          </li>
          <li>
            <button className="p-1 bg-stone-600  text-white text-xl rounded-md drop-shadow-lg">
              <PopupButton
                url="https://calendly.com/thecreativocode/schedule-a-meeting"
                rootElement={element}
                text="Schedule a meeting"
              />
            </button>
          </li>
          {/* <li>
            <Link href="/">Join with Us</Link>
          </li>
          <li>
            <Link href="/">Store</Link>
          </li> */}
        </ul>

        <IconContext.Provider value={{ color: 'grey', size: '1.5rem' }}>
            <div className="flex flex-row gap-5  justify-center py-6">
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
      </nav>

      {/* Desktop navbar */}

      <nav className="hidden md:flex flex-row justify-around items-center px-8 fixed top-0 w-full h-20 bg-clip-padding  text-black navbar-shadow bg-slate-100 z-[9999] backdrop-filter backdrop-blur-md bg-opacity-80 navbar-shadow">
        <Image
          src="/logo.png"
          alt="Creativo Code"
          className="w-40 h-24 self-center justify-items-end"
          width="200"
          height="200"
        />
        <ul className="flex flex-row gap-6 items-baseline">
          <li className="py-2 px-1  ">
            <Link href="#home">Home</Link>
          </li>
          <li className="py-2 px-1 ">
            <Link href="#services">Services</Link>
          </li>
          <li className="py-2 px-1  ">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="py-2 px-1 ">
            <Link href="#aboutUs">About Us</Link>
          </li>

          <li>
            <button className="px-2 py-2 bg-stone-800  text-white text-sm rounded-sm drop-shadow-lg">
              <PopupButton
                url="https://calendly.com/thecreativocode/schedule-a-meeting"
                rootElement={element}
                text="Schedule a meeting"
              />
            </button>
          </li>
          {/* <li className="py-2  px-1 ">
            <Link href="/">Join with Us</Link>
          </li>
          <li className="py-2 px-1  ">
            <Link href="/">Store</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
