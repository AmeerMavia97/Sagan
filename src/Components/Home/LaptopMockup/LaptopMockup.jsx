import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import MiniNav from '../../Navbar/MiniNav';

const LaptopMockup = ({ comingSoon = false, currentUrl = 'https://saganonline.com' }) => {
  const laptopFrameImage = 'Images/home/laptop-frame.png';

  const categories = ['Wedding Fund', 'Shagun', 'Eidiya', 'Hongbao', 'Salami', 'Gift'];
  const [activeCategory, setActiveCategory] = useState('Wedding Fund');

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=faces',
      alt: 'Traditional Wedding Ceremony',
    },
    {
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop&crop=faces',
      alt: 'Wedding Celebration',
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&crop=faces',
      alt: 'Wedding Photography',
    },
  ];

  // Shuffle images (non-destructive)
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  return (
    <div className={`flex items-center justify-center py-10 bg-[#fff5f5]`}>
      <div className="relative">
        {/* Laptop Frame */}
        <div className='relative flex justify-center '>
          <span className='bg-[#cecfd2] text-[#cecfd2]  h-14 w-14 bottom-30 absolute text-center -mt-20'>.</span>
        <img src={laptopFrameImage} alt="Laptop Frame" className="w-auto h-auto max-w-full " />

        </div>

        {/* Content Overlay */}
        <div className="absolute top-[3.5%] left-[11.5%] w-[77%] h-[70%] overflow-hidden">
          <div className="h-full bg-white">
            {/* <MainHeader /> */}
            <MiniNav></MiniNav>

            <div className="h-full px-6 py-8 overflow-y-auto">
              <h1 className="mb-8 text-4xl font-bold text-center text-gray-900 font-right-grotesk">
                SAGANONLINE
              </h1>
              <hr className="mb-8 border-gray-300" />

              {/* Category Tabs */}
              <div className="flex  justify-center xl:justify-evenly mb-8 space-x-6 text-sm font-medium">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`font-Inter px-2 pb-1 border-b-2 transition-colors duration-200 cursor-pointer xl:text-[16px] ${
                      activeCategory === category
                        ? 'text-[#ff848b] border-[#ff848b]'
                        : 'text-gray-600 border-transparent hover:text-gray-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Image Grid */}
              <div className="grid max-w-4xl grid-cols-3 gap-4 mx-auto">
                {shuffledImages.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden shadow-lg cursor-pointer rounded-xl group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopMockup;
