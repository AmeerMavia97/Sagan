import React from "react";

const Payment = () => {
  return (
    <>
      <section className="px-4 sm:px-6 pt-7 pb-16 sm:py-16 bg-white sm:px-12 xl:px-20">
        <div className="flex flex-col-reverse items-center justify-between gap-12 mx-auto max-w-7xl lg:flex-row">
          <div className="max-w-xl sm:ml-6 text-center lg:text-left">
            <h2 className="mb-4 text-[32px] sm:text-3xl font-bold text-gray-900 sm:text-4xl font-right-grotesk min-[1666px]:!text-[50px]">
              SECURE PAYMENTS
            </h2>
            <p className="mb-6 text-[16px] px-5 lg:px-0 text-gray-800 font-Inter  min-[1666px]:text-[20px] min-[1666px]:w-[90%] font-[600]">
              We ensure the most stringent level of payment processing across a
              wide range of providers and we never sell your data.
            </p>

            <div className=" flex flex-wrap items-center justify-center gap-8 sm:gap-4 lg:justify-start min-[1666px]:gap-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                className="h-4.5 sm:h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-4.5 sm:h-6"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp22yHLLHwZJMt51sDJGVxyU8cch4Ce0smGg&s"
                alt="Amex"
                className="h-4.5 sm:h-6"
              />
              <img
                src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.width-1300.png"
                alt="Google Pay"
                className="h-6 sm:h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Pay"
                className="h-4.5 sm:h-6"
              />
            </div>
          </div>

          <div className="flex justify-center w-full sm:mr-6 lg:justify-end">
            <img
              src="/Images/home/payment.jpg"
              alt="Payment Cards"
              className="w-[380px] sm:w-[400px] lg:w-[460px] xl:w-[550px] rounded-xl min-[1666px]:!w-[700px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
