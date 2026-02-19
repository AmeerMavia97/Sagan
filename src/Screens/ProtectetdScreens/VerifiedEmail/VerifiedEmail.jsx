// VerifiedEmail.jsx
import React, { useState } from 'react';
import PhoneVerification from '../PhoneVerification/PhoneVerification'; // check this path

const VerifiedEmail = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email code submitted');
    setShowPhonePopup(true);
  };

  // Once email is verified, render ONLY the phone verification popup
  if (showPhonePopup) {
    return (
      <PhoneVerification
        onClose={() => setShowPhonePopup(false)}
        onSendCode={(phone) => {
          console.log('Send SMS to:', phone);
          // call your API to send the SMS verification code here
        }}
      />
    );
  }

  // Email verification popup
  return (
    <section className="bg-[#ffb5c085] fixed inset-0 z-[9999] flex justify-center items-center">
      <div className="bg-white rounded-2xl w-[31.5%] 2xl:w-[25%] flex flex-col justify-center items-center gap-7 py-10 min-[1850px]:!pt-14 min-[1850px]:!pb-10 px-11 min-[1850px]:!px-16 no-scrollbar">
        <div>
          <img className="w-[80%] 2xl:w-[100%]" src="/Images/Verified/Message.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="font-Inter text-[19px] 2xl:text-[22px] text-black font-semibold">
            Let’s verify your email address
          </h1>
          <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#7B7B7B]">
            We’ve sent a verification code to example@gmail.com. Please enter the code in the box
            and click submit
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 mt-3">
            <input
              type="text"
              className="bg-white border border-[#00000087] py-2.5 2xl:py-4 rounded-lg"
            />
            <button
              type="submit"
              className="font-Inter text-[15px] bg-[#FFB5C0] py-2.5 2xl:py-3 text-white rounded-full w-full"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex mt-5">
          <h1 className="font-Inter text-[#5B5B5B] font-semibold text-[12.5px] 2xl:text-[13px] border-r-[1px] border-[#5B5B5B] pr-10">
            Resend code
          </h1>
          <h1 className="font-Inter text-[#5B5B5B] font-semibold text-[12.5px] 2xl:text-[13px] pl-10">
            Edit email address
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VerifiedEmail;