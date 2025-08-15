import { ArrowDown, Upload } from 'lucide-react'
import React from 'react'

const KYCStep = ({ onNext }) => {
    return (
       <>
            <section className='px-16 flex flex-col justify-center items-center gap-8 2xl:gap-12 pt-10 pb-20'>
                <div>
                    <h1 className='font-Inter text-[#272727] text-[40px] 2xl:text-[65px] font-bold text-center'>KYC Verification</h1>
                    <p className='text-[15.5px] 2xl:text-[22px] text-[#3F3F3F] font-semibold 2xl:mt-2 font-Inter text-center'>Step 3 : Proof of Address</p>
                </div>
                <div className='bg-[#F8F8F8] rounded-[10px] flex grid-cols-2 pr-10 pl-20 place-items-center py-16 '>
                    <div className='border-r flex justify-center items-center w-[45%] h-[350px] 2xl:h-[600px]'>
                        <img className='w-[280px] 2xl:w-[380px] ' src="/Images/KycImage/Document.png" alt="" />
                    </div>
                    <div className='w-[50%] flex flex-col gap-8 pl-20 2xl:pl-28'>
                        <span>
                            <h1 className='font-Inter text-[24px] 2xl:text-[32px] font-bold'>ID Verification</h1>
                            <p className='text-[#7E7E7E] text-[13.5px] leading-[17px] 2xl:text-[25px] 2xl:leading-[29px] font-Inter mt-2'>Full name, full residential address and date of issue should appear on the document to be acceptable. Utility bills and bank statements should be not older than 3 months.</p>
                        </span>
                        <span className='flex flex-col gap-4 2xl:gap-7 w-full'>
                            <span>
                                <button className='bg-[#FFB5C0] font-Inter rounded-full font-[600] text-[#272727] text-[14px] 2xl:text-[25px] px-5 2xl:px-8 py-3.5 2xl:py-5 w-full flex justify-between items-center'>
                                    Select Document Type <ArrowDown strokeWidth={2} className='size-4 2xl:size-8' />
                                </button>
                            </span>
                            <span className='flex gap-6'>
                                <span className='border-[#FFB5C0] border-[3px] font-Inter rounded-full font-[600] text-[#272727] text-[14px] 2xl:text-[25px] gap-6 py-3.5 2xl:py-5.5 w-full flex justify-between px-5 2xl:px-9 items-center'>
                                    <p className='font-Inter text-[14px] 2xl:text-[22px]'>Upload ID Card</p>
                                     <Upload className='size-4 2xl:size-8' />
                                </span>
                            </span>
                        </span>

                        <span className='flex justify-center'>
                            <button onClick={() => { onNext() }} className='bg-[#FFB5C0] font-Inter rounded-full font-[600] text-[#272727] text-[15px] 2xl:text-[25px] px-14 2xl:px-16 py-3 2xl:py-4 w-max'>
                                Submit Document
                            </button>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KYCStep