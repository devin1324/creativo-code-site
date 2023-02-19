import React from 'react';
import Image from 'next/image';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const testimonialData = [
  {
    name: 'a',
    img: '/ph-projects.jpg',
    review:
      '"We were impressed by the quality of work that Creativo Code delivered for our website redesign. Their team was highly skilled, responsive, and collaborative, and they were able to create a website that was not only beautiful but also highly functional and optimized for search engines. The final product was exactly what we were looking for.”',
    starts: (
      <span className="flex flex-row gap-1">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </span>
    ),
  },
  {
    name: 'b',
    img: '',
    review:
      '"I recently worked with Creativo Code on a design project, and I was blown away by their work. They were able to take my vision and turn it into a stunning design that perfectly captured the essence of my brand. Their communication and responsiveness were also excellent, making the entire process smooth and stress-free."',
    starts: (
      <span className="flex flex-row gap-1">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </span>
    ),
  },
  {
    name: 'c',
    img: '',
    review:
      '"We were blown away by the creativity and professionalism of Creativo Code during our project. Their team was able to take a complex idea and turn it into a beautiful, user-friendly website that exceeded our expectations. They were highly communicative throughout the process, and we appreciated their ability to work within our budget and timeline."',
    starts: (
      <span className="flex flex-row gap-1">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </span>
    ),
  },
];
const Testimonials = () => {
  return (
    <div className="w-full h-auto p-5 lg:p-20 md:p-10 flex flex-col gap-10">
      <h3 className="text-black  text-center text-4xl">What people think..</h3>
      <div className="grid gap-14  grid-cols-1 grid-rows-3 pt-10 lg:gap-7 lg:grid-cols-3 lg:grid-rows-1 ">
        {testimonialData.map((review) => (
          <div
            key={review.name}
            className="flex flex-col p-5 rounded-2xl drop-shadow-lg justify-center items-center  md:items-start bg-stone-100"
          >
            {/* <div className="-translate-y-14 flex flex-col items-center md:items-start">
              <Image
                src={review.img}
                alt=""
                width="400"
                height="400"
                className="h-36 w-36 rounded-xl mb-3"
              />
              <h6 className="font-semiboldbold text-xl mb-2">{review.name}</h6>
              {review.starts}
            </div> */}
            <p className="pb-5 text-center md:text-left ">{review.review}</p>
            <h6 className=" text-stone-600 text-xl self-end">{review.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
