import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

const Schedule = () => {
  const [element, setElement] = useState();

  useEffect(() => {
    const ele = document.getElementById('schedule');
    setElement(ele);
    console.log(ele);
  }, []);

  return (
    <div
      id="schedule"
      className="w-full h-auto gap-10 py-10 flex flex-col items-center justify-center md:pb-20 md:gap-10 "
    >
      <h3 className="text-black text-5xl text-center font-bold">
        How can we help?
      </h3>

      <span>
        <h3 class="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-transparent bg-clip-text text-5xl font-bold inline-block py-2 text-center">
          Talk to our experts today.
        </h3>
      </span>

      <button className=" bg-[#e9489c] py-3 px-3 text-white text-lg font-semibold rounded-2xl drop-shadow-lg md:text-3xl md:p-2 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:-translate-y-1 hover:scale-105 transition duration-500">
        <PopupButton
          url="https://calendly.com/thecreativocode/schedule-a-meeting"
          rootElement={element}
          text="Schedule a meeting →"
        />
      </button>
      <p class="text-gray-400">Experts in designing, developing & marketing.</p>
    </div>
  );
};

export default Schedule;
