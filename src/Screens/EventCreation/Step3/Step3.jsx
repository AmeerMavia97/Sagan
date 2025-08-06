import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import StepLayout from '../../../Components/EventCreation/Stepper/Stepper';
import EventAlert from '../../../Components/EventCreation/Stepper/EventAlert/EventAlert';
import EventTabs from '../../../Components/EventCreation/Stepper/EventTabs/EventTabs';
import EventsCards from '../../../Components/EventCreation/Stepper/EventsCards/EventsCards';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';

const getAlignmentClass = (align) => {
    if (align === "left") return "text-left pl-4";
    if (align === "right") return "text-right pr-4";
    return "text-center";
};

const Step3 = ({ onNext, defaultValues, onBack }) => {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    // const onSubmit = (data) => alert(`Submitted message: ${data.message}`);
    // const Step3Val = (data) => {
    //     console.log(data);
    //     onNext(data);
    // };

    const canvasRef = useRef(null);
    const [finalImageUrl, setFinalImageUrl] = useState(null);
    const [fontSize, setFontSize] = useState(14); // Default to 14px
    const [textAlign, setTextAlign] = useState("center"); // Default to center

    const onSubmit = (data) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
            // Set canvas dimensions
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw image
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Add text
            ctx.font = "600 14px 'Inter', sans-serif";
            ctx.fillStyle = "#000000";
            ctx.backgroundColor = "#000000";
            ctx.textAlign = "center";
            ctx.fillText(data.message, img.width / 2, img.height - 28);

            // Get data URL
            const newImageUrl = canvas.toDataURL("image/png");
            setFinalImageUrl(newImageUrl);
        };

        img.src = selectedImage.url;
    };

    return (
        <StepLayout CurrentStep={2} onBack={onBack}>
            <section className='flex flex-col justify-center items-center -mt-10 gap-9 2xl:gap-6'>
                <div className="p-6 mx-auto flex flex-col justify-center items-center">
                    {/* Tabs */}
                    <div className="max-w-4xl flex gap-4 mb-5">
                        <EventTabs setActiveTab={setActiveTab} activeTab={activeTab} ></EventTabs>
                    </div>
                    <EventsCards setSelectedImage={setSelectedImage} activeTab={activeTab}></EventsCards>
                    {/* Selected Image with Form */}
                    {selectedImage && (
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                                <div className="relative">
                                    <div className='mb-4 flex justify-center items-center gap-3 2xl:gap-5'>
                                        {/* Font Size */}
                                        <button type='button' onClick={() => setFontSize(23)} className='font-serif text-[26px] 2xl:text-[34px] flex items-center'>
                                            A <div className='border-r-[1px] pr-3 2xl:pr-4 h-7.5'></div>
                                        </button>
                                        <button type='button' onClick={() => setFontSize(15)} className='font-serif text-[20px] 2xl:text-[23px] flex items-center'>
                                            A <div className='border-r-[1px] pr-3 2xl:pr-4 h-7.5'></div>
                                        </button>
                                        {/* Text Alignments */}
                                        <button type='button' onClick={() => setTextAlign("left")} className='border-r-[1px] pr-3 2xl:pr-4'>
                                            <AlignLeft className='size-4.5 2xl:size-6' />
                                        </button>
                                        <button type='button' onClick={() => setTextAlign("center")} className='border-r-[1px] pr-3 2xl:pr-4'>
                                            <AlignCenter className='size-4.5 2xl:size-6' />
                                        </button>
                                        <button type='button' onClick={() => setTextAlign("right")}>
                                            <AlignRight className='size-4.5 2xl:size-6' />
                                        </button>
                                    </div>

                                    <div className='flex justify-center relative items-center text-center'>
                                        <img src={selectedImage.url} alt="Selected" className="w-full shadow-2xl h-[60vh] 2xl:h-[55vh] rounded-2xl object-cover mb-4" />
                                        <input
                                            {...register("message")}
                                            type="text"
                                            maxLength={40}
                                            placeholder="Add your text here"
                                            className={`bottom-6 left-4.5 2xl:left-5.5 w-[86%] focus:outline-none text-[${fontSize}px] placeholder:text-black font-Inter font-[500] text-black bg-[#ffffffe1] absolute px-4 py-2 2xl:py-3 rounded mb-2 ${getAlignmentClass(textAlign)}`}
                                        />
                                    </div>

                                    <div className='mt-6 w-full 2xl:mt-8 2xl:w-full'>
                                        <button type="submit" className='font-Inter text-[16px] 2xl:text-[20px] bg-[#272727] py-3 2xl:py-3.5 rounded-full text-white font-semibold w-full cursor-pointer hover-btn hover-btn-black'>
                                            <span>Next</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* Hidden Canvas */}
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                        </div>
                    )}
                </div>
            </section>
            <EventAlert></EventAlert>
        </StepLayout>
    )
}

export default Step3