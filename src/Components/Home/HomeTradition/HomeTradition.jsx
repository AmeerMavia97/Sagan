import React from "react";

const HomeTradition = () => {
  return (
    <>
      <section className="px-4 py-12 min-[166px]:py-16 bg-white md:px-12">
        <div className="flex flex-col items-center gap-10 mx-auto max-w-7xl md:flex-row">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src="Images/home/event-promotion.png"
              alt="Honoring Traditions"
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full xl:!w-[40%] min-[1666px]:!w-[40%] text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 font-right-grotesk sm:text-3xl md:text-4xl xl:text-[40px]  min-[1666px]:!text-[50px] uppercase">
              Honoring Traditions, <br className="hidden sm:block" />
              Digitally.
            </h2>
            <p className="text-base font-Inter  text-[15px] text-black sm:leading-relaxed sm:text-gray-900 sm:text-lg xl:text-[16px] min-[1666px]:!text-[20px] min-[1666px]:w-[90%] min-[1666px]:!leading-[27px] font-[500]">
              With SAGANonline, you can send and receive cash gifts in a way
              that respects tradition while embracing modern convenience.
              Whether you call it a wedding fund, group gift, red-envelope,
              Eidiya, Hongbao, Sagan, or Shagun—we make it effortless to give
              and receive cash with ease.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTradition;
