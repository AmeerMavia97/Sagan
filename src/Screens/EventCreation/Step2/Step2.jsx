import React, { useState } from 'react';
import StepLayout from '../../../Components/EventCreation/Stepper/Stepper';
import { Controller, useForm } from 'react-hook-form';
import { ArrowDown, CalendarDays } from 'lucide-react';
import { Switch } from '@headlessui/react';

const Step2 = ({ onNext, defaultValues, onBack }) => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    const selectedOption = watch('amountType');
    const collectionName = watch('collectionName');
    const [date, setDate] = useState('');

    const Step2Val = (data) => {
        console.log(data);
        onNext(data);
    };

    return (
        <StepLayout CurrentStep={1} onBack={onBack}>
            <div className='flex flex-col justify-center items-center pt-10 pb-16 min-[1850px]:pb-14 min-[1850px]:pt-10 gap-9 2xl:gap-6'>
                <h1 className='font-Inter text-[31px] 2xl:text-[38px] font-[500] text-center'>
                    The details for your group
                </h1>

                <form onSubmit={handleSubmit(Step2Val)} className='flex flex-col gap-8 2xl:gap-11 justify-center items-center' noValidate>

                    {/* Name your collection/card */}
                    <div>
                        <label className='block mb-4 text-center font-Inter text-[16.5px] 2xl:text-[20px] font-[500]'>Name your collection/card</label>
                        <input
                            type="text"
                            placeholder='Eg. Nic’s Farewell'
                            {...register('collectionName', { required: 'Card name is required' })}
                            className={`bg-white text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] px-5 py-3 2xl:py-4.5 w-[350px] 2xl:w-[420px] cursor-pointer ${errors.collectionName ? 'border-red-500' : 'border-[1.5px] border-[#000]'
                                }`}
                        />
                        {errors.collectionName && (
                            <p className="text-red-500 text-[13px] mt-2 -mb-2 font-Inter">{errors.collectionName.message}</p>
                        )}
                        <h1 className='text-[#FFB5C0] font-Inter italic mt-2 text-[13.5px] 2xl:text-[16px]'>
                            app.saganonline.com/{collectionName || ''}
                        </h1>
                    </div>

                    {/* Message to group */}
                    <div>
                        <label className='block mb-4 text-center font-Inter text-[16.5px] 2xl:text-[20px] font-[500]'>Message to your group</label>
                        <textarea
                            rows={7}
                            placeholder='Tell the group what you’re planning and what you want them to do'
                            {...register('message', { required: 'Message is required' })}
                            className={`bg-white text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] px-5 py-3 2xl:py-4.5 w-[350px] 2xl:w-[420px] cursor-pointer ${errors.message ? 'border-red-500' : 'border-[1.5px] border-[#000]'
                                }`}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-[13px] mt-2 -mb-2 font-Inter">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Date Picker */}
                    <div className="relative w-[350px] 2xl:w-[420px]">
                        <label className='block mb-4 text-center font-Inter text-[16.5px] 2xl:text-[20px] font-[500]'>End date</label>
                        <input
                            type="date"
                            {...register('dateField', { required: 'Date is required' })}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className={`peer bg-white text-[#272727] font-Inter text-[14px] 2xl:text-[16px] rounded-[15px] border-[1.5px] focus:outline-none px-5 py-3 2xl:py-4.5 w-full cursor-pointer appearance-none ${errors.dateField ? 'border-red-500' : 'border-black'
                                }`}
                        />
                        <CalendarDays className={`absolute right-5  bg-white -translate-y-1/2 pointer-events-none z-3 ${errors.dateField ? "top-[60%] 2xl:top-[62%]" : "top-[75%] 2xl:top-[70%]"}`} />
                        {errors.dateField && (
                            <p className="text-red-500 text-[13px] mt-2 -mb-2 font-Inter">{errors.dateField.message}</p>
                        )}
                    </div>

                    {/* Tip Text */}
                    <div className='flex text-center gap-1 justify-center items-start '>
                        <img src="/Images/events/clapping.png" alt="" />
                        <p className='max-w-sm 2xl:max-w-[42%] text-[13px] 2xl:text-[15px] font-Inter text-[#FFB5C0]'>
                            TIP: choose a date the day before you're giving the gift. We'll need 3 hours to review and approve your collection before you spend it.
                        </p>
                    </div>

                    {/* Contribution Amount Type */}
                    <div>
                        <label className='block text-center font-Inter text-[18px] 2xl:text-[20px] font-[500] max-w-sm px-10'>
                            How much do you want each person to contribute?
                        </label>
                    </div>

                    <div className="flex flex-col gap-6 w-[350px] 2xl:w-[420px]">
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-3 bg-white text-[#272727] font-Inter text-[14px] 2xl:text-[16px] rounded-[15px] border-[1.5px] px-5 py-3 2xl:py-4.5 w-full cursor-pointer">
                                <input
                                    type="radio"
                                    value="any"
                                    {...register('amountType', { required: 'Please select an option' })}
                                    className="text-[#FFB5C0] w-4 h-4"
                                />
                                <span className="font-[500] text-[14px] 2xl:text-[16px]">Any amount</span>
                            </label>

                            <label className="flex items-center gap-3 bg-white text-[#272727] font-Inter text-[14px] 2xl:text-[16px] rounded-[15px] border-[1.5px] px-5 py-3 2xl:py-4.5 w-full cursor-pointer">
                                <input
                                    type="radio"
                                    value="exact"
                                    {...register('amountType', { required: 'Please select an option' })}
                                    className="text-[#FFB5C0] w-4 h-4"
                                />
                                <span className="font-[500] text-[14px] 2xl:text-[16px]">An exact amount</span>
                            </label>

                            {errors.amountType && (
                                <p className="text-red-500 text-[13px] mt-2 -mb-2 font-Inter">{errors.amountType.message}</p>
                            )}
                        </div>

                        {/* Exact Amount Conditional Input */}
                        {selectedOption === 'exact' && (
                            <div className="flex flex-col gap-1">
                                <label className='block mb-2 text-center font-Inter text-[16px] 2xl:text-[20px] font-[500]'>Enter exact amount</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    {...register('exactAmount', {
                                        required: selectedOption === 'exact' ? 'Amount is required' : false,
                                        validate: value =>
                                            selectedOption === 'exact' && value <= 0
                                                ? 'Amount must be greater than 0'
                                                : true,
                                    })}
                                    placeholder="Enter amount"
                                    className={`bg-white text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] px-5 py-3 2xl:py-4.5 w-[350px] 2xl:w-[420px] cursor-pointer ${errors.exactAmount ? 'border-red-500' : 'border-[1.5px] border-[#000]'
                                        }`}
                                />
                                {errors.exactAmount && (
                                    <p className="text-red-500 text-sm mt-1">{errors.exactAmount.message}</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Info Banner */}
                    <div className='bg-[#ffd7dd] w-[86%] 2xl:w-[44%] px-5 py-5 rounded-2xl flex items-center justify-between gap-8 relative'>
                        <div>
                            <img className='inline mr-2' src="/Images/events/MegaPhone.png" alt="" />
                            <h4 className='font-Inter inline text-[14px] 2xl:text-[16px] font-semibold'>New simpler Saganonline fees:</h4>
                        </div>
                        <ArrowDown className="pointer-events-none size-6 2xl:size-8" strokeWidth={3} />
                    </div>

                    {/* Switch */}
                    <div className="flex items-center w-[350px] gap-2 2xl:w-[420px]">
                        <Controller
                            name="peopleSign"
                            control={control}
                            defaultValue={false}
                            render={({ field }) => (
                                <div className="flex items-center w-[350px] gap-2 2xl:w-[420px]">
                                    <Switch
                                        checked={field.value}
                                        onChange={field.onChange}
                                        className={`group relative flex h-8 w-14 2xl:h-9 2xl:w-15 cursor-pointer rounded-full ${field.value ? 'bg-[#000]' : '!bg-[#FFB5C0]'
                                            } pt-[5.5px] p-1 transition ease-in-out`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`inline-block size-5.5 2xl:size-6.5 transform rounded-full bg-white shadow-lg transition duration-200 ${field.value ? 'translate-x-6' : 'translate-x-0'
                                                }`}
                                        />
                                    </Switch>
                                    <label className="font-Inter font-semibold text-[#272727] text-[14px] leading-[18px] 2xl:text-[16px]">
                                        Let people sign the card without contributing
                                    </label>
                                </div>
                            )}
                        />

                    </div>

                    {/* Submit Button */}
                    <div className='w-[85%] 2xl:w-[45%]'>
                        <button type="submit" className='font-Inter text-[16px] 2xl:text-[20px] bg-[#272727] py-3 2xl:py-3.5 rounded-full text-white font-semibold w-full cursor-pointer hover-btn hover-btn-black'>
                            <span>Next</span>
                        </button>
                    </div>
                </form>
            </div>
        </StepLayout>
    );
};

export default Step2;
