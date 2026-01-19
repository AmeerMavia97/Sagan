import React from "react";
import { Link } from "react-router-dom";
import LaptopMockup from "../../Components/Home/LaptopMockup/LaptopMockup";
import MobileMockup from "../../Components/Home/MobileMockup/MobileMockup";
import EventPromoSection from "../../Components/About/EventPromotion/EventPromoSection";
import AboutLaptop from "../../Components/AboutLaptop/AboutLaptop";
import LaptopMockupComing from "../../Components/Home/LaptopMockup/LaptopComingSoon";
import CountryDropdown from "../../Components/CountryDropdown/CountryDropdown";
import { useForm } from "react-hook-form";
import CountrySelect from "../../Components/CountryDropdown/CountryDropdown";

const ComingSoon2 = () => {

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <>
            <section classNameName="bg-[#fff5f7] min-h-screen">
                <div className="flex flex-col min-h-screen bg-[#fff5f7] ">
                    <div className="h-[90px] lg:h-[110px] 2xl:h-[150px]">
                        <header className="pt-3 lg:pt-5 2xl:pt-7 lg:pb-4 lg:px-8 fixed  bg-[#fff5f7] w-full z-80">
                            <div className="flex items-center justify-center lg:justify-start  ">
                                <img
                                    src="/Images/logo.png"
                                    alt="SAGAN"
                                    className="w-auto h-18 2xl:h-26"
                                />
                            </div>
                        </header>
                    </div>
                    <main className="flex flex-col items-center justify-center bg-[#FFB5C0] flex-1 px-6 lg:px-8 mb-16 pt-16">
                        <div className="w-full text-center">
                            <h1 className="mb-2 text-[32px] leading-[36px] sm:text-4xl font-right-grotesk  font-bold sm:leading-tight text-[#272727] lg:text-[42px] 2xl:text-[50px]">
                                {" "}
                                HONOURING TRADITIONS OF
                                <br />
                                <span>GIVING - DIGITALLY</span>
                            </h1>
                            <p className=" max-w-lg xl:max-w-2xl text-[12px] font-Inter px-4 mx-auto mb-14 sm:text-lg md:text-[16px]  leading-relaxed text-center text-[#272727] xl:px-1 font-semibold lg:text-[16px] 2xl:text-[20px]">
                                {" "}
                                More than money - messages, memories and meaning.
                            </p>
                            <p className="max-w-lg text-[12px] xl:max-w-[43%] font-Inter px-4 mx-auto mb-14 sm:text-lg md:text-[16px] leading-relaxed text-center text-[#272727] xl:px-1 font-semibold lg:text-[16px] 2xl:text-[20px]">
                                {" "}

                                {/* SaganOnline is redefining digital gift-giving, making every moment more meaningful. Join our waiting list today and be among the first to access exclusive features, early invites and special perks."  with  "SaganOnline is a new way to give culturally meaningful cash gifts for weddings, celebrations and life milestones. Join the early access list to be among the first to experience a more thoughtful, modern way of giving - designed for families, traditions and moments that matter. */}
                                A modern way to give cash gifts  - designed for families, traditions,
                                and celebrations that matter.
                                Remove everything else in that paragraph. Only leave as is
                            </p>
                            <p className=" max-w-lg xl:max-w-2xl text-[12px] font-Inter px-4 mx-auto mb-12 sm:text-lg md:text-[16px]  leading-relaxed text-center text-[#272727] xl:px-1 font-semibold lg:text-[16px] 2xl:text-[20px]">
                                {" "}
                                “ Sign up now and get ready to give and receive  <br />
                                gifts in a whole new way! ”
                                {" "}
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] max-w-sm min-[1766px]:!max-w-[20.5%] mx-auto space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4.5 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[14px] font-Inter font-[500] 2xl:px-6 2xl:py-4 text-left placeholder-gray-400 transition-all bg-white sm:border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent 2xl:text-[16px] "
                                    required=""
                                />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4.5 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[14px] font-Inter font-[500] 2xl:px-6 2xl:py-4 text-left placeholder-gray-400 transition-all bg-white sm:border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent 2xl:text-[16px] relative z-50"
                                    required=""
                                />


                                <CountrySelect
                                    name="country"
                                    register={register}
                                    setValue={setValue}
                                />
                                <button
                                    type="submit"
                                    className="w-full font-Inter  px-8 text-[12px] sm:text-[15.5px] py-3 2xl:py-4 font-semibold text-white transition-all duration-200 transform bg-[#272727] rounded-full hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                                >
                                    <span>Get early access </span>
                                </button>
                            </form>
                        </div>
                        <div className="bg-[#FFB5C0] pt-64 lg:pt-20">
                            <AboutLaptop></AboutLaptop>
                        </div>
                    </main>



                    <div className=" hidden pb-12 lg:block">
                        <LaptopMockupComing></LaptopMockupComing>
                    </div>
                    <div className=" lg:hidden pb-12 ">
                        <MobileMockup></MobileMockup>
                    </div>

                    <footer className="px-8 py-7 2xl:py-10 bg-[#FFB5C0]">
                        <div className="mx-auto flex flex-col justify-center gap-4 2xl:gap-8">
                            <div className="flex items-center justify-center ">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            src="/Images/logo.png"
                                            alt="SAGAN"
                                            className="w-auto h-16 sm:h-16 lg:h-20 2xl:h-28"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center flex justify-center">
                                <p className=" text-[10px] max-w-[75%] sm:text-[14px] sm:max-w-sm xl:!max-w-[100%] lg:text-[16px] font-semibold font-Inter 2xl:text-[19px] text-[#272727]">
                                    © 2026 - SAGAN Online | All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
};

export default ComingSoon2;
