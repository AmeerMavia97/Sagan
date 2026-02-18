import React from "react";
import { Link } from "react-router-dom";
import LaptopMockup from "../../Components/Home/LaptopMockup/LaptopMockup";
import MobileMockup from "../../Components/Home/MobileMockup/MobileMockup";
import EventPromoSection from "../../Components/About/EventPromotion/EventPromoSection";
import AboutLaptop from "../../Components/AboutLaptop/AboutLaptop";

const ComingSoon = () => {
  return (
    <>
      <section classNameName="bg-[#fff5f7] min-h-screen">
        <div className="flex flex-col min-h-screen bg-[#fff5f7]">
          <header className="pt-5 sm:pt-8 pb-10 lg:p-8">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/Images/logo.png"
                alt="SAGAN"
                className="w-auto h-20 2xl:h-24"
              />
            </div>
          </header>
          <main className="flex items-center justify-center flex-1 px-8 mb-16">
            <div className="w-full text-center">
              <h1 className="mb-8 text-[32px] leading-[36px] sm:text-4xl font-right-grotesk  font-bold sm:leading-tight text-[#272727] lg:text-[42px] 2xl:text-[50px]">
                {" "}
                BE THE FIRST TO EXPERIENCE
                <br />
                <span>SAGANONLINE!</span>
              </h1>
              <p className="max-w-lg text-[12px] xl:max-w-2xl font-Inter px-4 mx-auto mb-12 sm:text-lg md:text-[16px] leading-relaxed text-center text-[#272727] xl:px-1 font-semibold lg:text-[16px] 2xl:text-[20px]">
                {" "}
                SaganOnline is redefining digital gift-giving, making every
                moment more meaningful. Join our waiting list today and be among
                the first to access exclusive features, early invites, and
                special perks.{" "}
              </p>
              <p className=" max-w-lg xl:max-w-2xl text-[12px] font-Inter px-4 mx-auto mb-12 sm:text-lg md:text-[16px]  leading-relaxed text-center text-[#272727] xl:px-1 font-semibold lg:text-[16px] 2xl:text-[20px]">
                {" "}
                Sign up now and get ready to give and receive
                <br /> gifts in a whole new way!{" "}
              </p>
              <form className="w-[85%] max-w-sm min-[1766px]:!max-w-[20.5%] mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4.5 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[14px] font-Inter font-[500] 2xl:px-6 2xl:py-4 text-left placeholder-gray-400 transition-all bg-white sm:border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent 2xl:text-[16px] "
                  required=""
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4.5 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[14px] font-Inter font-[500] 2xl:px-6 2xl:py-4 text-left placeholder-gray-400 transition-all bg-white sm:border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent 2xl:text-[16px]"
                  required=""
                />
                <button
                  type="submit"
                  className="w-full font-Inter  px-8 text-[12px] sm:text-[15.5px] py-3 2xl:py-4 font-semibold text-white transition-all duration-200 transform bg-[#272727] rounded-full hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  <span>Sign Up </span>
                </button>
              </form>
            </div>
          </main>

          <div>
            <AboutLaptop></AboutLaptop>
          </div>

          <div className=" hidden pb-12 lg:block">
            <LaptopMockup></LaptopMockup>
          </div>
          <div className=" lg:hidden pb-12 z-[9999999]">
            <MobileMockup></MobileMockup>
          </div>

          <footer className="px-8 py-10 bg-[#FFB5C0]">
            <div className="mx-auto flex flex-col justify-center gap-8">
              <div className="flex items-center justify-center ">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/Images/logo.png"
                      alt="SAGAN"
                      className="w-auto h-20 sm:h-16 lg:h-20 2xl:h-28"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center flex justify-center">
                <p className=" text-[10px] max-w-[75%] sm:text-[14px] sm:max-w-sm xl:!max-w-[100%] lg:text-[16px] font-semibold font-Inter 2xl:text-[19px] text-[#272727]">
                  © 2024 - SAGAN Online | All Rights Reserved | Designed By
                  DevanceSoft
                </p>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
