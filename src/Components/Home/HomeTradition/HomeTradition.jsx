import React from "react";

const HomeTradition = () => {
  return (
    <>
      <section className="px-2 pt-9 pb-14 xl:py-20 min-[1666px]:py-16 bg-white md:px-8 lg:px-12">
        <div className="flex flex-col items-center  gap-2 sm:gap-8 lg:gap-10 mx-auto max-w-7xl md:flex-row">
          <div className="flex-shrink-0 justify-center items-center flex w-full mb-5 md:w-1/2">
            <img
              src="Images/home/event-promotion.png"
              alt="Honoring Traditions"
              className="object-cover w-[90%] xl:w-[90%] 2xl:w-[100%] h-auto rounded-lg"
            />
          </div>

          <div className="w-[90%] md:w-[100%] xl:!w-[40%] min-[1666px]:!w-[40%] text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 text-[37px] font-extrabold leading-[35px] mb-9 md:mb-5 text-gray-900 font-right-grotesk sm:text-[42px] sm:leading-[45px] md:text-[35px] md:leading-[39px] xl:text-[40px]  min-[1666px]:!text-[50px] min-[1666px]:!leading-[52px] uppercase">
              Honoring Traditions, <br className="hidden sm:block" />
              Digitally.
            </h2>
            <p className="text-base font-Inter  text-[16px] px-5 sm:px-0 leading-[20px] text-black sm:leading-relaxed sm:text-gray-900 sm:text-md md:text-[14px] xl:text-[16px] min-[1666px]:!text-[20px] min-[1666px]:w-[90%] min-[1666px]:!leading-[27px] font-[500]">
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
