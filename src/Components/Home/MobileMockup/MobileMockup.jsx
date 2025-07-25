import React, { useState } from 'react';

const MobileMockup = ({ currentUrl = 'https://saganonline.com', comingSoon = false }) => {
  const mobileFrameImage = '/Images/home/mobile-frame.png';

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

  return (
    <div className={`flex items-center justify-center py-5 bg-[#fff5f5]`} >
      <div className="relative">
        {/* Mobile Frame Image */}
        <img src={mobileFrameImage} alt="Mobile Frame" className="w-full h-auto max-w-xs mx-auto" />

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
            <h1 className="mb-4 text-xl font-bold text-center text-gray-900 font-space-grotesk">
              SAGANONLINE
            </h1>
            <hr className="mb-4 border-gray-300" />

            {/* Horizontally Scrollable Categories */}
            <div className="flex gap-3 mb-4 overflow-x-auto whitespace-nowrap no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-space-grotesk px-3 py-1 border-b-2 text-sm flex-shrink-0 ${
                    activeCategory === category
                      ? 'text-pink-500 border-pink-500'
                      : 'text-gray-600 border-transparent hover:text-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="space-y-4">
              {images.map((image, index) => (
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
