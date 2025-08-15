import { ArrowDown, Upload } from 'lucide-react'
import React from 'react'

const KYCStep2 = ({ onNext }) => {
    return (
        <>
            <section className='px-16 flex flex-col justify-center items-center gap-12 pt-10 pb-20'>
                <div>
                    <h1 className='font-Inter text-[#272727] text-[40px] 2xl:text-[65px] font-bold text-center'>KYC Verification</h1>
                    <p className='text-[15.5px] 2xl:text-[22px] text-[#3F3F3F] font-semibold 2xl:mt-2 font-Inter text-center'>Step 2 : Submit Your ID</p>
                </div>
                <div className='bg-[#F8F8F8] rounded-[10px] flex grid-cols-2 pl-20 place-items-center py-10 2xl:py-16 '>
                    <div className='border-r flex justify-center items-center w-[45%] h-[340px] 2xl:h-[550px]'>
                        <img className='w-[240px] 2xl:w-[380px] ' src="/Images/KycImage/KycCard.png" alt="" />
                    </div>
                    <div className='w-[50%] flex flex-col gap-6 2xl:gap-10 pl-20 2xl:pl-28'>
                        <span>
                            <h1 className='font-Inter text-[24px] 2xl:text-[32px] font-bold'>ID Verification</h1>
                            <p className='text-[#7E7E7E] mt-2 text-[14.5px] leading-[18px] 2xl:leading-[30px] 2xl:text-[25px] font-Inter'>We scan the user's ID document and detect whether it is genuine or fraudulent.</p>
                        </span>
                        <span className='flex flex-col gap-5 2xl:gap-10 w-full'>
                            <span>
                                <button className='bg-[#FFB5C0] font-Inter rounded-full font-[600] text-[#272727] text-[14px] 2xl:text-[25px] px-5 2xl:px-8 py-3.5 2xl:py-5 w-full flex justify-between items-center'>
                                    Select Document Type <ArrowDown strokeWidth={2} className='size-4 2xl:size-8' />
                                </button>
                            </span>
                            <span className='flex gap-2 2xl:gap-6'>
                                <span className='border-[#FFB5C0] border-[2px] font-Inter rounded-full font-[600] text-[#272727] text-[25px] gap-6 py-2.5 2xl:py-4 w-full flex justify-center items-center'>
                                    <span>
                                        <p className='font-Inter text-[13px] 2xl:text-[22px]'>Upload ID Card</p>
                                        <p className='text-[11.5px] 2xl:text-[16px] font-Inter 2xl:-mt-1'>(Front View)</p>
                                    </span> <Upload className='size-5 2xl:size-8' />
                                </span>
                                <span className='border-[#FFB5C0] border-[2px] font-Inter rounded-full font-[600] text-[#272727] text-[25px] gap-6 py-2.5 2xl:py-4 w-full flex justify-center items-center'>
                                    <span>
                                        <p className='font-Inter text-[13px] 2xl:text-[22px]'>Upload ID Card</p>
                                        <p className='text-[11.5px] 2xl:text-[16px] font-Inter 2xl:-mt-1'>(Back View)</p>
                                    </span> <Upload className='size-5 2xl:size-8' />
                                </span>
                            </span>
                        </span>

                        <span className='flex justify-center'>
                            <button onClick={() => { onNext() }} className='bg-[#FFB5C0] font-Inter rounded-full font-[600] text-[#272727] text-[15px] 2xl:text-[25px] px-16 mt-3 2xl:mt-0 py-3 2xl:py-4 w-max'>
                                Submit ID
                            </button>
                        </span>
                    </div>

                </div>
            </section>
        </>
    )
}

export default KYCStep2