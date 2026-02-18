import { ArrowDown, Upload } from 'lucide-react';
import React from 'react';

const KYCStep = ({ onNext }) => {
  return (
    <section className="px-3 md:px-8 lg:px-12 max-w-4xl mx-auto flex flex-col justify-center items-center gap-5 md:gap-6 pt-6 pb-10">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-Inter text-[#272727] text-[26px] md:text-[30px] 2xl:text-[32px] font-bold">
          KYC Verification
        </h1>
        <p className="text-[12px] md:text-[13px] 2xl:text-[14px] text-[#3F3F3F] font-semibold mt-1 font-Inter">
          Step 3 : Proof of Address
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#F8F8F8] rounded-[10px] flex w-full px-6 md:px-8 lg:px-10 py-6 md:py-7 2xl:py-8">
        {/* Left: image */}
        <div className="border-r border-[#E0E0E0] flex justify-center items-center w-1/2 h-[210px] md:h-[230px] 2xl:h-[250px]">
          <img
            className="w-[140px] md:w-[165px] 2xl:w-[180px]"
            src="/Images/KycImage/Document.png"
            alt="Proof of address document"
          />
        </div>

        {/* Right: content */}
        <div className="w-1/2 flex flex-col gap-4 md:gap-5 2xl:gap-6 pl-6 md:pl-7 2xl:pl-8">
          <span>
            <h2 className="font-Inter text-[16px] md:text-[17px] 2xl:text-[18px] font-bold">
              ID Verification
            </h2>
            <p className="text-[#7E7E7E] text-[11.5px] md:text-[12px] 2xl:text-[13px] leading-relaxed font-Inter mt-2">
              Full name, full residential address and date of issue must appear
              on the document. Utility bills and bank statements should be no
              older than 3 months.
            </p>
          </span>

          {/* Select + upload */}
          <div className="flex flex-col gap-3 w-full">
            <button
              type="button"
              className="bg-[#FFB5C0] font-Inter rounded-full font-semibold text-[#272727]
                         text-[11.5px] md:text-[12px] 2xl:text-[13px]
                         px-4 md:px-5 2xl:px-6 py-2 md:py-2.5
                         w-full flex justify-between items-center"
            >
              Select Document Type
              <ArrowDown strokeWidth={2} className="size-3.5 md:size-4 2xl:size-4" />
            </button>

            <button
              type="button"
              className="border-[#FFB5C0] border-[2px] font-Inter rounded-full font-semibold
                         text-[#272727] text-[11.5px] md:text-[12px] 2xl:text-[13px]
                         py-2 md:py-2.5 px-4 md:px-5
                         w-full flex justify-between items-center"
            >
              <span className="font-Inter text-[11.5px] md:text-[12px] 2xl:text-[13px]">
                Upload Address Document
              </span>
              <Upload className="size-4 md:size-4.5 2xl:size-5" />
            </button>
          </div>

          {/* Submit button */}
          <div className="flex justify-center pt-1">
            <button
              onClick={onNext}
              className="bg-[#FFB5C0] font-Inter rounded-full font-semibold text-[#272727]
                         text-[12px] md:text-[13px] 2xl:text-[14px]
                         px-8 md:px-9 2xl:px-10 py-2 md:py-2.5 w-max"
            >
              Submit Document
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCStep;
