import React, { useRef, useState } from 'react'
import DashboardNav from '../../Components/Navbar/DashboardNav'
import FundsStep1 from './FundsStep1/FundsStep1';
import FundStep2 from './FundStep2/FundStep2';
import KYCStep1 from './KYCStep1/KYCStep1';
import KYCStep2 from './KYCStep2/KYCStep2';
import KYCStep3 from './KYCStep3/KYCStep3';
import KycSubmission from './KycSubmission/KycSubmission';

const WithdrawFunds = () => {

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
        <FundsStep1 onNext={nextStep} defaultValues={formData} />,
        <FundStep2 onNext={nextStep} defaultValues={formData} />,
        <KYCStep1 onNext={nextStep} defaultValues={formData} />,
        <KYCStep2 onNext={nextStep} defaultValues={formData} />,
        <KYCStep3 onNext={nextStep} defaultValues={formData} />,
        <KycSubmission onNext={nextStep} defaultValues={formData} />,
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
            <DashboardNav></DashboardNav>
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

export default WithdrawFunds