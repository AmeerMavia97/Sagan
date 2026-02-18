import { X } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form';

const EditDateModal = ({ onClick }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const selectedOption = watch('amountType');

    return (
        <>
            <div className="fixed inset-0 z-50 backdrop-blur-lg bg-[#79797946] flex items-center justify-center ">
                <div className="bg-[#ffe2e2] relative w-[40%] 2xl:w-[36%] rounded-[15px]">

                    <div className='flex justify-between bg-[#FFB5C0] py-4 px-7 2xl:py-5 2xl:px-12  rounded-t-[15px]'>
                        <div className='flex items-center gap-2 2xl:gap-5 justify-center'>
                            <img className='w-5 2xl:w-8' src="/Images/DashBoard/CalendarIcon.png" alt="" />
                            <h1 className='font-Inter font-[700] text-[16px] 2xl:text-[28px]'>Change Date</h1>
                        </div>
                        {/* Close Button */}
                        <button
                            className=" text-5xl font-bold"
                            onClick={onClick}
                        >
                            <X strokeWidth={3} className='size-5 cursor-pointer 2xl:size-7.5 font-bold  top-4 absolute 2xl:top-7 right-5' />
                        </button>
                    </div>

                    <div className=''>
                        <div className='flex flex-col gap-7 px-7 2xl:px-10 py-10'>
                            <h1 className='font-Inter text-[19px] 2xl:text-[27px] font-semibold text-[#272727]'>When should your collection/card end?</h1>
                            <div>
                                <div className="flex flex-col 2xl:gap-10 ">
                                    <div className="flex flex-col gap-6 2xl:gap-8">

                                        <div className='rounded-[15px] border-[2px] px-4 2xl:px-7 py-3.5 2xl:py-5 flex items-center gap-5 flex-col'>
                                            <label className="flex items-center gap-3 text-[#272727] font-Inter text-[14px] 2xl:text-[16px]   w-full cursor-pointer">
                                                <input
                                                    type="radio"
                                                    value="exact"
                                                    {...register('amountType', { required: 'Please select an option' })}
                                                    className="text-[#FFB5C0] w-4 h-4 2xl:w-5 2xl:h-5"
                                                />
                                                <span className=" text-[14px] 2xl:text-[23px] font-semibold">Update close date</span>
                                            </label>
                                            {selectedOption === 'exact' && (
                                                <div className="flex flex-col gap-1">
                                                    <input
                                                        type="date"
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
                                                        className={`bg-white  text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[18px] rounded-[9px] px-5 py-3 2xl:py-5 w-[350px] 2xl:w-[580px] cursor-pointer ${errors.exactAmount ? 'border-red-500 border' : ''
                                                            }`}
                                                    />
                                                    {errors.exactAmount && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.exactAmount.message}</p>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <label className="flex items-center gap-3 text-[#272727] font-Inter text-[14px] 2xl:text-[16px] rounded-[15px] border-[2px]  px-4 2xl:px-8 py-3.5 2xl:py-5w-full cursor-pointer">
                                            <input
                                                type="radio"
                                                value="any"
                                                {...register('amountType', { required: 'Please select an option' })}
                                                className="text-[#FFB5C0] w-4 h-4 2xl:w-5 2xl:h-5"
                                            />
                                            <span className="font-semibold text-[14px] 2xl:text-[23px]">Close now</span>
                                        </label>

                                        {errors.amountType && (
                                            <p className="text-red-500 text-[13px] mt-2 -mb-2 font-Inter">{errors.amountType.message}</p>
                                        )}
                                    </div>

                                    {/* Exact Amount Conditional Input */}

                                </div>
                                <div className='w-full justify-center flex'>
                                    <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-20 py-3 2xl:py-3 rounded-full text-[13px] 2xl:text-[26px] mt-8 2xl:mt-14 text-center'>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default EditDateModal