import React, { useState } from 'react';
import MiniNav from '../../Navbar/MiniNav';

const MobileMockup = ({ currentUrl = 'https://saganonline.com', comingSoon = false }) => {
  const mobileFrameImage = '/Images/home/mobile-frame.png';

  const categories = ['Birthday', 'Shagun', 'Eidiya', 'Hongbao', 'Salami', 'Gift'];
  const [activeCategory, setActiveCategory] = useState('Birthday');

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

  return (
    <div className={`flex items-center justify-center py-5 bg-[#fff5f5]`} >
      <div className="relative">
        {/* Mobile Frame Image */}
        <img src={mobileFrameImage} alt="Mobile Frame" className="w-full h-auto max-w-xs mx-auto z-50 pointer-events-none relative" />

        {/* Screen Overlay */}
        <div
          className="absolute overflow-hidden bg-white rounded-3xl"
          style={{
            top: '5%',
            left: '8.5%',
            width: '82%',
            height: '90%',
          }}
        >
          <div className="h-full px-4 py-6 overflow-y-auto">
             <div className='flex justify-center'><img src="/Images/logo.png" alt="Sagan Logo" className="w-36 2xl:w-60 pb-2 pr-2 pt-3" /></div>
            <hr className="mb-4 border-gray-300" />

            {/* Horizontally Scrollable Categories */}
            <div className="flex gap-1 mb-4 overflow-x-auto whitespace-nowrap no-scrollbar z-[9999]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-Inter px-3 text-[11px] font-bold sm:text-[13px] py-1 border-b-2 text-sm flex-shrink-0 ${
                    activeCategory === category
                      ? 'text-[#FFB5C0] border-[#FFB5C0]'
                      : 'text-gray-600 border-transparent hover:text-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="space-y-4">
              {activeImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMockup;
