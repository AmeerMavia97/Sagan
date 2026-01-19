import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import 'flowbite';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const videoRef = useRef(null);
  const slideInterval = useRef(null);
  const autoSlideDelay = 5000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, autoSlideDelay);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearInterval(slideInterval.current);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (currentSlide === 1) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentSlide]);

  return (

    <>
      <div className="h-[150vh] w-full min-[360px]:!h-[100vh] md:!h-[90vh] lg:!h-[70vh] bg-[#feb5c0] relative overflow-hidden">
        {/* Slide 1 */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ${currentSlide === 0 ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex flex-col md:flex-row-reverse lg:flex-row items-stretch h-full gap-0 mx-auto">
            <div className="relative  order-1 w-full -mb-5 -mt-14 md:-mt-0 sm:h-56  md:w-[67%]  md:h-auto lg:order-2 flex justify-end">
              <img
                src="Images/home/banner3.png"
                alt="ceremony"
                className="object-cover w-full hidden lg:block h-full "
              />
              <img
                src="Images/home/banner3.png"
                alt="ceremony"
                className="object-cover  object-left-top  w-[90%] h-[40vh] md:w-[100%] block lg:hidden "
              />

            </div>
            <div className="w-full min-[1666px]:!pl-[10%] min-[1810px]:!pl-[20%] md:w-[65%] px-6 sm:px-8 lg:pl-20 z-10 flex flex-col justify-center py-12 sm:py-16 order-2 lg:order-1">
              <h1 className="font-right-grotesk font-[800] mb-5 text-[37px] px-8 md:px-0 leading-[40px] sm:text-3xl lg:text-4xl xl:text-5xl text-[#272727]  lg:leading-[45px] min-[1666px]:!text-[58px] min-[1666px]:!leading-[60px] tracking-tight uppercase text-center md:text-left">
                SEND & RECEIVE CASH
                <br className="hidden md:block" /> FOR LIFE'S BIG MOMENT
              </h1>
              <p className=" max-w-md min-[1666px]:!text-[19px] mb-8 text-[16px] leading-[21px] sm:text-base pr-4 md:text-[15px] lg:text-[16px] text-[#272727] font-[600] opacity-95 text-center md:text-left mx-auto lg:mx-0 min-[1666px]:!max-w-2xl font-Inter">
                Across cultures, giving cash is a cherished tradition—whether for
                weddings, birthdays, baby showers, or just to show appreciation.
                SAGANonline makes it seamless, secure, and meaningful.
              </p>
              <div className="flex justify-center md:justify-start min-[1666px]:items-start min-[1666px]:!w-[50%] min-[1880px]:!w-[40%]">
                <Link
                  to="/register"
                  className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                >
                  <span>Start</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 (Video) */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ${currentSlide === 1 ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src="/Images/videos/event-promo.mp4"
              className="object-cover w-full h-full"
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-[#00000093] bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
              <div className="z-10 max-w-4xl text-center">
                <h1 className="font-right-grotesk leading-[40px] font-[600] mb-5 text-[32px] lg:text-4xl xl:text-6xl text-white tracking-tight uppercase">
                  SEND & RECEIVE CASH FOR
                </h1>
                <h3 className="font-cormorant-upright text-4xl lg:text-4xl xl:text-5xl text-[#feb5c0] !font-[700] mb-3 sm:mb-2">
                  Shagun
                </h3>
                <p className="max-w-2xl mx-auto mb-8 text-[17px] sm:text-base lg:text-lg font-bold text-white opacity-90 font-Inter  min-[1666px]:!text-[19px]">
                  Across cultures, giving cash is a cherished tradition
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/register"
                    className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                  >
                    <span>Start</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-transform duration-700 ${currentSlide === 2 ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src="/Images/videos/event-promo.mp4"
              className="object-cover w-full h-full"
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-[#00000093] bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
              <div className="z-10 max-w-4xl text-center">
                <h1 className="font-right-grotesk leading-[40px] font-[600] mb-5 text-[32px] lg:text-4xl xl:text-6xl text-white tracking-tight uppercase">
                  SEND & RECEIVE CASH FOR
                </h1>
                <h3 className="font-cormorant-upright text-4xl lg:text-4xl xl:text-5xl text-[#feb5c0] !font-[700] mb-3 sm:mb-2">
                  Shagun
                </h3>
                <p className="max-w-2xl mx-auto mb-8 text-[17px] sm:text-base lg:text-lg font-bold text-white opacity-90 font-Inter  min-[1666px]:!text-[19px]">
                  Across cultures, giving cash is a cherished tradition
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/register"
                    className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                  >
                    <span>Start</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-transform duration-700 ${currentSlide === 3 ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src="/Images/videos/event-promo.mp4"
              className="object-cover w-full h-full"
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-[#00000093] bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
              <div className="z-10 max-w-4xl text-center">
                <h1 className="font-right-grotesk leading-[40px] font-[600] mb-5 text-[32px] lg:text-4xl xl:text-6xl text-white tracking-tight uppercase">
                  SEND & RECEIVE CASH FOR
                </h1>
                <h3 className="font-cormorant-upright text-4xl lg:text-4xl xl:text-5xl text-[#feb5c0] !font-[700] mb-3 sm:mb-2">
                  Shagun
                </h3>
                <p className="max-w-2xl mx-auto mb-8 text-[17px] sm:text-base lg:text-lg font-bold text-white opacity-90 font-Inter  min-[1666px]:!text-[19px]">
                  Across cultures, giving cash is a cherished tradition
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/register"
                    className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                  >
                    <span>Start</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute z-20 flex space-x-2 transform -translate-x-1/2 bottom-6 left-1/2 cursor-pointer">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === i
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
            ></button>
          ))}
        </div>

        {/* Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute z-20 p-2 text-white bg-[#ffffff57] bg-opacity-20 hover:bg-opacity-30 rounded-full left-4 top-1/2 transform -translate-y-1/2 cursor-pointer hidden sm:block"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-20 p-2 text-white bg-[#ffffff57] bg-opacity-20 hover:bg-opacity-30 rounded-full right-4 top-1/2 transform -translate-y-1/2 cursor-pointer hidden sm:block"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>

  );
};

export default HeroSection;
