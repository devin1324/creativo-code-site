import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <div className="w-full h-auto bg-stone-800  grid grid-cols-1  gap-y-10  py-20 lg:mt-40 md:gap-20 lg:py-5 lg:grid-cols-3 md:px-20 place-items-center lg:gap-0">
      <div className=" stack-layer-grid-parent col-span-2  p-10 h-auto w-full lg:-translate-y-60 md:h-[83vmin] md:w-[83vmin] overflow-hidden">
        <motion.div
          className="stack-layer-grid-child "
          animate={{ y: 6 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2.5 }}
        >
          <Image
            src="/technologies/1-circle.png"
            alt=""
            width="800"
            height="800"
            className="w-full h-full rounded-xl mt-5 self-center  drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          className="stack-layer-grid-child "
          animate={{ y: 6 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.5 }}
        >
          <Image
            src="/technologies/2-circle.png"
            alt=""
            width="800"
            height="800"
            className="w-full h-full rounded-xl mt-5 self-center stack-layer-grid-child drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          className="stack-layer-grid-child "
          animate={{ y: 6 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2 }}
        >
          <Image
            src="/technologies/3-circle.png"
            alt=""
            width="800"
            height="800"
            className="w-full h-full rounded-xl mt-5 self-center stack-layer-grid-child drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <div className=" text-white flex flex-col gap-6   justify-center items-center ">
        <h3 className="text-2xl text-center">Technologies that we use</h3>
        <p className="text-center px-7">
          Our company uses cutting-edge frontend and backend technologies to
          create modern, dynamic, and scalable applications for our clients. Our
          team of experienced developers leverages a wide range of tools and
          languages, such as React, Angular, Node.js, Ruby on Rails, and Python,
          to ensure that our clients receive high-quality solutions that meet
          and exceed their expectations. By staying up-to-date with the latest
          advancements in web development, we ensure that we deliver efficient
          and effective solutions that keep our clients ahead of the
          competition.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
