import { CircleArrowLeft } from 'lucide-react'
import React from 'react'

const GuestLayout = ({ children, images, CurrentStep }) => {
    return (
        <>

            <div className="sm:pb-24 md:pb-32 2xl:pb-36 sm:pt-10 sm:px-8 2xl:px-12 sm:bg-[#FFF5F7] rounded-[20px] sm:shadow-lg mt-10 mb-24 flex flex-col gap-16 md:gap-20 2xl:gap-24 w-[35%]">
                <div className="flex justify-center items-center gap-4 px-1.5 sm:px-0">
                    <CircleArrowLeft className="size-5.5 2xl:size-7 text-[#FFB5C0]" />
                    <div className='w-[85%] relative'>
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
                </div>

                <div className="flex flex-col justify-center gap-5">
                    <div className=' flex flex-col justify-center items-center text-center gap-5'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuestLayout