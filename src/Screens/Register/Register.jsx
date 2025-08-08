import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import VerifiedEmail from '../ProtectetdScreens/VerifiedEmail/VerifiedEmail'

const Register = ({ onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [Show , setShow] = useState(false)

    const onSubmit = (data) => {
        console.log('Form Data:', data)
        setShow(true)
        // if (onSuccess) {
        //     onSuccess(data)
        // }
    }

    return (
        <section className='bg-[#ffb5c085] fixed top-0 w-full min-h-screen flex justify-center items-center'>
            <div className='bg-white rounded-2xl overflow-y-scroll h-[89vh] w-[32%] 2xl:w-[25%] flex flex-col justify-start items-center gap-7 py-10 2xl:py-14 px-10 no-scrollbar'>
                <h1 className='font-Inter text-[18.5px] 2xl:text-[22px] font-semibold'>Sign up to continue</h1>

                {/* Form Start */}
                <form className='w-full flex flex-col gap-4 2xl:gap-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>

                        {/* Email */}
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className={`text-[#0b0b0b] w-full text-[13.5px] 2xl:text-[15px] font-Inter font-semibold focus:outline-none placeholder:text-[#BABABA] px-4 2xl:px-5 py-3 2xl:py-3.5 border-b-[1px] border-[#BABABA] ${errors.email ? 'border-red-500 border rounded-t-[10px]' : 'border rounded-t-[10px] border-[#BABABA]'
                                }`}
                            placeholder='Email'
                        />

                        {/* First Name */}
                        <input
                            type="text"
                            {...register("firstName", { required: "First name is required" })}
                            className={`text-[#0b0b0b] w-full text-[13.5px] 2xl:text-[15px] font-Inter font-semibold focus:outline-none placeholder:text-[#BABABA] px-4 2xl:px-5 py-3 2xl:py-3.5 border-b-[1px] border-[#BABABA] ${errors.firstName ? 'border-red-500 border' : 'border-b border-l border-r border-[#BABABA]'
                                }`}
                            placeholder='First Name'
                        />

                        {/* Last Name */}
                        <input
                            type="text"
                            {...register("lastName", { required: "Last name is required" })}
                            className={`text-[#0b0b0b] w-full text-[13.5px] 2xl:text-[15px] font-Inter font-semibold focus:outline-none placeholder:text-[#BABABA] px-4 2xl:px-5 py-3 2xl:py-3.5 border-b-[1px] border-[#BABABA] ${errors.lastName ? 'border-red-500 border' : 'border-b border-l border-r border-[#BABABA]'
                                }`}
                            placeholder='Last Name'
                        />
                        {/* Password */}
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className={`text-[#0b0b0b] w-full text-[13.5px] 2xl:text-[15px] font-Inter font-semibold focus:outline-none placeholder:text-[#BABABA] px-4 2xl:px-5 py-3 2xl:py-3.5 border-b-[1px] border-[#BABABA] ${errors.password ? 'border-red-500 border' : 'border-b border-l border-r border-[#BABABA]'
                                }`}
                            placeholder='Password'
                        />

                        {/* Confirm Password */}
                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                            })}
                            className={`text-[#0b0b0b] w-full text-[13.5px] 2xl:text-[15px] font-Inter font-semibold focus:outline-none placeholder:text-[#BABABA] px-4 2xl:px-5 py-3 2xl:py-3.5 ${errors.confirmPassword ? 'border-red-500 border rounded-b-[10px]' : 'border-b border-l border-r rounded-b-[10px] border-[#BABABA]'
                                }`}
                            placeholder='Confirm Password'
                        />
                    </div>

                    {/* OR Divider */}
                    <div className='flex justify-center items-center gap-7'>
                        <hr className='text-[#d0d0d0] bg-[#d0d0d0] w-full ' />
                        <h1 className='font-Inter text-[#434343] font-semibold text-[15px] 2xl:text-[17px]'>or</h1>
                        <hr className='text-[#d0d0d0] bg-[#d0d0d0] w-full' />
                    </div>

                    {/* Social Buttons */}
                    <div className='w-full flex flex-col gap-3'>
                        <button type="button" className='font-Inter text-[14px] 2xl:text-[17px] font-[500] items-center flex gap-10 2xl:gap-15 px-6 py-3 2xl:py-4 border-[#bdbdbd] border rounded-[13px] w-full'>
                            <img className='w-5 2xl:w-7.5' src="/Images/events/FbIcon.png" alt="" />
                            Sign up with Facebook
                        </button>
                        <button type="button" className='font-Inter text-[14px] 2xl:text-[17px] font-[500] items-center flex gap-10 2xl:gap-15 px-6 py-3 2xl:py-4 border-[#bdbdbd] border rounded-[13px] w-full'>
                            <img className='w-5 2xl:w-7.5' src="/Images/events/Google.png" alt="" />
                            Sign up with Google
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className='mt-2'>
                        <button type='submit' className='w-full bg-[#FFB5C0] border-[#FFB5C0] border text-[14px] 2xl:text-[17px] font-Inter font-semibold rounded-full text-white py-3 2xl:py-4 cursor-pointer hover-btn hover-btn-purple'>
                            <span>Create account</span>
                        </button>
                    </div>
                </form>

                {/* Terms and Login */}
                <div className='flex flex-col justify-center items-center gap-6 px-5 2xl:px-16'>
                    <p className='font-Inter text-[11.4px] 2xl:text-[13px] text-[#AEAEAE] text-center'>
                        By signing up via Google, Facebook or email,
                        I agree to Saganonline’s <Link className='text-[#E8798B]'>Terms</Link> & <Link className='text-[#E8798B]'>Privacy Policy</Link>
                    </p>
                    <h3 className='font-Inter font-semibold text-[13.4px] 2xl:text-[17px] text-[#434343]'>
                        Have an account? <Link className='text-[#E8798B]'>Log in</Link>
                    </h3>
                </div>
            </div>
            {Show && <VerifiedEmail/> }
            

        </section>
    )
}

export default Register
