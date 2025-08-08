import React from 'react'

const GuestStep1 = ({ onNext, defaultValues }) => {
    return (
        <>
            <section className='bg-[#FFF5F7] rounded-2xl grid grid-cols-2 px-20'>
                <div className='flex justify-center  py-20'>
                    <img className='w-[70%]' src="/Images/events/Card8.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items text-center px-20'>
                    <h1 className='font-Inter text-[25px] font-semibold'>Add an image or GIF</h1>
                    <div className='flex flex-col'>
                        <button className='font-Inter font-semibold text-[#272727] border-[2px]  border-[#272727] px-7.5 py-2 2xl:py-2.5 rounded-full text-[13px] 2xl:text-[25px]'>
                            Browse our Library
                        </button>
                        <div className='flex justify-center items-center gap-7 py-10'>
                            <hr className='bg-[#56565669] text-[#56565669] w-full' />
                            <h1 className='font-Inter text-[#383838] text-[15px] 2xl:text-[18px] flex items-center justify-center'>or</h1>
                            <hr className='bg-[#56565669] text-[#56565669] w-full' />
                        </div>
                        <button className='font-Inter font-semibold bg-[#FFB5C0] text-[#272727]  px-7.5 py-3 2xl:py-4 rounded-full text-[13px] 2xl:text-[25px]'>
                            Upload Your own
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default GuestStep1