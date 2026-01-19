import React from 'react';
import StepLayout from '../../../Components/EventCreation/Stepper/Stepper';
import { useForm } from 'react-hook-form';
import { ArrowDown } from 'lucide-react';

const Optionss = [
    "Please Select",
    "Sign only",
    "Sign + chip in"
];

const occasion = [
    "Please Select",
    "Wedding Funds",
    "Shagun",
    "Hongbao",
    "Birthday Party",
    "Farewell"
];

const Step1 = ({ onNext, defaultValues }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    const Step1Val = (data) => {
        console.log(data);
        onNext(data); 
    };

    return (
        <StepLayout CurrentStep={0}>
            <div className='flex flex-col justify-center items-center pt-10 pb-16 min-[1850px]:pb-0 min-[1850px]:pt-10 gap-9 2xl:gap-12'>
                <h1 className='font-Inter text-[32px] 2xl:text-[38px] font-[500] text-center'>I want to invite people to</h1>

                <form onSubmit={handleSubmit(Step1Val)} className='flex flex-col gap-8 2xl:gap-11 justify-center' noValidate>
                    {/* First Select */}
                    <div className='relative flex flex-col justify-center'>
                        <select
                            {...register('inviteType', {
                                required: 'Please select an option',
                                validate: value => value !== 'Please Select' || 'Please select a valid option'
                            })}
                            className={`bg-white appearance-none text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] border-[#000] focus:outline-none px-5 py-3 2xl:py-4 w-[350px] 2xl:w-[400px] cursor-pointer ${errors.inviteType ? 'border-red-500 ' : ''
                                }`}
                        >
                            {Optionss.map((opt, index) => (
                                <option className='' key={index} value={opt}>
                                   {opt}
                                </option>
                            ))}
                        </select>
                        <ArrowDown className="pointer-events-none absolute top-3 right-3 size-6 2xl:size-8 text-[#FFB5C0]" strokeWidth={3} />
                        {errors.inviteType && (
                            <p className="text-red-500 text-[13px] mt-2 -mb-2 font-Inter">{errors.inviteType.message}</p>
                        )}
                    </div>

                    {/* Second Select */}
                    <div className='relative flex flex-col gap-2'>
                        <label className='font-Inter text-black text-[16px] 2xl:text-[20px] font-[500]'>What is the occasion?</label>
                        <select
                            {...register('occasion', {
                                required: 'Please select an occasion',
                                validate: value => value !== 'Please Select' || 'Please select a valid occasion'
                            })}

                            className={`bg-white appearance-none text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] border-[#000] focus:outline-none px-5 py-3 2xl:py-4 w-[350px] 2xl:w-[400px] cursor-pointer ${errors.occasion ? 'border-red-500' : ''
                                }`}
                        >
                            {occasion.map((opt, index) => (
                                <option key={index} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                        <ArrowDown className="pointer-events-none absolute top-11 2xl:top-[50px] right-3 size-6 2xl:size-8 text-[#FFB5C0]" strokeWidth={3} />
                        {errors.occasion && (
                            <p className="text-red-500 text-[13px] mt-0 -mb-2 font-Inter">{errors.occasion.message}</p>
                        )}
                    </div>

                    <div>
                        <button type="submit" className='font-Inter text-[16px] 2xl:text-[20px] bg-[#272727] py-3 2xl:py-3.5 rounded-full text-white  font-semibold w-full cursor-pointer hover-btn hover-btn-black'>
                            <span>Next</span>
                        </button>
                    </div>
                </form>
            </div>
        </StepLayout>
    );
};

export default Step1;
