import React from 'react';

const KYCStep1 = ({ onNext }) => {
  return (
    <section className="px-4 md:px-10 lg:px-16 max-w-5xl mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 pt-8 pb-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-Inter text-[#272727] text-[32px] md:text-[38px] 2xl:text-[44px] font-bold">
          KYC Verification
        </h1>
        <p className="text-[14px] md:text-[16px] 2xl:text-[18px] text-[#3F3F3F] font-semibold mt-1 font-Inter">
          Step 1 : Take Selfie
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#F8F8F8] rounded-[10px] flex w-full px-8 md:px-10 lg:px-12 py-8 md:py-10 2xl:py-12">
        {/* Left: illustration */}
        <div className="border-r border-[#E0E0E0] flex justify-center items-center w-1/2 h-[260px] md:h-[300px] 2xl:h-[340px]">
          <img
            className="w-[170px] md:w-[210px] 2xl:w-[240px]"
            src="/Images/KycImage/Mobile.png"
            alt=""
          />
        </div>

        {/* Right: text + button */}
        <div className="w-1/2 flex flex-col gap-6 md:gap-7 2xl:gap-8 pl-8 md:pl-10 2xl:pl-12">
          <span>
            <h2 className="font-Inter text-[18px] md:text-[20px] 2xl:text-[22px] font-bold">
              Smart Capture
            </h2>
            <p className="text-[#7E7E7E] text-[13px] md:text-[14px] 2xl:text-[16px] leading-relaxed font-Inter">
              Our technology automatically detects a good frame and takes the picture.
            </p>
          </span>

          <span>
            <h2 className="font-Inter text-[18px] md:text-[20px] 2xl:text-[22px] font-bold">
              Digital Tamper Detection
            </h2>
            <p className="text-[#7E7E7E] text-[13px] md:text-[14px] 2xl:text-[16px] leading-relaxed font-Inter">
              We can detect digitally modified images to help reduce instances of fraud.
            </p>
          </span>

          <button
            onClick={onNext}
            className="bg-[#FFB5C0] font-Inter rounded-full font-semibold text-[#272727]
                       text-[14px] md:text-[15px] 2xl:text-[16px] px-8 md:px-10 2xl:px-12
                       py-2.5 md:py-3 2xl:py-3.5 w-max"
          >
            Take a Picture
          </button>
        </div>
      </div>
    </section>
  );
};

export default KYCStep1;