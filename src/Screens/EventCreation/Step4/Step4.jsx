import { ArrowLeft } from 'lucide-react'
import React from 'react'
import EventPreviewSlider from '../../../Components/EventCreation/EventPreviewSlider/EventPreviewSlider'
import EventPreviewLayout from '../../../Components/EventCreation/EventPreviewSlider/EventPreviewLayout'

const Step4 = ({ onSubmit, formData, onBack, setCurrentStep }) => {

    const IsLogin = localStorage.getItem('token')


    const handleFinalSubmit = () => {
        const finalData = { ...formData };
            onSubmit(finalData);
    };


    return (
        <>
            {/* Navbar  */}
            <section className='bg-[#FFB5C0] py-5 2xl:py-7 min-[1850px]:!py-9  flex justify-between px-20 2xl:px-28'>
                <div onClick={() => { onBack() }} className='flex items-center gap-4 cursor-pointer'>
                    <ArrowLeft className='size-5 2xl:size-6 hover:text-white  transition-colors duration-300' strokeWidth={3} />
                    <h1 className='font-Inter text-[16px] 2xl:text-[20px] font-semibold text-[#272727] hover:text-white  transition-colors duration-300 '>Preview</h1>
                </div>
                <div className='flex gap-8'>
                    <button onClick={() => setCurrentStep((prev) => prev - 3)} className='font-Inter font-semibold text-[#272727]   px-8 2xl:px-12 py-2 2xl:py-3 rounded-full text-[14px] 2xl:text-[16px] min-[1850px]:!text-[20px] hover-btn hover-btn-white bg-transparent'>
                        <span>Edit details</span>
                    </button>
                    <button onClick={handleFinalSubmit} className='font-Inter  font-semibold text-white !bg-[#272727] px-8 2xl:px-12 py-2 2xl:py-3 rounded-full text-[14px] 2xl:text-[16px] min-[1850px]:!text-[20px] hover-btn hover-btn-white'>
                        <span>Publish & share</span>
                    </button>
                </div>
            </section>

            {/* SLIDER  */}

            <section className='flex flex-col gap-4 justify-center items-center py-12 2xl:py-16 min-[1850px]:!py-20 min-[1850px]:pr-14 '>
                <div className=' w-[79%] 2xl:w-[75%] min-[1850px]:!w-[67%]'>
                    <h1 className='font-Inter text-[17px] 2xl:text-[22px] text-[#434343] font-semibold'>Preview what your group will see</h1>
                </div>
                <EventPreviewSlider>

                    {/* SLIDES 1  */}
                    <EventPreviewLayout images={"/Images/events/PreviewCardImage.png"} CurrentStep={1}> <div className='flex flex-col gap-5 2xl:gap-8 mt-24 2xl:mt-32 items-center '>
                        <h1 className='font-Inter text-[20px] 2xl:text-[25px] font-semibold text-center w-[80%] leading-[28px]'>We’ve loved working with you</h1>
                        <h1 className='font-Inter text-[12px] 2xl:text-[15px] font-semibold text-center w-[80%] leading-[15px]'>Closes on March 19, 2025</h1>
                        <h1 className='font-Inter text-[17.5px] 2xl:text-[22px] font-bold'>User name</h1>
                    </div>
                        <div className='flex gap-3 mt-1'>
                            <button className='font-Inter font-semibold text-[#272727] border-[2px]  border-[#272727] px-7.5 py-2 2xl:py-2.5 rounded-full text-[14.5px] 2xl:text-[18px]'>
                                Sign Only
                            </button>
                            <button className='font-Inter font-semibold bg-[#FFB5C0] text-[#272727]  px-7.5 py-2 2xl:py-2.5 rounded-full text-[14.5px] 2xl:text-[18px]'>
                                Sign & chip in
                            </button>
                        </div>
                        <div className='w-full flex justify-center mt-3'>
                            <button className='font-Inter font-semibold text-[#272727] border-[1.5px] w-[52%]  border-[#272727] px-7.5 py-2 2xl:py-2.5 rounded-full text-[14.5px] 2xl:text-[18px]'>
                                Be the first to join
                            </button>
                        </div> </EventPreviewLayout>

                    {/* SLIDE 2 */}
                    <EventPreviewLayout images={"/Images/events/Card8.png"} CurrentStep={2}>
                        <div className='flex flex-col justify-center gap-5 mt-8 2xl:mt-12 items-center'>
                            <h1 className='font-Inter text-[20px] 2xl:text-[25px] font-semibold text-center leading-[28px]'>Sign the card</h1>
                            <h1 className='font-Inter text-[12.5px] 2xl:text-[15px] font-semibold text-center  leading-[15px]'>Add your message to the card.</h1>
                            <hr className='text-[#d8d4d4] bg-[#d8d4d4] mt-1  w-[148%]' />
                            <h1 className='font-Inter text-[14.5px] 2xl:text-[18px] font-semibold'>Add an image or GIF</h1>
                        </div>
                        <div className='flex items-center gap-3 2xl:mt-1'>
                            <button className='font-Inter font-semibold text-[#272727] border-[2px]  border-[#272727] px-7.5 py-2 2xl:py-2.5 rounded-full text-[13px] 2xl:text-[18px]'>
                                Browse our Library
                            </button>
                            <h1 className='font-Inter text-[#383838] text-[15px] 2xl:text-[18px]'>or</h1>
                            <button className='font-Inter font-semibold bg-[#FFB5C0] text-[#272727]  px-7.5 py-2 2xl:py-2.5 rounded-full text-[13px] 2xl:text-[18px]'>
                                Upload Your own
                            </button>
                        </div>
                        <hr className='text-[#d8d4d4] bg-[#d8d4d4] 2xl:mt-1  w-[50%]' />

                        <div className='w-full flex flex-col items-center gap-6 justify-center 2xl:mt-3'>
                            <div>
                                <textarea
                                    disabled
                                    rows={5}
                                    placeholder='Your message'
                                    className={`bg-white text-[#A0A0A0] font-Inter text-[13px] 2xl:text-[16px]  rounded-[15px] px-5 py-3 2xl:py-4.5 w-[390px] 2xl:w-[500px] cursor-pointer `}
                                />
                            </div>
                            <button className='font-Inter font-semibold bg-[#FFB5C0] text-[#272727]  w-[75%] px-7.5 py-2.5 rounded-full text-[14px] 2xl:text-[18px]'>
                                Continue
                            </button>
                        </div> </EventPreviewLayout>

                    {/* SLIDE 3  */}
                    <EventPreviewLayout images={"/Images/events/EventPreviewSlide3.png"} CurrentStep={3}>
                        <div className='flex flex-col gap-7 justify-center items-center'>
                            <div className='flex flex-col gap-8 mt-20 2xl:mt-32 items-center '>
                                <h1 className='font-Inter text-[20px] 2xl:text-[25px] font-semibold text-center w-[70%] leading-[28px]'>How much would you like to contribute</h1>
                            </div>
                            <div className='flex mt-1'>
                                <button className='font-Inter font-semibold text-[#383838] border-[2px]  border-[#ebebeb] px-5 py-3 2xl:py-4 text-[14.5px] 2xl:text-[18px]'>
                                    AUD$
                                </button>
                                <button className='font-Inter font-semibold bg-[#FFB5C0] text-[#272727]  px-5 py-3 2xl:py-4 text-[14.5px] 2xl:text-[18px]'>
                                    0.00
                                </button>
                            </div>
                            <div>
                                <h1 className='font-Inter text-[#616161] text-[14px] 2xl:text-[15px]  text-center w-[100%] leading-[15px]'>The amount you give won’t be seen by others</h1>
                            </div>
                            <div className='w-full flex justify-center mt-3'>
                                <button className='font-Inter font-semibold bg-[#FFB5C0] text-[#272727] w-[50%] 2xl:w-[40%] px-7.5 py-2.5 rounded-full text-[15px] 2xl:text-[18px]'>
                                    Continue
                                </button>
                            </div> </div></EventPreviewLayout>
                </EventPreviewSlider>
            </section>

        </>
    )
}

export default Step4