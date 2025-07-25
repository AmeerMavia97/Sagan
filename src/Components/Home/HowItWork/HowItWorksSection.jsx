import React, { useState, useEffect } from 'react';
import {
  Calendar,
  UserPlus,
  Gift,
  Search,
  BadgeCheck,
  DollarSign,
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
      icon: Calendar,
      title: 'CREATE AN EVENT',
      description: 'Set up a cash gift fund for any occasion.',
    },
    {
      icon: UserPlus,
      title: 'INVITE FAMILY & FRIENDS',
      description: 'Share your event link via WhatsApp, email, or social media.',
    },
    {
      icon: DollarSign,
      title: 'RECEIVE CASH GIFTS',
      description: 'Loved ones contribute securely, and funds are transferred to your account.',
    },
  ];

  const guestSteps = [
    {
      icon: Search,
      title: 'FIND THE EVENT',
      description: 'Get the event link via invite or search.',
    },
    {
      icon: Gift,
      title: 'SEND A GIFT',
      description: 'Contribute easily via card or bank transfer.',
    },
    {
      icon: BadgeCheck,
      title: 'GIFT DELIVERED',
      description: 'Host is notified, and your gift is secure.',
    },
  ];

  const currentSteps = mode === 'host' ? hostSteps : guestSteps;

  return (
    <section className="px-4 py-12 bg-[#fff5f7]">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div
          className="inline-flex p-1 overflow-hidden bg-white border border-gray-200 rounded-full shadow-sm"
          style={{ border: '1px solid #FFB5C0' }}
        >
          <button
            onClick={() => setMode('host')}
            className={`font-space-grotesk px-8 py-3 text-sm font-bold tracking-wide transition-all duration-200 rounded-full ${
              mode === 'host'
                ? 'bg-[#feb5c0] text-gray-800 shadow-sm'
                : 'bg-white text-gray-500 hover:text-gray-700'
            }`}
          >
            HOST
          </button>
          <button
            onClick={() => setMode('guest')}
            className={`font-space-grotesk px-8 py-3 text-sm font-bold tracking-wide transition-all duration-200 rounded-full ${
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
        <h2 className="mb-4 text-3xl font-extrabold tracking-wide text-gray-900 font-right-grotesk">HOW IT WORKS</h2>
        <p className="max-w-md mx-auto text-lg font-medium leading-relaxed text-[#272727] font-space-grotesk">
          Follow these 3 simple steps and start receiving cash 
          for your life's big moment
        </p>
      </div>

      {/* Steps */}
      <div className="grid max-w-4xl gap-6 px-4 mx-auto sm:grid-cols-1 md:grid-cols-3">
        {currentSteps.map((step, index) => (
          <div
            key={`${mode}-${index}`}
            className="flex flex-col items-center p-8 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:bg-rose-200 hover:border-rose-300 hover:-translate-y-2 group"
            style={{ border: '1px solid #FFB5C0' }}
          >
            <div className="flex items-center justify-center w-20 h-20 mb-8">
              <step.icon className="w-16 h-16 text-gray-800 stroke-2 group-hover:text-gray-900 transition-colors duration-300" />
            </div>
            <h3
              className="mb-4 text-[22px] font-[800] leading-tight text-center text-[#272727] font-space-grotesk group-hover:text-gray-900 transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: step.title }}
            />
            <p className="text-sm leading-relaxed text-center text-[#272727] font-space-grotesk group-hover:text-gray-700 transition-colors duration-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Line Separator */}
      {!isMobile && (
        <div className="flex justify-center mt-12">
          <div className="relative w-full max-w-xl px-8">
            <div className="w-full h-1 bg-primary rounded-full" />
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-primary rotate-45 -translate-y-1/2 rounded-[2px]" />
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-primary rotate-45 -translate-y-1/2 rounded-[2px]" />
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorksSection;
