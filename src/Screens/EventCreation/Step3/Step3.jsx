import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import StepLayout from '../../../Components/EventCreation/Stepper/Stepper';
import EventAlert from '../../../Components/EventCreation/EventAlert/EventAlert';
import EventTabs from '../../../Components/EventCreation/EventTabs/EventTabs';
import EventsCards from '../../../Components/EventCreation/EventsCards/EventsCards';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';

const getAlignmentClass = (align) => {
  if (align === 'left') return 'text-left pl-4';
  if (align === 'right') return 'text-right pr-4';
  return 'text-center';
};

const Step3 = ({ onNext, defaultValues, onBack }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const canvasRef = useRef(null);
  const [finalImageUrl, setFinalImageUrl] = useState(null);
  const [fontSize, setFontSize] = useState(14);
  const [textAlign, setTextAlign] = useState('center');

  useEffect(() => {
    if (defaultValues?.selectedImage) {
      setSelectedImage(defaultValues.selectedImage);
    }
    if (defaultValues?.fontSize) {
      setFontSize(defaultValues.fontSize);
    }
    if (defaultValues?.textAlign) {
      setTextAlign(defaultValues.textAlign);
    }
    if (defaultValues?.message) {
      setValue('message', defaultValues.message);
    }
  }, [defaultValues, setValue]);

  const onSubmit = (data) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, img.width, img.height);

      ctx.font = `600 ${fontSize}px 'Inter', sans-serif`;
      ctx.fillStyle = '#000000';
      ctx.textAlign = textAlign;

      const x =
        textAlign === 'left'
          ? 20
          : textAlign === 'right'
          ? img.width - 20
          : img.width / 2;
      const y = img.height - 28;

      ctx.fillText(data.message, x, y);

      canvas.toBlob(
        (blob) => {
          if (!blob) return;

          const formData = new FormData();
          formData.append('image', blob, 'custom-image.png');
          formData.append('message', data.message);

          onNext({
            formData,
            message: data.message,
            selectedImage,
            fontSize,
            textAlign,
          });

          const newImageUrl = URL.createObjectURL(blob);
          setFinalImageUrl(newImageUrl);
        },
        'image/png'
      );
    };

    img.src = selectedImage.url;
  };

  return (
    <StepLayout CurrentStep={2} onBack={onBack}>
      <section className="flex flex-col justify-center items-center -mt-10 gap-9 2xl:gap-6">
        <div className="p-6 mx-auto flex flex-col justify-center items-center">
          {/* Tabs */}
          <div className="max-w-4xl flex gap-4 mb-5">
            <EventTabs setActiveTab={setActiveTab} activeTab={activeTab} />
          </div>

          <EventsCards
            setSelectedImage={setSelectedImage}
            activeTab={activeTab}
          />

          {/* Selected Image with Form */}
          {selectedImage && (
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                <div className="relative">
                  <div className="mb-4 flex justify-center items-center gap-3 2xl:gap-5">
                    {/* Font Size buttons */}
                    <button
                      type="button"
                      onClick={() => setFontSize(23)}
                      className="font-serif text-[26px] 2xl:text-[34px] flex items-center"
                    >
                      A
                      <div className="border-r-[1px] pr-3 2xl:pr-4 h-7.5"></div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFontSize(15)}
                      className="font-serif text-[20px] 2xl:text-[23px] flex items-center"
                    >
                      A
                      <div className="border-r-[1px] pr-3 2xl:pr-4 h-7.5"></div>
                    </button>

                    {/* Alignment */}
                    <button
                      type="button"
                      onClick={() => setTextAlign('left')}
                      className="border-r-[1px] pr-3 2xl:pr-4"
                    >
                      <AlignLeft className="size-4.5 2xl:size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextAlign('center')}
                      className="border-r-[1px] pr-3 2xl:pr-4"
                    >
                      <AlignCenter className="size-4.5 2xl:size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextAlign('right')}
                    >
                      <AlignRight className="size-4.5 2xl:size-6" />
                    </button>
                  </div>

                  {/* Card + title input + alert */}
                  {/* Card + title input + alert */}
<div
  className="flex justify-center items-center text-center relative"
  onClick={() => setShowAlert(true)}          // ← whole card click
>
  <img
    src={selectedImage.url}
    alt="Selected"
    className="w-full shadow-2xl h-[60vh] 2xl:h-[55vh] rounded-2xl object-cover mb-4"
  />

  <input
    {...register('message')}
    type="text"
    maxLength={40}
    placeholder="Add your text here"
    // remove onClick from here – parent handles it
    className={`bottom-6 left-4.5 2xl:left-5.5 w-[86%] focus:outline-none text-[${fontSize}px] placeholder:text-black font-Inter font-[500] text-black bg-[#ffffffe1] absolute px-4 py-2 2xl:py-3 rounded mb-2 ${getAlignmentClass(
      textAlign
    )}`}
  />

  {/* Alert positioned relative to this card wrapper */}
  <EventAlert visible={showAlert} onClose={() => setShowAlert(false)} />
</div>

                  <div className="mt-6 w-full 2xl:mt-8 2xl:w-full">
                    <button
                      type="submit"
                      className="font-Inter text-[16px] 2xl:text-[20px] bg-[#272727] py-3 2xl:py-3.5 rounded-full text-white font-semibold w-full cursor-pointer hover-btn hover-btn-black"
                    >
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
    </StepLayout>
  );
};

export default Step3;