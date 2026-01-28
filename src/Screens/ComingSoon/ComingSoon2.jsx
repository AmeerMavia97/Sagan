import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LaptopMockup from "../../Components/Home/LaptopMockup/LaptopMockup";
import MobileMockup from "../../Components/Home/MobileMockup/MobileMockup";
import EventPromoSection from "../../Components/About/EventPromotion/EventPromoSection";
import AboutLaptop from "../../Components/AboutLaptop/AboutLaptop";
import LaptopMockupComing from "../../Components/Home/LaptopMockup/LaptopComingSoon";
import CountryDropdown from "../../Components/CountryDropdown/CountryDropdown";
import { Controller, useForm } from "react-hook-form";
import CountrySelect from "../../Components/CountryDropdown/CountryDropdown";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import { comingSoonForm } from "../../services/eventServices";
import Swal from "sweetalert2";




const ComingSoon2 = () => {
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef(null);
    const { register, handleSubmit, setValue, control, reset, formState: { errors } } = useForm({
        mode: "onChange",
    });

    const mutation = useMutation({
        mutationFn: (data) => comingSoonForm(data),
        onError: (err) => {
            setLoading(false); // stop loading on error
            alert(err?.message || "Something went wrong!");
        },
    });

    const onSubmit = (data) => {
        const { email, fullName, country, recaptcha } = data;

        if (!recaptcha) {
            alert("Please verify that you are human!");
            return;
        }

        setLoading(true); // start loading

        const payload = { email, name: fullName, country, recaptcha };

        mutation.mutate(payload, {
            onSuccess: () => {
                setLoading(false); // stop loading

                // SweetAlert with high z-index
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "You are on the list! We will be in touch soon.",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        title: "!text-[25px] !font-[600] font-Inter ",
                        popup: "z-[999999999999999999]",
                    },
                });

                reset({ email: "", fullName: "", recaptcha: "" });
                recaptchaRef.current.reset();
            },
        });
    };


   
    return (
        <>
            <section classNameName="bg-[#fff5f7] min-h-screen">
                <div className="flex flex-col min-h-screen bg-[#fff5f7] ">
                    <div className="h-[90px] lg:h-[110px] 2xl:h-[150px] relative z-[]">
                        <header className="pt-5 pb-4 lg:pt-5 2xl:pt-7 lg:pb-4 lg:px-8 fixed  bg-[#fff5f7] w-full z-[50] ">
                            <div className="flex items-center justify-center lg:justify-start  ">
                                <img
                                    src="/Images/Newlogo.png"
                                    alt="SAGAN"
                                    className="w-auto h-14 xl:h-18 2xl:h-24"
                                />
                            </div>
                        </header>
                    </div>
                    <main className="flex flex-col items-center justify-center bg-[#FFB5C0] flex-1 px-6 lg:px-8 mb-16 pt-12">
                        <div className="w-full text-center">
                            <h1 className="mb-2 text-[32px] leading-[36px] sm:text-4xl font-right-grotesk  font-bold sm:leading-tight text-[#272727] lg:text-[42px] 2xl:text-[50px]">
                                {" "}
                                HONOURING TRADITIONS OF
                                <br />
                                <span>GIVING - DIGITALLY</span>
                            </h1>

                            <p className="max-w-lg text-[13px] xl:max-w-[43%] font-Inter px-4 mx-auto mb-6 sm:text-lg mt-4 md:text-[16px] leading-relaxed text-center text-[#272727] xl:px-1 font-semibold lg:text-[16px] 2xl:text-[20px]">
                                {" "}

                                A modern way to give cash gifts - designed for meaningful family celebrations.

                            </p>
                            <p className=" max-w-lg xl:max-w-2xl text-[13px] font-Inter px-4 mx-auto mb-6 sm:text-lg md:text-[16px]  leading-relaxed text-center text-[#272727] xl:px-1 font-semibold lg:text-[16px] 2xl:text-[20px]">
                                {" "}
                                Send cash with a video message. Receive it with memories.

                                {" "}
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] max-w-sm min-[1766px]:!max-w-[20.5%] mx-auto space-y-4 flex flex-col justify-center items-center ">

                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    placeholder="Enter your email"
                                    className={`w-full px-4.5 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[14px] 
    font-Inter font-[500] 2xl:px-6 2xl:py-4 
    placeholder-gray-400 transition-all bg-white sm:border rounded-full 
    focus:outline-none focus:ring-2 focus:border-transparent 2xl:text-[16px]
    ${errors?.email ? "border-red-500 placeholder:text-red-400" : "border-gray-200"}`}
                                />

                                <input
                                    type="text"
                                    {...register("fullName", {
                                        required: "Name is required",
                                    })}
                                    placeholder="Enter your Name"
                                    className={`w-full px-4.5 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[14px] 
    font-Inter font-[500] 2xl:px-6 2xl:py-4 
    placeholder-gray-400 transition-all bg-white sm:border rounded-full 
    focus:outline-none focus:ring-2 focus:border-transparent 2xl:text-[16px]
    ${errors?.fullName ? "border-red-500 placeholder:text-red-400" : "border-gray-200"}`}
                                />

                                <CountrySelect
                                    name="country"
                                    register={register}
                                    setValue={setValue}
                                    errors={errors}
                                />

                                <Controller
                                    name="recaptcha"
                                    control={control}
                                    rules={{ required: 'Please verify that you are human!' }}
                                    render={({ field }) => (
                                        <ReCAPTCHA
                                            sitekey="6LfC1VAsAAAAAJ1cDPzyze4YVtryQdvM3EgCbOSc"
                                            onChange={field.onChange}
                                            ref={recaptchaRef}
                                        />
                                    )}
                                />
                                {errors.recaptcha && <p className="text-red-500 text-sm text-start font-para">{errors.recaptcha.message}</p>}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full font-Inter  px-8 text-[12px] sm:text-[15.5px] py-3 2xl:py-4 font-semibold text-white transition-all duration-200 transform bg-[#272727] rounded-full hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                                >
                                    {loading ? "Processing..." : "Get early access"}
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
