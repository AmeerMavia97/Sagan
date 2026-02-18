import { ArrowDown, Upload } from 'lucide-react';
import React from 'react';

const KYCStep2 = ({ onNext }) => {
  return (
    <section className="px-4 md:px-10 lg:px-16 max-w-5xl mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 pt-8 pb-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-Inter text-[#272727] text-[32px] md:text-[38px] 2xl:text-[44px] font-bold">
          KYC Verification
        </h1>
        <p className="text-[14px] md:text-[16px] 2xl:text-[18px] text-[#3F3F3F] font-semibold mt-1 font-Inter">
          Step 2 : Submit Your ID
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#F8F8F8] rounded-[10px] flex w-full px-8 md:px-10 lg:px-12 py-8 md:py-10 2xl:py-12">
        {/* Left: image */}
        <div className="border-r border-[#E0E0E0] flex justify-center items-center w-1/2 h-[260px] md:h-[300px] 2xl:h-[340px]">
          <img
            className="w-[170px] md:w-[210px] 2xl:w-[240px]"
            src="/Images/KycImage/KycCard.png"
            alt="KYC Card"
          />
        </div>

        {/* Right: content */}
        <div className="w-1/2 flex flex-col gap-6 md:gap-7 2xl:gap-8 pl-8 md:pl-10 2xl:pl-12">
          {/* Description */}
          <span>
            <h2 className="font-Inter text-[18px] md:text-[20px] 2xl:text-[22px] font-bold">
              ID Verification
            </h2>
            <p className="text-[#7E7E7E] mt-2 text-[13px] md:text-[14px] 2xl:text-[16px] leading-relaxed font-Inter">
              We scan the user&apos;s ID document and detect whether it is
              genuine or fraudulent.
            </p>
          </span>

          {/* Select + upload buttons */}
          <div className="flex flex-col gap-4 md:gap-5 w-full">
            {/* Select document type */}
            <button
              type="button"
              className="bg-[#FFB5C0] font-Inter rounded-full font-semibold text-[#272727]
                         text-[13px] md:text-[14px] 2xl:text-[16px]
                         px-5 md:px-6 2xl:px-8 py-2.5 md:py-3 2xl:py-3.5
                         w-full flex justify-between items-center"
            >
              Select Document Type
              <ArrowDown strokeWidth={2} className="size-4 md:size-5 2xl:size-6" />
            </button>

            {/* Upload front/back */}
            <div className="flex gap-3 md:gap-4">
              <button
                type="button"
                className="border-[#FFB5C0] border-[2px] font-Inter rounded-full font-semibold
                           text-[#272727] px-3 py-2 md:py-2.5 2xl:py-3
                           w-full flex justify-center items-center gap-3"
              >
                <span className="text-left">
                  <p className="text-[12px] md:text-[13px] 2xl:text-[14px]">
                    Upload ID Card
                  </p>
                  <p className="text-[11px] md:text-[11.5px] 2xl:text-[13px] -mt-[2px]">
                    (Front View)
                  </p>
                </span>
                <Upload className="size-4 md:size-5 2xl:size-6" />
              </button>

              <button
                type="button"
                className="border-[#FFB5C0] border-[2px] font-Inter rounded-full font-semibold
                           text-[#272727] px-3 py-2 md:py-2.5 2xl:py-3
                           w-full flex justify-center items-center gap-3"
              >
                <span className="text-left">
                  <p className="text-[12px] md:text-[13px] 2xl:text-[14px]">
                    Upload ID Card
                  </p>
                  <p className="text-[11px] md:text-[11.5px] 2xl:text-[13px] -mt-[2px]">
                    (Back View)
                  </p>
                </span>
                <Upload className="size-4 md:size-5 2xl:size-6" />
              </button>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-center pt-1">
            <button
              onClick={onNext}
              className="bg-[#FFB5C0] font-Inter rounded-full font-semibold text-[#272727]
                         text-[14px] md:text-[15px] 2xl:text-[16px]
                         px-10 md:px-12 2xl:px-14 py-2.5 md:py-3 2xl:py-3.5 w-max"
            >
              Submit ID
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCStep2;
