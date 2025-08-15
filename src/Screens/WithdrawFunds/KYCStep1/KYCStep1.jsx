import React from 'react'

const KYCStep1 = ({ onNext }) => {
    return (
        <>
            <section className='px-16 flex flex-col justify-center items-center gap-8 2xl:gap-12 pt-10 pb-20'>
                <div>
                    <h1 className='font-Inter text-[#272727] text-[40px] 2xl:text-[65px] font-bold text-center'>KYC Verification</h1>
                    <p className='text-[15.5px] 2xl:text-[22px] text-[#3F3F3F] font-semibold 2xl:mt-2 font-Inter text-center'>Step 1 : Take Selfie</p>
                </div>
                <div className='bg-[#F8F8F8] rounded-[10px] flex grid-cols-2 px-20 place-items-center py-10 2xl:py-16 '>
                    <div className='border-r flex justify-center items-center w-[45%] h-[370px] 2xl:h-[530px]'>
                        <img className='w-[240px] 2xl:w-[380px] ' src="/Images/KycImage/Mobile.png" alt="" />
                    </div>
                    <div className='w-[50%] flex flex-col gap-10 2xl:gap-14 pl-20 2xl:pl-28'>
                        <span>
                            <h1 className='font-Inter text-[22px] 2xl:text-[32px] font-bold'>Smart Caprure</h1>
                            <p className='text-[#7E7E7E] text-[15.5px] leading-[18px] 2xl:leading-[30px] 2xl:text-[25px] font-Inter'>Our technology automatically detects a good frame and takes the picture. </p>
                        </span>
                        <span>
                            <h1 className='font-Inter text-[22px] 2xl:text-[32px] font-bold'>Digital Tamper Detection </h1>
                            <p className='text-[#7E7E7E] text-[15.5px] leading-[18px] 2xl:leading-[30px] 2xl:text-[25px] font-Inter'>We can detect digitally modified images to help reduce instances of fraud.</p>
                        </span>
                        <span>
                            <button onClick={() => { onNext() }} className='bg-[#FFB5C0] font-Inter rounded-full font-[600] text-[#272727] text-[15px] 2xl:text-[25px] px-12 2xl:px-14 py-3 2xl:py-4 w-max'>
                                Take a Picture
                            </button>
                        </span>
                    </div>

                </div>
            </section>
        </>
    )
}

export default KYCStep1