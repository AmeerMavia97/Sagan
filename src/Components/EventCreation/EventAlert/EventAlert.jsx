<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react'

const EventAlert = () => {

    const [showInfoBox, setShowInfoBox] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const BOX_WIDTH = 220;
    const BOX_HEIGHT = 120;


    useEffect(() => {
        const handleClick = (e) => {
            const tagName = e.target.tagName.toLowerCase();

            // Don't show box on interactive elements
            const ignoredTags = ['input', 'textarea', 'button', 'img', 'select', 'label'];

            // If clicked inside an interactive element or its child, skip
            if (ignoredTags.includes(tagName) || e.target.closest('button, input, textarea, img, select, label')) {
                return;
            }

            const clickX = e.clientX;
            const clickY = e.clientY;

            const screenW = window.innerWidth;
            const screenH = window.innerHeight;

            let adjustedX = clickX + BOX_WIDTH > screenW ? screenW - BOX_WIDTH - 10 : clickX;
            let adjustedY = clickY + BOX_HEIGHT > screenH ? screenH - BOX_HEIGHT - 10 : clickY;

            setClickPosition({ x: adjustedX, y: adjustedY });
            setShowInfoBox(true);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);


    const handleGotIt = (e) => {
        e.stopPropagation();
        setShowInfoBox(false);
    };


    return (
        <>
            {showInfoBox && (
                <div
                    style={{ top: clickPosition.y, left: clickPosition.x, position: 'absolute' }}
                    className='bg-[#FFB5C0] flex flex-col justify-center w-[220px] px-4 py-5 rounded-[10px] items-center gap-2 z-50'
                >
                    <h1 className='font-Inter text-center font-semibold text-[12px]'>
                        Click the card title to add your own title to the group
                    </h1>
                    <button
                        onClick={handleGotIt}
                        className='font-Inter border-[#fff] font-semibold text-[12px] cursor-pointer hover-btn hover-btn-purple text-black rounded-full px-10 py-2 bg-white w-max'>
                        <span>Got it!</span>
                    </button>
                </div>
            )}</>
    )
}

export default EventAlert
>>>>>>> 97d14d5707f0a9f4c975a9fbe32d4fcb75e56d9b
