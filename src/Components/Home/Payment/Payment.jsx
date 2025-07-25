import React from "react";

const Payment = () => {
  return (
    <>
      <section className="px-6 py-16 bg-white sm:px-12 lg:px-24">
        <div className="flex flex-col-reverse items-center justify-between gap-12 mx-auto max-w-7xl lg:flex-row">
          <div className="max-w-xl sm:ml-6 text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl font-right-grotesk">
              SECURE PAYMENTS
            </h2>
            <p className="mb-6 text-gray-600 font-space-grotesk">
              We ensure the most stringent level of payment processing across a
              wide range of providers and we never sell your data.
            </p>

            <div className=" flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp22yHLLHwZJMt51sDJGVxyU8cch4Ce0smGg&s"
                alt="Amex"
                className="h-6"
              />
              <img
                src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.width-1300.png"
                alt="Google Pay"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Pay"
                className="h-6"
              />
            </div>
          </div>

          <div className="flex justify-center w-full sm:mr-6 lg:justify-end">
            <img
              src="/Images/home/payment.jpg"
              alt="Payment Cards"
              className="w-[320px] sm:w-[400px] lg:w-[460px] rounded-xl "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
