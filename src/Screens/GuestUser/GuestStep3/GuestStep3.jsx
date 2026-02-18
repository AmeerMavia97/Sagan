import React from 'react';
import GuestLayout from '../../../Components/GuestUser/GuestLayout/GuestLayout';

const GuestStep3 = ({ onNext, defaultValues }) => {
  const handleContinue = (e) => {
    e.preventDefault();          // stop form submit / page reload
    onNext({
      // put any data you actually want to carry to the next step
      // e.g. amount: 10,
    });
  };

  return (
    <div className="flex justify-center">
      <GuestLayout CurrentStep={2}>
        <h1 className="font-Inter font-bold leading-[32px] 2xl:leading-[37px] px-10 2xl:px-20 text-[23px] 2xl:text-[30px]">
          How much would you like to contribute?
        </h1>

        <form
          className="flex flex-col gap-3 2xl:gap-4"
          onSubmit={handleContinue}
        >
          <div className="flex 2xl:mt-1 justify-center py-4 2xl:py-6">
            <button
              type="button"
              className="font-Inter font-semibold text-[#696969] border-[2px]  border-[#ebebeb] px-5 2xl:px-6 py-3 2xl:py-5 text-[14.5px] 2xl:text-[22px]"
            >
              AUD$
            </button>
            <button
              type="button"
              className="font-Inter font-semibold bg-[#FFB5C0] text-[#272727] px-6 2xl:px-8 py-3 2xl:py-5 text-[14.5px] 2xl:text-[22px]"
            >
              10.00
            </button>
          </div>

          <div>
            <p className="font-Inter text-[16px] 2xl:text-[22px] font-[500] px-10 2xl:px-20 leading-[23px] 2xl:leading-[27px] text-[#7E7E7E]">
              The amount you give won’t be seen by others
            </p>
          </div>

          <div className="mt-5 2xl:mt-10">
            <button
              type="submit"
              className="font-Inter text-[#272727] text-[15px] 2xl:text-[22px] px-10 2xl:px-16 py-3 2xl:py-5 rounded-full bg-[#FFB5C0] font-semibold"
            >
              Continue
            </button>
          </div>
        </form>
      </GuestLayout>
    </div>
  );
};

export default GuestStep3;
