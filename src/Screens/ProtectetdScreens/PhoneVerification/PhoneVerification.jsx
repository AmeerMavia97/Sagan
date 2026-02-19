// PhoneVerification.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PhoneVerification = ({ onClose, onSendCode }) => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    if (onSendCode) onSendCode(`+61${phone}`);
  };

  return (
    <section className="bg-[#ffb5c085] fixed inset-0 z-[10000] flex items-center justify-center">
      <div className="bg-white rounded-[26px] w-[90%] max-w-[420px] flex flex-col items-center gap-6 py-8 px-8 shadow-lg relative">
        {/* your icon */}
        <div className="w-[110px] h-[110px] flex items-center justify-center">
          <img
            src="/Images/events/verified-user.png"
            alt="Verified user"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center px-4">
          <h1 className="font-Inter text-[20px] font-semibold text-[#333333] mb-2">
            Verify Your Phone Number
          </h1>
          <p className="font-Inter text-[13px] text-[#777777] leading-relaxed">
            We’ll only use your number to verify your identity when you want to
            change account details or finalise your collection.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-5 mt-2"
        >
          <div className="w-full border border-[#E2E2E2] rounded-[12px] bg-white flex items-center px-3 py-2.5 shadow-sm">
            <button
              type="button"
              className="flex items-center gap-2 pr-3 border-r border-[#EAEAEA]"
            >
              <img
                src="/Images/events/Austraillia.png"
                alt="AU"
                className="w-7 h-5 rounded-[3px] object-cover"
              />
              <ChevronDown className="w-4 h-4 text-[#FF94B0]" />
            </button>
            <span className="font-Inter text-[14px] text-[#333333] font-semibold ml-3 mr-2">
              +61
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-transparent outline-none font-Inter text-[14px] text-[#333333] placeholder:text-[#CBCBCB]"
              placeholder="Enter mobile number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFB5C0] text-white font-Inter font-semibold text-[15px] rounded-full py-3 mt-1 hover:opacity-95 transition"
          >
            Send Code
          </button>
        </form>

        <p className="font-Inter text-[12px] text-[#B7B7B7] mt-1">
          Don’t have an Australian mobile number?
        </p>
      </div>
    </section>
  );
};

export default PhoneVerification;