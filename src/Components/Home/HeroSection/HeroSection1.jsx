// HeroSection1.jsx
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const HeroSection1 = () => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const videoRefs = useRef([]);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;

            if (index === currentSlide) {
                video.play().catch(() => { });
            } else {
                video.pause();
            }
        });
    }, [currentSlide]);



    return (
        <div className="w-full h-[80vh]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="w-full h-full"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            >
                <SwiperSlide>
                    <div className="flex items-center justify-center w-full h-full bg-[#feb5c0]">
                        <div
                            className={`absolute inset-0 transition-transform duration-700 `}
                        >
                            <div className="flex flex-col md:flex-row-reverse lg:flex-row items-stretch h-full gap-0 mx-auto">
                                <div className="relative  order-1 w-full -mb-5 -mt-14 md:-mt-0 sm:h-56  md:w-[67%]  md:h-auto lg:order-2 flex justify-end">
                                    <img
                                        src="Images/home/banner3.png"
                                        alt="ceremony"
                                        className="object-cover w-full hidden lg:block h-full "
                                    />
                                    <img
                                        src="Images/home/banner3.png"
                                        alt="ceremony"
                                        className="object-cover  object-left-top  w-[90%] h-[40vh] md:w-[100%] block lg:hidden "
                                    />

                                </div>
                                <div className="w-full min-[1666px]:!pl-[10%] min-[1810px]:!pl-[20%] md:w-[65%] px-6 sm:px-8 lg:pl-20 z-10 flex flex-col justify-center py-12 sm:py-16 order-2 lg:order-1">
                                    <h1 className="font-right-grotesk font-[800] mb-5 text-[37px] px-8 md:px-0 leading-[40px] sm:text-3xl lg:text-4xl xl:text-5xl text-[#272727]  lg:leading-[45px] min-[1666px]:!text-[58px] min-[1666px]:!leading-[60px] tracking-tight uppercase text-center md:text-left">
                                        SEND & RECEIVE CASH
                                        <br className="hidden md:block" /> FOR LIFE'S BIG MOMENT
                                    </h1>
                                    <p className=" max-w-md min-[1666px]:!text-[19px] mb-8 text-[16px] leading-[21px] sm:text-base pr-4 md:text-[15px] lg:text-[16px] text-[#272727] font-[600] opacity-95 text-center md:text-left mx-auto lg:mx-0 min-[1666px]:!max-w-2xl font-Inter">
                                        Across cultures, giving cash is a cherished tradition—whether for
                                        weddings, birthdays, baby showers, or just to show appreciation.
                                        SAGANonline makes it seamless, secure, and meaningful.
                                    </p>
                                    <div className="flex justify-center md:justify-start min-[1666px]:items-start min-[1666px]:!w-[50%] min-[1880px]:!w-[40%]">
                                        <Link
                                            to="/register"
                                            className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                                        >
                                            <span>Start</span>
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center w-full h-full">
                        <div
                            className={`absolute inset-0 transition-transform duration-700`}
                        >
                            <div className="relative w-full h-full">
                                <video
                                    ref={(el) => (videoRefs.current[1] = el)}
                                    src="/Images/videos/Shagun.mp4"
                                    className="object-cover w-full h-full"
                                    muted
                                    loop
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-[#00000093] bg-opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
                                    <div className="z-10 max-w-4xl text-center">
                                        <h1 className="font-right-grotesk leading-[40px] font-[600] mb-5 text-[32px] lg:text-4xl xl:text-6xl text-white tracking-tight uppercase">
                                            SEND & RECEIVE CASH FOR
                                        </h1>
                                        <h3 className="font-cormorant-upright text-4xl lg:text-4xl xl:text-5xl text-[#feb5c0] !font-[700] mb-3 sm:mb-2">
                                            Shagun
                                        </h3>
                                        <p className="max-w-2xl mx-auto mb-8 text-[17px] sm:text-base lg:text-lg font-bold text-white opacity-90 font-Inter  min-[1666px]:!text-[19px]">
                                            Across cultures, giving cash is a cherished tradition
                                        </p>
                                        <div className="flex justify-center">
                                            <Link
                                                to="/register"
                                                className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                                            >
                                                <span>Start</span>
                                                <ArrowUpRight className="w-4 h-4 text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center w-full h-full">
                        <div
                            className={`absolute inset-0 transition-transform duration-700`}
                        >
                            <div className="relative w-full h-full">
                                <video
                                    ref={(el) => (videoRefs.current[2] = el)}
                                    src="/Images/videos/Hongbao.mp4"
                                    className="object-cover w-full h-full"
                                    muted
                                    loop
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-[#00000093] bg-opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
                                    <div className="z-10 max-w-4xl text-center">
                                        <h1 className="font-right-grotesk leading-[40px] font-[600] mb-5 text-[32px] lg:text-4xl xl:text-6xl text-white tracking-tight uppercase">
                                            SEND & RECEIVE CASH FOR
                                        </h1>
                                        <h3 className="font-cormorant-upright text-4xl lg:text-4xl xl:text-5xl text-[#feb5c0] !font-[700] mb-3 sm:mb-2">
                                            Hongbao
                                        </h3>
                                        <p className="max-w-2xl mx-auto mb-8 text-[17px] sm:text-base lg:text-lg font-bold text-white opacity-90 font-Inter  min-[1666px]:!text-[19px]">
                                            Across cultures, giving cash is a cherished tradition
                                        </p>
                                        <div className="flex justify-center">
                                            <Link
                                                to="/register"
                                                className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                                            >
                                                <span>Start</span>
                                                <ArrowUpRight className="w-4 h-4 text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center w-full h-full">
                        <div
                            className={`absolute inset-0 transition-transform duration-700`}
                        >
                            <div className="relative w-full h-full">
                                <video
                                    ref={(el) => (videoRefs.current[3] = el)}
                                    src="/Images/videos/Eidiya.mp4"
                                    className="object-cover w-full h-full"
                                    muted
                                    loop
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-[#00000093] bg-opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
                                    <div className="z-10 max-w-4xl text-center">
                                        <h1 className="font-right-grotesk leading-[40px] font-[600] mb-5 text-[32px] lg:text-4xl xl:text-6xl text-white tracking-tight uppercase">
                                            SEND & RECEIVE CASH FOR
                                        </h1>
                                        <h3 className="font-cormorant-upright text-4xl lg:text-4xl xl:text-5xl text-[#feb5c0] !font-[700] mb-3 sm:mb-2">
                                            Eidiya
                                        </h3>
                                        <p className="max-w-2xl mx-auto mb-8 text-[17px] sm:text-base lg:text-lg font-bold text-white opacity-90 font-Inter  min-[1666px]:!text-[19px]">
                                            Across cultures, giving cash is a cherished tradition
                                        </p>
                                        <div className="flex justify-center">
                                            <Link
                                                to="/register"
                                                className="inline-flex font-Inter  items-center gap-1.5 px-8 py-2.5 min-[1666px]:text-[19px] min-[1666px]:px-10 min-[1666px]:py-3 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
                                            >
                                                <span>Start</span>
                                                <ArrowUpRight className="w-4 h-4 text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSection1;
