// EventAlert.jsx
import React from 'react';

const EventAlert = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleGotIt = (e) => {
    e.stopPropagation();   // prevent click from bubbling back to card
    onClose();
  };

  return (
    <div
      className="
        absolute  top-[65%] left-full -translate-y-1/2 ml-8 2xl:ml-10
        bg-[#FFB5C0] flex flex-col justify-center w-[230px]
        px-4 py-5 rounded-[10px] items-center gap-2 z-50
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
      "
    >
      <h1 className="font-Inter text-center font-semibold text-[12px]">
        Click the card title to add your own title to the group
      </h1>
      <button
        type="button"
        onClick={handleGotIt}
        className="font-Inter border-[#fff] font-semibold text-[12px]
                   cursor-pointer hover-btn hover-btn-purple text-black
                   rounded-full px-10 py-2 bg-white w-max mt-2"
      >
        Got it!
      </button>
    </div>
  );
};

export default EventAlert;