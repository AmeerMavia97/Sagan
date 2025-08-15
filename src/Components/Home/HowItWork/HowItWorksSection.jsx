import React, { useState, useEffect } from 'react';
import {
  Calendar,
  UserPlus,
  Gift,
  Search,
  BadgeCheck,
  DollarSign,
  CalendarPlus2,
} from 'lucide-react';

const HowItWorksSection = () => {
  const [mode, setMode] = useState('host');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hostSteps = [
    {
      icon: "host1",
      title: 'CREATE AN EVENT',
      description: 'Set up a cash gift fund for any occasion.',
    },
    {
      icon: "host2",
      title: 'INVITE FAMILY & FRIENDS',
      description: 'Share your event link via WhatsApp, email, or social media.',
    },
    {
      icon: "host3",
      title: 'RECEIVE CASH GIFTS',
      description: 'Loved ones contribute securely, and funds are transferred to your account.',
    },
  ];

  const guestSteps = [
    {
      icon: "guest1",
      title: 'MAKE IT PERSONAL',
      description: 'Surprise someone special – just enter their name and contact info. ',
    },
    {
      icon: "guest2",
      title: 'SEND WITH LOVE',
      description: 'Add a heartfelt message and securely send your gift payment in seconds. ',
    },
    {
     icon: "guest3",
      title: 'STAY CONNECTION',
      description: 'They’ll be notified to claim their gift and join SaganOnline – making gifting effortless and meaningful every time. ',
    },
  ];

  const currentSteps = mode === 'host' ? hostSteps : guestSteps;

  return (
    <section className="px-4 py-12 min-[1666px]:!pt-24 min-[1666px]:!pb-14 bg-[#fff5f7]">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div
          className="inline-flex p-1 overflow-hidden bg-white border border-gray-200 rounded-full shadow-sm"
          style={{ border: '1px solid #FFB5C0' }}
        >
          <button
            onClick={() => setMode('host')}
            className={`font-Inter px-10  py-2.5 text-[12px] sm:px-8 sm:py-3 min-[1666px]:!px-16 text-sm min-[1666px]:!py-3.5 min-[1666px]:!text-[20px] font-bold tracking-wide transition-all duration-200 rounded-full ${
              mode === 'host'
                ? 'bg-[#feb5c0] text-gray-800 shadow-sm'
                : 'bg-white text-gray-500 hover:text-gray-700'
            }`}
          >
            HOST
          </button>
          <button
            onClick={() => setMode('guest')}
            className={`font-Inter px-10  py-2.5 text-[12px] sm:px-8 sm:py-3 min-[1666px]:!px-16 text-sm min-[1666px]:!py-3.5 min-[1666px]:!text-[20px] font-bold tracking-wide transition-all duration-200 rounded-full ${
              mode === 'guest'
                ? 'bg-[#feb5c0] text-gray-800 shadow-sm'
                : 'bg-white text-gray-500 hover:text-gray-700'
            }`}
          >
            GUEST
          </button>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-[37px] sm:text-3xl lg:text-4xl min-[1666px]:!text-[50px] font-extrabold tracking-wide text-gray-900 font-right-grotesk">HOW IT WORKS</h2>
        <p className="max-w-sm  mx-auto px-5 text-[16px] sm:text-lg  text-[#272727] font-Inter  min-[1666px]:!text-[20px] min-[1666px]:!max-w-[28%] font-[600]">
          {mode === "host" ? "Follow these 3 simple steps and start receiving cash for your lifes big moment" : "Follow these 3 simple steps and start sending cash for life's big moment."}
        </p>
      </div>


      {/* Steps */}
      <div className="grid  sm:max-w-3xl lg:max-w-5xl xl:max-w-5xl min-[1666px]:!max-w-[75%]  min-[1760px]:!max-w-[65%] gap-6 px-0 sm:px-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {currentSteps.map((step, index) => (
          <div
            key={`${mode}-${index}`}
            className="flex flex-col items-center justify-center w-[280px] sm:w-[260px] md:w-[300px] lg:w-full sm:h-[65vh] lg:h-[75vh] xl:h-[68vh] min-[1380px]:!h-[60vh] p-8 sm:p-7  min-[1666px]:px-14 min-[1666px]:!p-14 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:bg-rose-200 hover:border-rose-300 hover:-translate-y-2 group min-[1666px]:!h-[55vh]"
            style={{ border: '1px solid #FFB5C0' }}
          >
            <div className="flex items-center justify-center w-20 h-20 mb-8  min-[1666px]:w-28">
              {/* <step.icon className="w-16 h-16  min-[1666px]:!w-32  min-[1666px]:!h-32 text-gray-800 stroke-2 group-hover:text-gray-900 transition-colors duration-300" /> */}
              <img  src={`Images/home/${step.icon}.png`} alt="" />
            </div>

            
            <h3
              className="mb-4 text-[20px] w-[53%] md:w-[80%] font-[800] leading-tight text-center text-[#272727] font-right-grotesk group-hover:text-gray-900 transition-colors duration-300 lg:text-[28px] min-[1666px]:!text-[37px] min-[1666px]:!leading-[40px] min-[1666px]:!mt-3 !max-w-[75%] min-[1666px]:!max-w-[75%]  "
              dangerouslySetInnerHTML={{ __html: step.title }}
            />
            <p className=" text-[15px] w-[88%] min-[1666px]:!w-[100%] min-[1666px]:!mt-2 leading-relaxed text-center text-[#272727] font-Inter  font-[500] group-hover:text-gray-700 transition-colors duration-300 min-[1666px]:!text-[20px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Line Separator */}
      {!isMobile && (
        <div className="flex justify-center mt-12">
          <div className="relative w-full max-w-xl px-2">
            <div className="w-full h-1 bg-primary rounded-full" />
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-primary rotate-45 -translate-y-1/2 rounded-[1px]" />
            <div className="absolute top-1/2 right-0 w-4 h-4 bg-primary rotate-45 -translate-y-1/2 rounded-[1px]" />
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorksSection;
