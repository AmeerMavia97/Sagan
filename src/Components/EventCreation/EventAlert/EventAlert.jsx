import React, { useEffect, useState } from 'react';

const EventAlert = () => {
  const [showInfoBox, setShowInfoBox] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      const tagName = target.tagName.toLowerCase();

      const ignoredTags = [
        'input',
        'textarea',
        'button',
        'img',
        'select',
        'label',
      ];

      // Don’t trigger on interactive elements or their children
      if (
        ignoredTags.includes(tagName) ||
        target.closest('button, input, textarea, img, select, label')
      ) {
        return;
      }

      setShowInfoBox(true);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleGotIt = (e) => {
    e.stopPropagation();
    setShowInfoBox(false);
  };

  return (
    <>
      {showInfoBox && (
        <div
          // fixed position (adjust to match your Figma)
          className="fixed top-24 right-8 -translate-x-1/2
                     bg-[#FFB5C0] flex flex-col justify-center w-[220px]
                     px-4 py-5 rounded-[10px] items-center gap-2 z-50"
        >
          <h1 className="font-Inter text-center font-semibold text-[12px]">
            Click the card title to add your own title to the group
          </h1>
          <button
            onClick={handleGotIt}
            className="font-Inter border-[#fff] font-semibold text-[12px]
                       cursor-pointer hover-btn hover-btn-purple text-black
                       rounded-full px-10 py-2 bg-white w-max"
          >
            <span>Got it!</span>
          </button>
        </div>
      )}
    </>
  );
};

export default EventAlert;
