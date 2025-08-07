import React from 'react'

const EventPreviewLayout = ({ children , images , CurrentStep }) => {
    return (
        <>
            <div className="h-full bg-[#FFF5F7] rounded-[24px] py-8 2xl:py-10 grid grid-cols-2 justify-center">
                <div className='bg-white rounded-[14px] text-center ml-10 2xl:ml-14 flex justify-center items-center  2xl:py-12'>
                    <img className='w-[65%] h-[80%] 2xl:w-[60%] object-cover 2xl:h-[90%]' src={images} alt="" />
                </div>
                <div className='flex flex-col  pt-6 items-center'>
                    <div className='w-[70%] relative'>
                        {/* Progress Line */}
                        <div className="w-full h-0.5 2xl:h-1 bg-[#e7cdd2b3] rounded-full" />
                        {/* Steps */}
                        {[0, 1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className={`absolute top-1/2 w-2 h-2 2xl:w-3 2xl:h-3 rotate-45 -translate-y-1/2 rounded-full ${step === 0 ? 'left-0' :
                                    step === 1 ? 'left-1/3' :
                                        step === 2 ? 'left-2/3' :
                                            'left-full -translate-x-full'
                                    } ${CurrentStep >= step ? 'bg-[#FFB5C0]' : 'bg-[#e7cdd2b3]'}`}
                            />
                        ))}
                        {/* Filled Line */}
                        <div
                            className="absolute top-[0.5px] left-0 h-0.5 2xl:h-1 bg-[#FFB5C0] rounded-full"
                            style={{ width: `${(CurrentStep / 3) * 100}%` }}
                        />
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-5'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventPreviewLayout