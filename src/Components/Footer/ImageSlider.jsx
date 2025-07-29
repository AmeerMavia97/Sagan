import React from "react";

const images = [
  "Images/footer/01.jpg",
  "Images/footer/02.jpg",
  "Images/footer/03.jpg",
  "Images/footer/04.jpg",
  "Images/footer/05.jpg",
  "Images/footer/01.jpg",
  "Images/footer/02.jpg",
  "Images/footer/03.jpg",
  "Images/footer/04.jpg",
  "Images/footer/05.jpg",
];

const ImageSlider = () => {
  return (
    <>
      {/* Image Slider */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className="flex animate-slide">
          {images.concat(images).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx}`}
              className="!object-cover h-64 shrink-0"
            />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-slide {
            animation: slide 10s linear infinite;
            width: fit-content;
          }
          
        `}
      </style>
    </>
  );
};

export default ImageSlider;
