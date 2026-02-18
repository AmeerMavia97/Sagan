import React from 'react';

const FundStep2 = ({ onNext }) => {
  return (
    <section className="flex flex-col items-center px-4 md:px-8 max-w-4xl mx-auto gap-6 md:gap-8 py-6 md:py-8">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-Inter text-[#272727] text-[26px] md:text-[30px] 2xl:text-[32px] font-bold">
          KYC Verification
        </h1>
        <p className="text-[12px] md:text-[13px] 2xl:text-[14px] text-[#3F3F3F] font-semibold mt-1 font-Inter">
          Verify your identity in 3 Easy Steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full">
        <div className="flex flex-col gap-4 rounded-[10px] border-[2px] border-[#FFB5C0] px-6 md:px-7 py-6 md:py-7 text-center items-center justify-between">
          <img className="w-24 md:w-28 2xl:w-32" src="/Images/KycImage/Mobile.png" alt="" />
          <h2 className="font-Inter font-semibold text-[13px] md:text-[14px] 2xl:text-[15px] text-[#3F3F3F]">
            Step 1 : Take Selfie
          </h2>
        </div>

        <div className="flex flex-col gap-4 rounded-[10px] border-[2px] border-[#FFB5C0] px-6 md:px-7 py-6 md:py-7 text-center items-center justify-between">
          <img className="w-24 md:w-28 2xl:w-32" src="/Images/KycImage/KycCard.png" alt="" />
          <h2 className="font-Inter font-semibold text-[13px] md:text-[14px] 2xl:text-[15px] text-[#3F3F3F]">
            Step 2 : Submit Your ID
          </h2>
        </div>

        <div className="flex flex-col gap-4 rounded-[10px] border-[2px] border-[#FFB5C0] px-6 md:px-7 py-6 md:py-7 text-center items-center justify-between">
          <img className="w-24 md:w-28 2xl:w-32" src="/Images/KycImage/Document.png" alt="" />
          <h2 className="font-Inter font-semibold text-[13px] md:text-[14px] 2xl:text-[15px] text-[#3F3F3F]">
            Step 3 : Proof of Address
          </h2>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="bg-[#FFB5C0] font-Inter rounded-full font-[700] text-[#272727]
                   text-[13px] md:text-[14px] 2xl:text-[15px]
                   px-10 md:px-12 2xl:px-14 py-2.5 md:py-3 w-max mt-2"
      >
        Verify Now
      </button>
    </section>
  );
};

export default FundStep2;
