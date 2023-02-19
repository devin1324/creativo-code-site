import React from 'react';
import Image from 'next/image';

const TeamMember = ({ teamMember }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  p-10 drop-shadow-lg">
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
    quote: '"Hi, I love playing around with new tecnologies"',
  },
  {
    name: 'Suneth',
    position: 'Co-founder & Graphics Expert',
    quote: '"Hey, I\'m a day dreamer"',
  },
  {
    name: 'Danindu',
    position: 'Co-founder & Social Media Manager',
    quote: '"I love meeting new people"',
  },
  {
    name: 'Tharindu',
    position: 'Web Developer Expert',
    quote: '"I love meeting new people"',
  },

  {
    name: 'Nayantha',
    position: 'UI/UX Designer',
    quote: '"I love meeting new people"',
  },
  { name: 'Dehen', position: '3D Modeler', quote: '"I love meeting new people"' },
];

const AboutUs = () => {
  return (
    <div className="w-full h-auto mt-20 flex flex-col gap-10 px-10 md:px-32">
      <div className="bg-[url('/bg-deco.png')] rounded-3xl md:p-20 p-10 flex flex-col gap-10 drop-shadow-xl">
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

      <h4 className="text-center text-4xl">Meet our team</h4>

      <div className="flex flex-row flex-wrap items-baseline justify-center gap-x-20">
        {teamMemberData.map((teamMember) => (
          <TeamMember key={teamMember.name} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
