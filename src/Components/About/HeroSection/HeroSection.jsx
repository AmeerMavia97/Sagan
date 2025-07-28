import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container flex flex-col items-center gap-10 px-6 mx-auto md:px-12 md:flex-row">
        {/* Left Text Content */}
        <div className="text-center md:w-1/2 md:text-left">
          <h4 className="font-medium tracking-widest text-[#272727] uppercase text-md mb-2 font-space-grotesk">
            About Us
          </h4>
          <h2 className="mb-4 text-3xl font-right-grotesk font-extrabold leading-tight text-[#272727] md:text-4xl">
            Honoring traditions,
            <br className="hidden md:block" />
            <span className="text-gray-800">digitally.</span>
          </h2>
          <p className="max-w-md mx-auto font-[600] leading-[22px] text-[#272727] md:mx-0 font-space-grotesk">
            At SAGANonline, we believe cash gifts are more than just money—they’re a gesture of love, generosity, and good fortune. Across cultures, gifting cash has been a time-honored tradition, from wedding contributions and baby blessings to group gifts and milestone celebrations.
          </p>
        </div>

        {/* Right Image Content */}
        <div className="relative flex justify-center md:w-1/2">
          <img
            src="Images/about/about.jpg"
            alt="Gift Tradition"
            className="relative w-[500px] h-[400px] object-cover rounded-xl z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
