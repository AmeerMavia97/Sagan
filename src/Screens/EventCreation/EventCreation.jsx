import React, { useRef, useState } from 'react'
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';

const EventCreation = () => {

    const stepRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const nextStep = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const steps = [
        <Step1 onNext={nextStep} defaultValues={formData} />,
        <Step2 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        <Step3 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
        // <Step3
        // onBack={prevStep}
        // onSubmit={handleFinalSubmit}
        // formData={loading ? "loading..." : formData}
        // />,
    ];
    return (
        <>
            <section
                ref={stepRef}
                className="flex justify-center py-8 2xl:py-12 min-h-screen"
            >
                <div className='w-[90%] 2xl:w-[85%]'>{steps[currentStep]}</div>
            </section>

        </>
    )
}

export default EventCreation