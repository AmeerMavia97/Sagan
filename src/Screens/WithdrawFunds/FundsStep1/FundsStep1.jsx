import React from 'react'

const FundsStep1 = () => {
    return (
        <>
            <section className='flex flex-col justify-center items-center py-8 2xl:py-12' >
                <div className='bg-[#FFE2E2] px-14 rounded-[10px] w-[82%] py-10 '>
                    <h2 className='font-Inter font-bold mt-3 text-[22px] 2xl:text-[37px]'>Welcome To Sagan Online</h2>
                    <h1 className='font-Inter font-[300] text-[50px] 2xl:text-[75px]'>March 14th, 2025</h1>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center py-8 2xl:py-6'>
                <div className='w-[82%]'>
                    <h1 className='font-Inter font-bold text-[60px]'>Withdraw Funds</h1>
                    <p className='font-Inter font-[500] text-[#6D6D6D] leading-[27px] text-[20px]'>Please enter your Australian account details. Due to government regulations we are only allowed to transfer the funds to the organiser of the collection not to a third party. Allow 2 business days for funds to clear.</p>
                </div>
            </section>
        </>
    )
}

export default FundsStep1