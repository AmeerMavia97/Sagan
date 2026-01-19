import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditDetail from '../../../Components/GuestUser/EditDetail/EditDetail';

const GuestStep5 = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedImageUrl, setSelectedImageUrl] = useState('');
    
        const handleImageSelect = (url) => {
            setSelectedImageUrl(url);
            setIsModalOpen(false); 
            console.log('Selected image URL:', url);
        };

    return (
        <>
            <section className='grid grid-cols-2 w-full pt-10 pb-20 2xl:py-20'>
                <div className='flex flex-col justify-center items-center gap-7 2xl:gap-10'>
                    <div className='flex justify-center items-center'>
                        <img className='w-[45%] 2xl:w-full' src="Images/GuestUserImage/ThumbImage.png" alt="" />
                    </div>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <h1 className='font-Inter text-[23px] 2xl:text-[30px] font-semibold text-[#272727]'>Payment Received!</h1>
                        <p className='font-Inter text-[15px] 2xl:text-[22px] font-semibold text-[#7E7E7E]'>Are you happy with your message on the card?</p>
                    </div>
                    <div className='flex gap-5'>
                        <button onClick={() => setIsModalOpen(true)} className='font-Inter  w-max font-semibold text-[#272727] border-[2px]  border-[#FFB5C0] px-10 2xl:px-16 py-2 2xl:py-3 rounded-full text-[13px] 2xl:text-[22px]'>
                            Edit Message
                        </button>

                        <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-12 2xl:px-20 py-3 2xl:py-3.5 rounded-full text-[13px] 2xl:text-[22px]'>
                            Complete
                        </button>
                    </div>
                    <div className='border-t-[1px] border-[#a3a3a3] w-[60%] 2xl:w-[70%] flex justify-center pt-6 2xl:pt-9'>
                        <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-10 2xl:px-20 py-3 2xl:py-3.5 rounded-full text-[13px] 2xl:text-[22px]'>
                            View card full screen
                        </button>
                    </div>
                    <div className='w-[50%]'>
                        <p className='font-Inter text-center text-[15px] 2xl:text-[22px] font-semibold text-[#7E7E7E]'>We’ve emailed your receipt but you can download a copy <Link className='text-[#FFB5C0]'>here.</Link></p>
                    </div>

                </div>
                <div className='flex justify-center flex-col items-center gap-4 '>
                    <img className='w-[70%]' src="/Images/events/Card8.png" alt="" />
                    <div className='flex items-center gap-6'>
                        <button
                            type='button'
                        >
                            <ArrowLeft className='text-[#FFB5C0] size-4.5 2xl:size-7 cursor-pointer' strokeWidth={3} />
                        </button>
                        <div>
                            <h1 className='font-Inter font-[600] text-[27px] 2xl:text-[35px]'>1</h1>
                        </div>
                        <button
                            type='button'
                        >
                            <ArrowRight className='text-[#FFB5C0] size-4.5 2xl:size-7 cursor-pointer' strokeWidth={3} />
                        </button>
                    </div>
                </div>

                 {isModalOpen && (
                    <EditDetail
                        onClose={() => setIsModalOpen(false)}
                        onSelectImage={handleImageSelect}
                    />
                )}
            </section>
        </>
    )
}

export default GuestStep5