import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 min-[1666px]:py-[50px] bg-white flex justify-center ">
      <div className="flex flex-col items-center gap-10 px-6  md:px-12 lg:px-[5%] xl:px-12 lg:flex-row min-[1666px]:justify-center lg:gap-16 xl:gap-32 min-[1666px]:!gap-0 min-[1666px]:!pl-44 min-[1666px]:!pr-32 min-[1666px]:w-[90%] min-[1800px]:w-[80%] ">
        {/* Left Text Content */}
        <div className="text-center lg:w-1/2 flex flex-col lg:text-left min-[1666px]:gap-3">
          <h4 className="font-medium text-[#272727] !tracking-[3px] uppercase min-[1666px]:text-[23px] min-[1666px]:!tracking-[5px] text-[15px] sm:text-md mb-2 font-Inter min-[1180px]:!tracking-[3px]">
            About Us
          </h4>
          <h2 className="mb-4 text-[37px] leading-[42px] sm:text-5xl font-right-grotesk flex flex-col lg:leading-[42px] text-[#272727] md:text-5xl sm:leading-[48px] lg:text-4xl min-[1180px]:text-[43px] min-[1666px]:!leading-[50px] min-[1666px]:!text-[50px]  uppercase ">
            Honoring traditions, 
            <br className="hidden md:block" />
            <span className="text-gray-800">digitally.</span>
          </h2>
          <p className="max-w-md text-[15px] px-4 sm:px-0 font-[550] leading-[22px] text-[#454545] md:mx-0 md:max-w-lg font-Inter min-[1180px]:!text-[15.5px] min-[1666px]:!text-[17px] xl:max-w-lg min-[1666px]:!max-w-2xl min-[1666px]:leading-[25px] min-[1666px]:!mt-3">
            At SAGANonline, we believe cash gifts are more than just money—they’re a gesture of love, generosity, and good fortune. Across cultures, gifting cash has been a time-honored tradition, from wedding contributions and baby blessings to group gifts and milestone celebrations.
          </p>
        </div>

        {/* Right Image Content */}
        <div className="relative flex justify-end lg:w-1/2 ">
          <img
            src="Images/about/about.png"
            alt="Gift Tradition"
            className="relative sm:w-[500px] sm:h-[350px] lg:w-[440px] lg:h-[320px]   xl:w-[520px] xl:h-[400px]  object-cover rounded-xl z-10 min-[1666px]:h-[500px] min-[1666px]:!w-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
