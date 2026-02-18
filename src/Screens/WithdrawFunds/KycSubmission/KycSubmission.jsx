import { Check } from 'lucide-react';
import React from 'react';

const KycSubmission = () => {
  return (
    <section className="flex flex-col items-center px-4 md:px-8 max-w-3xl mx-auto pt-6 pb-10 gap-4">
      {/* Heading */}
      <h1 className="font-Inter text-[#272727] text-[26px] md:text-[30px] 2xl:text-[32px] font-bold">
        Success
      </h1>

      {/* Card */}
      <div className="bg-[#F8F8F8] w-full rounded-[12px] py-6 md:py-8 mt-2 flex justify-center">
        <div className="max-w-md w-full flex flex-col justify-center items-center gap-4 md:gap-5 px-4">
          {/* Icon */}
          <div className="w-max p-2.5 md:p-3 rounded-full border-[2px] border-[#272727]">
            <Check className="size-6 md:size-7 2xl:size-8" strokeWidth={3} />
          </div>

          {/* Title */}
          <h2 className="font-Inter text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-center leading-snug">
            Documents Uploaded Successfully
          </h2>

          {/* Text */}
          <p className="font-Inter text-[12.5px] md:text-[13.5px] 2xl:text-[14px] text-center text-[#7E7E7E]">
            Our team will review all documents carefully and update you within
            the next 24 hours.
          </p>
          <p className="font-Inter text-[12.5px] md:text-[13.5px] 2xl:text-[14px] text-center text-[#7E7E7E]">
            Thanks for taking your time.
          </p>

          {/* Button */}
          <button
            className="bg-[#FFB5C0] font-Inter rounded-full font-semibold text-[#272727]
                       text-[12px] md:text-[13px] 2xl:text-[14px]
                       px-8 md:px-10 2xl:px-12 py-2 md:py-2.5 mt-3"
          >
            Withdraw Money
          </button>
        </div>
      </div>
    </section>
  );
};

export default KycSubmission;