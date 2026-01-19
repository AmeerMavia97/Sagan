import React from 'react'

const FundStep2 = ({onNext}) => {
    return (
        <>
            <section className='flex flex-col 2xl:gap-20 gap-10 my-10 2xl:my-20 justify-center items-center'>
                 <div>
                    <h1 className='font-Inter text-[#272727] text-[40px] 2xl:text-[65px] font-bold text-center'>KYC Verification</h1>
                    <p className='text-[15.5px] 2xl:text-[22px] text-[#3F3F3F] font-semibold 2xl:mt-2 font-Inter text-center'>Verify your identity in 3 Easy Steps</p>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='flex flex-col gap-6 rounded-[10px] border-[2px] border-[#FFB5C0] px-8 2xl:px-20 py-9 2xl:py-14 text-center items-center justify-between'>
                        <img className='w-32 2xl:w-48' src="/Images/KycImage/Mobile.png" alt="" />
                        <h1 className='font-Inter font-semibold text-[16px] 2xl:text-[22px] text-[#3F3F3F]'>Step 1 : Take Selfie</h1>
                    </div>
                    <div className='flex flex-col gap-6 rounded-[10px] border-[2px] border-[#FFB5C0] px-8 2xl:px-20 py-9 2xl:py-14 text-center  items-center justify-between'>
                        <img className='w-32 2xl:w-48' src="/Images/KycImage/KycCard.png" alt="" />
                        <h1 className='font-Inter font-semibold text-[16px] 2xl:text-[22px] text-[#3F3F3F]'>Step 2 : Submit Your ID</h1>
                    </div>
                    <div className='flex flex-col gap-6 rounded-[10px] border-[2px] border-[#FFB5C0] px-8 2xl:px-20 py-9 2xl:py-14 text-center  items-center justify-between'>
                        <img className='w-32 2xl:w-48' src="/Images/KycImage/Document.png" alt="" />
                        <h1 className='font-Inter font-semibold text-[16px] 2xl:text-[22px] text-[#3F3F3F]'>Step 3 : Proof of Address</h1>
                    </div>

                </div>
                <button onClick={()=>{onNext()}} className='bg-[#FFB5C0] font-Inter rounded-full font-[700] text-[#272727] text-[16px] 2xl:text-[25px] px-16 2xl:px-20 py-3.5 2xl:py-4 w-max'>
                    Verify Now
                </button>
            </section>
        </>
    )
}

export default FundStep2