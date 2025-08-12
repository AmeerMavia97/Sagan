import { ArrowDown, Mail, Search, X } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form';

const InviteListModal = ({ onClick }) => {

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
                <div className="bg-[#ffe2e2] relative w-[45%] 2xl:w-[40%] rounded-[15px]">

                    <div className='flex justify-between bg-[#FFB5C0] py-3.5 px-6 2xl:py-5.5 2xl:px-10  rounded-t-[15px]'>
                        <div className='flex items-center gap-3 2xl:gap-5 justify-center'>
                            <Mail className='size-7 2xl:size-10' />
                            <h1 className='font-Inter font-[600] text-[16px] 2xl:text-[24px]'>Your Group (1 invited)</h1>
                        </div>
                        {/* Close Button */}
                        <button
                            className=" text-5xl font-bold"
                            onClick={onClick}
                        >
                            <X strokeWidth={3} className='size-5 cursor-pointer 2xl:size-7.5 font-bold  absolute top-5 2xl:top-7 right-5' />
                        </button>
                    </div>

                    <div className='px-7 2xl:px-10 py-8 2xl:py-10'>
                        <div className='flex items-center gap-10 pb-5 2xl:pb-7'>

                            <div className='flex items-center justify-center gap-5'>
                                <Search className='size-5 2xl:size-7' />
                                <label className='font-Inter font-[600] text-[16px] 2xl:text-[22px]' htmlFor="">Search</label>
                            </div>
                            <div>
                                <h1 className='font-Inter font-[600] text-[16px] 2xl:text-[22px]'>Export</h1>
                            </div>
                            <div className='border-[1.5px] rounded-[8px] px-3 py-1'>
                                <h1 className='font-Inter font-[600] text-[14px] 2xl:text-[20px] flex justify-center items-center gap-6'>All <ArrowDown className='size-5 2xl:size-6' /></h1>
                            </div>
                        </div>
                        <div className='flex w-full justify-between border-t-[1px] border-[#000] py-3.5 2xl:py-5 items-center'>
                            <h1 className='font-Inter text-[16px] 2xl:text-[21px] font-semibold'>example@gmail.com</h1>
                            <button className='font-Inter bg-[#FFB5C0] rounded-full px-5 2xl:px-7 py-1 text-[13px] 2xl:py-2 2xl:text-[18px] font-semibold'>$ 6.25</button>
                        </div>
                        <div className='flex w-full justify-between border-t-[1px] border-[#000] py-3.5 2xl:py-5 items-center'>
                            <h1 className='font-Inter text-[16px] 2xl:text-[21px] font-semibold'>example@gmail.com</h1>
                            <button className='font-Inter bg-[#FFB5C0] rounded-full px-5 2xl:px-7 py-1 text-[13px] 2xl:py-2 2xl:text-[18px] font-semibold'>$ 6.25</button>
                        </div>
                        <div className='flex w-full justify-between border-t-[1px] border-[#000] py-3.5 2xl:py-5 items-center'>
                            <h1 className='font-Inter text-[16px] 2xl:text-[21px] font-semibold'>example@gmail.com</h1>
                           <button className='font-Inter bg-[#FFB5C0] rounded-full px-5 2xl:px-7 py-1 text-[13px] 2xl:py-2 2xl:text-[18px] font-semibold'>$ 6.25</button>
                        </div> <div className='flex w-full justify-between border-t-[1px] border-[#000] py-3.5 2xl:py-5 items-center'>
                            <h1 className='font-Inter text-[16px] 2xl:text-[21px] font-semibold'>example@gmail.com</h1>
                            <button className='font-Inter bg-[#FFB5C0] rounded-full px-5 2xl:px-7 py-1 text-[13px] 2xl:py-2 2xl:text-[18px] font-semibold'>$ 6.25</button>
                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}

export default InviteListModal