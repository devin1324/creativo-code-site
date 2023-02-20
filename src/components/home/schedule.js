import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

const Schedule = () => {
  const [element, setElement] = useState();

  useEffect(() => {
    const ele = document.getElementById('schedule');
    setElement(ele);
    console.log(ele)
  }, []);

  return (
    <div
      id="schedule"
      className="w-full h-[40vh] gap-10  flex flex-col items-center justify-center md:mb-40 md:gap-20"
    >
      <h3 className="text-black text-5xl text-center">
        {' '}
        We are happy to assist you!{' '}
      </h3>
      {/* <p className="text-black text-2xl">W</p> */}

      <button className=" bg-stone-500 px-3 py-2  text-white text-lg rounded-2xl drop-shadow-lg md:text-3xl md:p-2">
        <PopupButton
          url="https://calendly.com/thecreativocode/schedule-a-meeting"
          rootElement={element}
          text="Schedule a meeting"
        />
      </button>
    </div>
  );
};

export default Schedule;
