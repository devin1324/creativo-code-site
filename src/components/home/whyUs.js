import React from 'react';

const WhyUs = () => {
  return (
    <div className="w-full h-auto  bg-orage-400  mt-20 flex flex-col gap-10 md:px-20 pb-[50vh]">
      <h4 className="text-center text-3xl underline">
        Why you should Be Working with Us ?
      </h4>
      <p className='text-center text-lg'>
        Why you should Be Working with Us ?Why you should Be Working with Us
        ?Why you should Be Working with Us ?Why you should Be Working with Us
        ?Why you should Be Working with Us ?Why you should Be Working with Us ?
      </p>
      <div className="grid grid-cols-1   md:grid-cols-2  lg:grid-cols-3  gap-5">
            <div className='bg-blue-500 h-80 w-full'>

            </div>

            <div className='bg-red-500 h-80 w-full hidden lg:block'>

            </div>


            <div className='bg-blue-500 h-80 w-full'>

            </div>
      </div>
    </div>
  );
};

export default WhyUs;
