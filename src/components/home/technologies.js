import React from 'react';
import Image from 'next/image';

const tecDataSet = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'REACT' },
  { name: 'NEXT JS' },
  { name: 'ANGULAR JS' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'REACT' },
  { name: 'NEXT JS' },
  { name: 'ANGULAR JS' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'REACT' },
  { name: 'NEXT JS' },
  { name: 'ANGULAR JS' },
];

const Technologies = () => {
  return (
    <div className="w-full h-auto flex flex-col text-center px-1  items-center mt-20 md:px-20">
      <h3 className='text-3xl'>Technologies that we use</h3>
      <div className='w-full flex flex-row flex-nowrap items-center gap-10 pt-20 overflow-scroll px-7 md:flex-wrap md:overflow-hidden mg:px-0'>
        {tecDataSet.map((tecData) => (
          <Image
          className='h-32 w-32'
            src="/ph-projects.jpg"
            alt={tecData.name}
            key={tecData.name}
            width="300"
            height="300"
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
