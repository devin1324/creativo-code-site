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
      className="w-full h-[40vh]  mb-40 flex flex-col items-center justify-center gap-20"
    >
      <h3 className="text-black text-5xl text-center">
        {' '}
        we are happy to assist you!{' '}
      </h3>
      {/* <p className="text-black text-2xl">W</p> */}

      <button className="p-2 bg-stone-800  text-white text-3xl rounded-2xl drop-shadow-lg">
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
