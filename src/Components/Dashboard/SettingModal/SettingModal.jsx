import { Switch } from '@headlessui/react';
import { Settings, X } from 'lucide-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';

const switchOptions = [
    {
        name: 'peopleSign',
        label: 'Collection goal',
    },
    {
        name: 'allowComments',
        label: 'Send automatic reminders',
    },
    {
        name: 'showContributions',
        label: 'Show total collected',
    },
    {
        name: 'showContributions',
        label: 'Ask friend a wuestion',
    },
    {
        name: 'showContributions',
        label: 'Donate a portion to charity',
    },
    {
        name: 'showContributions',
        label: 'Add group CARD',
    },
    {
        name: 'showContributions',
        label: 'Let people sign the card without contributing',
    },
];


const SettingModal = ({ onClick }) => {

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();

    const selectedOption = watch('amountType');

    return (
        <>
            <div className="fixed inset-0 z-50 backdrop-blur-lg bg-[#79797946] flex items-center justify-center ">
                <div className="bg-[#FFE2E2] relative w-[60%] 2xl:w-[55%] rounded-[15px]">

                    <div className='flex justify-between bg-[#FFB5C0] py-3 2xl:py-5.5 px-8  rounded-t-[15px]'>
                        <div className='flex items-center gap-5 justify-center'>
                            <Settings className='size-6 2xl:size-10' />
                            <h1 className='font-Inter font-[700] text-[16px] 2xl:text-[26px]'>Event Settings</h1>
                        </div>
                        {/* Close Button */}
                        <button
                            className=" text-5xl font-bold"
                            onClick={onClick}
                        >
                            <X strokeWidth={3} className='size-5 cursor-pointer 2xl:size-7.5 font-bold  absolute 2xl:top-7 top-4 right-5' />
                        </button>
                    </div>

                    <div className='py-10 2xl:py-14 flex flex-col gap-6 2xl:gap-10'>
                        <div className='grid grid-cols-2 px-10'>
                            <div className='flex flex-col gap-8'>

                                <div>
                                    <label className='block mb-5  font-Inter text-[15px] 2xl:text-[22px] font-semibold'>Collection/Card Title</label>
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
                                </div>
                                <div>
                                    <label className='font-Inter text-[15px] 2xl:text-[22px] leading-[25px] font-semibold'>
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
                            </div>
                            <div className='flex flex-col justify-end items-end'>
                                {switchOptions.map((option) => (
                                    <div key={option.name} className="flex items-center w-[260px] gap-6 2xl:w-[370px] mb-4 2xl:mb-6">
                                        <Controller
                                            name={option.name}
                                            control={control}
                                            defaultValue={false}
                                            render={({ field }) => (
                                                <>
                                                    <div>
                                                        <Switch
                                                            checked={field.value}
                                                            onChange={field.onChange}
                                                            className={`group relative flex h-7 w-12 2xl:h-9 2xl:w-15 cursor-pointer rounded-full ${field.value ? 'bg-[#000]' : '!bg-[#FFB5C0]'} pt-[5px] 2xl:pt-[5.5px] p-1 transition ease-in-out`}
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                className={`inline-block size-4.5 2xl:size-6.5 transform rounded-full bg-white shadow-lg transition duration-200 ${field.value ? 'translate-x-6' : 'translate-x-0'}`}
                                                            />
                                                        </Switch>
                                                    </div>
                                                    <label className="font-Inter font-bold text-[#272727] text-[14.5px] leading-[18px] 2xl:leading-[27px] 2xl:text-[21px]">
                                                        {option.label}
                                                    </label>
                                                </>
                                            )}
                                        />
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className='w-full justify-center flex'>
                            <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-20 py-3 2xl:py-3 rounded-full text-[13px] 2xl:text-[26px] text-center'>
                                Save
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SettingModal