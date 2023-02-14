import React from 'react';
import Image from 'next/image';

const TeamMember = ({ teamMember }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  p-10">
      <span className="border border-black border-dashed p-2 rounded-full flex ">
        <Image
          src="/ph-projects.jpg"
          alt=""
          width="200"
          height="200"
          className="h-36 w-36 rounded-full "
        />
      </span>
      <span className="flex flex-col text-center items-center gap-0">
        <h6 className="text-2xl">{teamMember.name}</h6>
        <p className="text-gray-700 text-sm">{teamMember.position}</p>
        <p className="pt-4 text-md flex max-w-xs">{teamMember.quote}</p>
      </span>
    </div>
  );
};

const teamMemberData = [
  {
    name: 'Devin',
    position: 'Founder & CEO',
    quote: 'Hi, I love playing around with new tecnologies',
  },
  { name: 'Suneth', position: 'Co-founder', quote: "Hey, I'm a day dreamer" },
  {
    name: 'Danindu',
    position: 'Co-founder & bla bla',
    quote: 'I love meeting new people',
  },
  { name: 'Tharindu', position: 'bla bla', quote: 'I love meeting new people' },
  { name: 'Suneth', position: 'Co-founder', quote: "Hey, I'm a day dreamer" },
  {
    name: 'Danindu',
    position: 'Co-founder & bla bla',
    quote: 'I love meeting new people',
  },
  { name: 'Tharindu', position: 'bla bla', quote: 'I love meeting new people' },
];

const AboutUs = () => {
  return (
    <div className="w-full h-auto mt-20 flex flex-col gap-10 px-10 md:px-32">
      <h3 className="text-center text-3xl">About Us</h3>

      <p className="text-center">
        We are a team of highly dedicated and talented members working together
        to bring your brand to the next level. Our team includes graphic
        designers, full-stack developers, web designers, and content writers who
        are capable of working with the latest cutting-edge technologies. Join
        with us and take the next big stride of your business!
      </p>

      <h4 className="text-left text-3xl">Meet our team</h4>

      <div className="flex flex-row flex-wrap items-baseline justify-center gap-20">
        {teamMemberData.map((teamMember) => (
          <TeamMember key={teamMember.name} teamMember={teamMember} />
        ))}
      </div>

      <h4 className="text-center text-2xl underline">
        Why you should Work with Us ?
      </h4>

      <div className="flex flex-row  text-5xl flex-wrap gap-5 items-center  justify-center w-full h-96 border-4 border-green-900 text-center">
        <p>We are creative</p>
        <p>We are talented</p>
        <p>we are expirienced</p>
      </div>
    </div>
  );
};

export default AboutUs;
