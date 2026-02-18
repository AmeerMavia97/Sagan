import React, { useRef, useState } from 'react'
import GuestStep1 from './GuestStep1/GuestStep1';
import GuestStep2 from './GuestStep2/GuestStep2';
import GuestStep3 from './GuestStep3/GuestStep3';
import GuestStep4 from './GuestStep4/GuestStep4';
import GuestStep5 from './GuestStep5/GuestStep5';

const GuestUser = () => {

    const stepRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const nextStep = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => setCurrentStep((prev) => prev - 1);


    const steps = [
        <GuestStep1 onNext={nextStep} defaultValues={formData} />,
        <GuestStep2 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        <GuestStep3 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        <GuestStep4 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        <GuestStep5 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        // <Step2 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        // <Step3 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        // <Step4
        //     onBack={prevStep}
        //     setCurrentStep={setCurrentStep}
        //     onSubmit={handleFinalSubmit}
        //     formData={loading ? "loading..." : formData}
        // />,
    ];


    return (
        <>
            {/* Navbar */}
            <section className='py-8 flex justify-center items-center'>
                <img className='w-[16%] 2xl:w-[19%]' src="/Images/logo.png" alt="" />
            </section>
            <section
                ref={stepRef}
                className={`flex justify-center ${currentStep <= 2 && "py-8 2xl:py-12"} min-h-screen`}
            >
                <div className={`${currentStep <= 5 ? "w-[93%] 2xl:w-[85%]" : "w-full"}`}>
                    {steps[currentStep]}
                </div>
            </section>

        </>
    )
}

export default GuestUser