import { Check } from 'lucide-react'
import React from 'react'

const KycSubmission = () => {
    return (
        <>
            <section className='flex justify-center flex-col items-center py-8 2xl:py-20 px-28'>
                <div>
                    <h1 className='font-Inter text-[38px] 2xl:text-[75px] text-[#272727] font-bold'>Success</h1>
                </div>
                <div className=' bg-[#F8F8F8] w-full rounded-[14px] py-10 2xl:py-20 mt-3 2xl:mt-7 gap-6 flex flex-col justify-center items-center'>

                    <div className='w-[45%] 2xl:w-[38%] flex flex-col justify-center items-center gap-6'>
                        <div className='w-max p-3 2xl:p-5 rounded-full border-[3px]'>
                            <Check className='size-7 2xl:size-13' strokeWidth={3} />
                        </div>
                        <h1 className='font-Inter text-[22px] leading-[27px] 2xl:text-[32px] font-semibold px-20 2xl:leading-[36px] text-center'>Documents Uploaded Successfully</h1>
                        <p className='font-Inter text-[16px] 2xl:text-[25px] text-center text-[#7E7E7E]'>Our team will review all documents carefully and update you within the next 24 hours.  </p>
                        <p className='font-Inter text-[16px] 2xl:text-[25px] text-center text-[#7E7E7E]'>Thanks for your taking your time.   </p>
                        <button className='bg-[#FFB5C0] font-Inter rounded-full font-[600] text-[#272727] text-[15px] 2xl:text-[25px] px-12 2xl:px-16 py-2.5 2xl:py-4 w-max mt-5'>
                            Withdraw Money
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KycSubmission