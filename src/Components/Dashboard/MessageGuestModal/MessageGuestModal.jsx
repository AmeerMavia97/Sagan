import React, { useState } from 'react';
import { X } from 'lucide-react';

const MessageGuestModal = ({ onClick }) => {
  const [mode, setMode] = useState('invite'); // 'invite' | 'chipin'

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-lg bg-[#79797946] flex items-center justify-center">
      <div className="bg-[#FFD5DB] relative w-[60%] max-w-[780px] rounded-[20px] shadow-lg px-10 pt-10 pb-9 2xl:px-14 2xl:pt-12 2xl:pb-11">
        {/* Close icon */}
        <button
          type="button"
          onClick={onClick}
          className="absolute top-5 right-5 text-gray-700"
        >
          <X className="size-5 2xl:size-7" strokeWidth={3} />
        </button>

        {/* Top description */}
        <p className="font-Inter text-[14px] 2xl:text-[16px] text-center leading-relaxed mb-6 2xl:mb-8 max-w-[600px] mx-auto">
          This is what your group will see when they receive your invitation. If you
          want to send an update to the group, click View Group.
        </p>

        {/* Title */}
        <h2 className="font-Inter text-[22px] 2xl:text-[26px] font-semibold text-center mb-8">
          Edit the message to your group
        </h2>

        {/* Toggle + inbox (no overlap) */}
        <div className="mb-10">
          <div className="flex flex-col items-center gap-4">
            {/* Pill toggle */}
            <div className="bg-[#FFD5DB] rounded-full p-1 flex  mb-5 gap-4">
              <button
                type="button"
                onClick={() => setMode('invite')}
                className={`px-8 2xl:px-10 py-2 2xl:py-2.5 rounded-full font-Inter text-[14px] 2xl:text-[16px] font-semibold transition
                  ${
                    mode === 'invite'
                      ? 'bg-[#FF9FB5] text-white'
                      : 'bg-transparent text-[#333]'
                  }`}
              >
                Invite Group
              </button>
              <button
                type="button"
                onClick={() => setMode('chipin')}
                className={`px-8 2xl:px-10 py-2 2xl:py-2.5 rounded-full font-Inter text-[14px] 2xl:text-[16px] font-semibold border-[2px] transition
                  ${
                    mode === 'chipin'
                      ? 'border-[#FF9FB5] text-[#333] bg-white'
                      : 'border-[#FF9FB5] text-[#333] bg-transparent'
                  }`}
              >
                Sign &amp; Chip In
              </button>
            </div>

            {/* White message area */}
            <div className="bg-white rounded-[18px] min-h-[200px] w-full px-6 py-6 shadow-sm">
              <textarea
                placeholder="Enter your message"
                className="w-full h-[140px] resize-none border-none outline-none font-Inter text-[14px] 2xl:text-[16px] text-[#333] placeholder:text-[#C0C0C0]"
              />
            </div>
          </div>
        </div>

        {/* Bottom buttons – spaced from inbox */}
        <div className="flex justify-center items-center mt-8 gap-8">
  <button
    type="button"
    className="font-Inter text-[14px] 2xl:text-[16px] font-semibold bg-[#FFB5C0] text-black
               rounded-full px-10 2xl:px-12 py-2.5 2xl:py-3 shadow-md"
  >
    Save
  </button>

  <button
    type="button"
    className="font-Inter text-[14px] 2xl:text-[16px] font-semibold bg-[#FFB5C0] text-black
               rounded-full px-10 2xl:px-12 py-2.5 2xl:py-3 shadow-md"
  >
    View Group
  </button>

  <button
    type="button"
    onClick={onClick}
    className="font-Inter text-[14px] 2xl:text-[16px] font-semibold bg-[#FFB5C0] text-black
               rounded-full px-10 2xl:px-12 py-2.5 2xl:py-3 shadow-md"
  >
    Edit/Close
  </button>
</div>
      </div>
    </div>
  );
};

export default MessageGuestModal;