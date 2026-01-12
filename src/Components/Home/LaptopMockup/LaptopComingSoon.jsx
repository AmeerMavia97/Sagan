import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import MiniNav from '../../Navbar/MiniNav';

const LaptopMockupComing = ({ comingSoon = false, currentUrl = 'https://saganonline.com' }) => {
  const laptopFrameImage = 'Images/home/laptop-frame.png';

  const categories = ['Birthday', 'Shagun', 'Eidiya', 'Hongbao', 'Salami', 'Gift'];
  const [activeCategory, setActiveCategory] = useState('Birthday');

  const categoryImages = {
    'Birthday': [
      {
        src: '/Images/ComingSoon/Birthday/01.jpg',
        alt: 'Wedding Fund 1',
      },
      {
        src: '/Images/ComingSoon/Birthday/02.jpg',
        alt: 'Wedding Fund 2',
      },
      {
        src: '/Images/ComingSoon/Birthday/03.jpg',
        alt: 'Wedding Fund 3',
      },
    ],

    Shagun: [
      {
        src: '/Images/ComingSoon/Shagun/01.jpg',
        alt: 'Shagun 1',
      },
      {
        src: '/Images/ComingSoon/Shagun/02.jpg',
        alt: 'Shagun 2',
      },
      {
        src: '/Images/ComingSoon/Shagun/03.jpg',
        alt: 'Shagun 3',
      },
    ],

    Eidiya: [
      {
        src: '/Images/ComingSoon/Eidiya/01.jpg',
        alt: 'Eidiya 1',
      },
      {
        src: '/Images/ComingSoon/Eidiya/02.jpg',
        alt: 'Eidiya 2',
      },
      {
        src: '/Images/ComingSoon/Eidiya/03.jpg',
        alt: 'Eidiya 3',
      },
    ],

    Hongbao: [
      {
        src: '/Images/ComingSoon/Hongbao/01.jpg',
        alt: 'Hongbao 1',
      },
      {
        src: '/Images/ComingSoon/Hongbao/02.jpg',
        alt: 'Hongbao 2',
      },
      {
        src: '/Images/ComingSoon/Hongbao/03.jpg',
        alt: 'Hongbao 3',
      },
    ],

    Salami: [
      {
        src: '/Images/ComingSoon/Salami/01.jpg',
        alt: 'Salami 1',
      },
      {
        src: '/Images/ComingSoon/Salami/02.jpg',
        alt: 'Salami 2',
      }
    ],

    Gift: [
      {
        src: '/Images/ComingSoon/Gift/01.jpg',
        alt: 'Gift 1',
      },
      {
        src: '/Images/ComingSoon/Gift/02.jpg',
        alt: 'Gift 2',
      },
      {
        src: '/Images/ComingSoon/Gift/03.jpg',
        alt: 'Gift 3',
      },
    ],
  };

  const activeImages = categoryImages[activeCategory] || [];


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

            <div className="h-full px-6 pb-6 2xl:pb-8 pt-5 overflow-y-auto">

              <div className='flex justify-center'><img src="/Images/logo.png" alt="Sagan Logo" className="w-48 2xl:w-60 pb-4 " /></div>
              <hr className="mb-7 border-gray-300" />

              {/* Category Tabs */}
              <div className="flex  justify-center xl:justify-evenly mb-8 space-x-6 text-sm font-medium">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`font-Inter px-2 pb-1 border-b-2 transition-colors duration-200 cursor-pointer text-[15px] 2xl:text-[16px] ${activeCategory === category
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
                {activeImages.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden shadow-lg cursor-pointer rounded-xl group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-[240px] transition-transform duration-300 group-hover:scale-105"
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

export default LaptopMockupComing;
