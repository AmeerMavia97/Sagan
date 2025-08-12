import { ArrowDown, Mail, X } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form';

const AddEmailModal = ({ onClick }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    return (
        <>
            <div className="fixed inset-0 z-50 backdrop-blur-lg bg-[#79797946] flex items-center justify-center ">
                <div className="bg-[#ffe2e2] relative w-[43%] 2xl:w-[40%] rounded-[15px]">

                    <div className='flex justify-between bg-[#FFB5C0] py-3 px-6 2xl:py-5.5 2xl:px-10  rounded-t-[15px]'>
                        <div className='flex items-center gap-3 2xl:gap-5 justify-center'>
                            <Mail className='size-6 2xl:size-10' />
                            <h1 className='font-Inter font-[700] text-[17px] 2xl:text-[28px]'>Add email addresses</h1>
                        </div>
                        {/* Close Button */}
                        <button
                            className=" text-5xl font-bold"
                            onClick={onClick}
                        >
                            <ArrowDown strokeWidth={2} className='size-5 cursor-pointer 2xl:size-8.5 font-bold  absolute top-4 2xl:top-7 right-5' />
                        </button>
                    </div>

                    <div className=''>
                        <div className='flex flex-col gap-3 2xl:gap-4 px-10 py-7 2xl:py-10'>
                            <h1 className='font-Inter text-[24px] 2xl:text-[33px] font-semibold text-[#272727] text-center'>Add Friends</h1>
                            <p className='text-[14px] 2xl:text-[20px] font-Inter text-[#272727] font-[500] text-center'>You can use as many methods as you like or add more later</p>

                            <div className='flex justify-center items-center'>
                                <h1 className='font-Inter font-semibold text-[15px] 2xl:text-[23px] border-r-[1px] pr-10'>Upload CSV</h1>
                                <h1 className='font-Inter font-semibold text-[15px] 2xl:text-[23px] pl-10'>Enter email address</h1>
                            </div>
                            <div>
                                <div className='pt-5'>
                                    <h1 className='font-Inter text-[15px] 2xl:text-[24px] font-semibold'>Invitee List</h1>
                                    <div className='bg-white h-32 2xl:h-58 rounded-[10px] mt-3 px-4 py-3.5'>
                                        <h1 className='font-Inter font-[500] text-[14px] 2xl:text-[19px]'>info@gmail.com</h1>
                                    </div>
                                </div>
                                
                                <div className='w-full justify-center flex'>
                                    <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727] px-16  2xl:px-20 py-3 2xl:py-5 rounded-full text-[13px] 2xl:text-[20px] mt-7 2xl:mt-14 text-center'>
                                        Send email(s)
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

export default AddEmailModal