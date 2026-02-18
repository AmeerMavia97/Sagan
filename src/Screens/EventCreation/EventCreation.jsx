// EventCreation.jsx
import React, { useRef, useState } from 'react';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Register from '../Register/Register';

const EventCreation = () => {
  const stepRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const nextStep = (data = {}) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleFinalSubmit = async (finalData) => {
    // merge any final data from Step4 just in case
    if (finalData) {
      setFormData((prev) => ({ ...prev, ...finalData }));
    }

    const token = localStorage.getItem('token');
    console.log('[handleFinalSubmit] token:', token);

    if (token) {
      console.log('🔐 User is logged in, form data:', formData);
      // TODO: call your API here
    } else {
      console.log('⚠️ User not logged in, showing register popup...');
      setShowRegister(true);
    }
  };

  const handleRegisterSuccess = (token) => {
    // for now you can just store any dummy token
    localStorage.setItem('token', token || 'demo-token');
    setShowRegister(false);
    console.log('✅ Registered. Now submitting form...');
    handleFinalSubmit(); // now submit after registration
  };

  const steps = [
    <Step1 key={0} onNext={nextStep} defaultValues={formData} />,
    <Step2 key={1} onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
    <Step3 key={2} onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
    <Step4
      key={3}
      onBack={prevStep}
      setCurrentStep={setCurrentStep}
      onSubmit={handleFinalSubmit}
      formData={loading ? 'loading...' : formData}
    />,
  ];

  return (
    <>
      <section
        ref={stepRef}
        className={`flex justify-center ${currentStep <= 2 && 'py-8 2xl:py-12'} min-h-screen`}
      >
        <div className={`${currentStep <= 2 ? 'w-[90%] 2xl:w-[85%]' : 'w-full'}`}>
          {steps[currentStep]}
        </div>
      </section>

      {showRegister && (
        <Register onSuccess={handleRegisterSuccess} />
      )}
    </>
  );
};

export default EventCreation;