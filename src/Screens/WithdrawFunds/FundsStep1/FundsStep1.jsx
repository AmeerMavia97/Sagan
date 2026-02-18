import React from 'react';

const FundsStep1 = ({ onNext }) => {
  return (
    <>
      {/* Top banner */}
      <section className="flex flex-col justify-center items-center py-6 md:py-8">
        <div className="bg-[#FFE2E2] px-8 md:px-10 rounded-[10px] w-full max-w-5xl py-6 md:py-8">
          <h2 className="font-Inter font-bold mt-1 text-[18px] md:text-[20px] 2xl:text-[22px]">
            Welcome To Sagan Online
          </h2>
          <h1 className="font-Inter font-[300] text-[32px] md:text-[38px] 2xl:text-[42px]">
            March 14th, 2025
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col justify-center items-center py-6 md:py-8">
        <div className="w-full max-w-5xl">
          <h1 className="font-Inter font-bold text-[24px] md:text-[28px] 2xl:text-[30px]">
            Withdraw Funds
          </h1>
          <p className="font-Inter font-[500] text-[#6D6D6D] text-[13px] md:text-[14px] 2xl:text-[15px] leading-[19px] md:leading-[21px] 2xl:leading-[23px] mt-2">
            Please enter your Australian account details. Due to government
            regulations we are only allowed to transfer the funds to the
            organiser of the collection not to a third party. Allow 2 business
            days for funds to clear.
          </p>
        </div>

        <div className="w-full max-w-5xl bg-[#F9F9F9] rounded-[15px] flex justify-between px-8 md:px-10 lg:px-12 mt-7 md:mt-9 pt-8 md:pt-9 pb-10 md:pb-12 gap-10 md:gap-12">
          {/* Left: calculator */}
          <div className="w-1/2 flex flex-col gap-6">
            <h2 className="font-Inter text-[18px] md:text-[20px] 2xl:text-[22px] text-[#272727] font-[600]">
              Calculate the amount you’ll receive
            </h2>

            <form className="flex flex-col gap-6 w-[95%]">
              <div className="flex items-center justify-between">
                <label className="font-Inter font-bold text-[14px] md:text-[15px] 2xl:text-[16px] text-[#272727]">
                  Enter amount
                </label>
                <input
                  type="number"
                  placeholder="XXX"
                  className="bg-white mt-2 border-[#000000] border px-3 md:px-4 py-1.5 md:py-2.5 rounded-[6px] text-[13px] md:text-[14px] 2xl:text-[15px] w-[30%] text-end"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-Inter font-bold text-[14px] md:text-[15px] 2xl:text-[16px] text-[#272727]">
                  Transaction fee
                </span>
                <span className="font-Inter font-bold text-[14px] md:text-[15px] 2xl:text-[16px] text-[#272727]">
                  - $0.42
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-Inter font-bold text-[14px] md:text-[15px] 2xl:text-[16px] text-[#272727]">
                  You’ll receive
                </span>
                <span className="font-Inter font-bold text-[14px] md:text-[15px] 2xl:text-[16px] text-[#272727]">
                  $20.58
                </span>
              </div>
            </form>
          </div>

          {/* Right: bank details */}
          <div className="w-1/2">
            <h2 className="font-Inter text-[18px] md:text-[20px] 2xl:text-[22px] text-[#272727] font-[600]">
              Organiser bank details
            </h2>

            <form className="flex flex-col gap-5 md:gap-6 mt-5 md:mt-6">
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                <span>
                  <label className="font-Inter text-[14px] md:text-[15px] 2xl:text-[16px] font-bold text-[#272727]">
                    BSB code
                  </label>
                  <input
                    type="text"
                    placeholder="XXX"
                    className="bg-white mt-2 border-[#000000] border py-2 px-3 md:px-4 rounded-[7px] text-[13px] md:text-[14px] 2xl:text-[15px] w-full"
                  />
                </span>
                <span>
                  <label className="font-Inter text-[14px] md:text-[15px] 2xl:text-[16px] font-bold text-[#272727]">
                    Account number
                  </label>
                  <input
                    type="text"
                    placeholder="XXX"
                    className="bg-white mt-2 border-[#000000] border py-2 px-3 md:px-4 rounded-[7px] text-[13px] md:text-[14px] 2xl:text-[15px] w-full"
                  />
                </span>
              </div>

              <div>
                <label className="font-Inter text-[14px] md:text-[15px] 2xl:text-[16px] font-bold text-[#272727]">
                  Account name
                </label>
                <input
                  type="text"
                  placeholder="Account holder name"
                  className="bg-white mt-2 border-[#000000] border py-2 px-3 md:px-4 rounded-[7px] text-[13px] md:text-[14px] 2xl:text-[15px] w-full"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={onNext}
                  className="bg-[#FFB5C0] font-semibold text-[14px] md:text-[15px] 2xl:text-[16px] rounded-full w-full py-2.5 md:py-3 font-Inter"
                >
                  Withdraw
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FundsStep1;
