import React, { useState } from 'react';


const MultiLevelMenu = () => {
  const [mainOpen, setMainOpen] = useState(false);

  return (
    <div className="absolute w-full h-full overflow-hidden">
      {/* Main Menu */}
      <div
        className={`absolute top-0 left-0 w-[240px] h-full bg-white transform transition-transform duration-500 ${
          mainOpen ? 'translate-x-0' : '-translate-x-[240px]'
        }`}
      >
        <ToggleButton onClick={() => setMainOpen(!mainOpen)} />
        <ul>
          <li>
            <a href="#" className="block text-center px-5 leading-[60px] text-black hover:text-gray-500">
              Menu-1
            </a>
          </li>
          <li>
            <a href="#" className="block text-center px-5 leading-[60px] text-black hover:text-gray-500">
              Menu-2
            </a>
          </li>
         

          <li>
            <a href="#" className="block text-center px-5 leading-[60px] hover:text-gray-500">
              Menu-6
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MultiLevelMenu;
