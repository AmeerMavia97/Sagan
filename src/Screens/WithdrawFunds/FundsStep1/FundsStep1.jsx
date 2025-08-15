import React from 'react'

const FundsStep1 = ({onNext}) => {
    return (
        <>
            <section className='flex flex-col justify-center items-center py-8 2xl:py-12' >
                <div className='bg-[#FFE2E2] px-14 rounded-[10px] w-[85%] py-10 '>
                    <h2 className='font-Inter font-bold mt-3 text-[22px] 2xl:text-[37px]'>Welcome To Sagan Online</h2>
                    <h1 className='font-Inter font-[300] text-[50px] 2xl:text-[75px]'>March 14th, 2025</h1>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center py-8 2xl:py-6'>
                <div className='w-[85%]'>
                    <h1 className='font-Inter font-bold text-[32px] 2xl:text-[60px]'>Withdraw Funds</h1>
                    <p className='font-Inter font-[500] text-[#6D6D6D] text-[14px] leading-[19px] 2xl:leading-[27px] 2xl:text-[20px]'>Please enter your Australian account details. Due to government regulations we are only allowed to transfer the funds to the organiser of the collection not to a third party. Allow 2 business days for funds to clear.</p>
                </div>
                <div className='w-[85%] bg-[#F9F9F9] rounded-[15px] flex grid-cols-2 px-10 2xl:px-14 mt-9 2xl:mt-14 pt-12 2xl:pt-16 pb-20 2xl:pb-24 gap-28'>
                    <div className='w-[50%] flex flex-col gap-10'>
                        <h1 className='font-Inter text-[21px] 2xl:text-[35px] text-[#272727] font-[600]'>Calculate the amount you’ll receive</h1>
                        <form action="" className='flex flex-col gap-12 w-[95%]'>
                            <div className='flex items-center justify-between'>
                                <label htmlFor="" className='font-Inter font-bold text-[18px] 2xl:text-[25px] text-[#272727]'>Enter amount</label>
                                 <input type="number" placeholder='XXX' className='bg-white mt-3 border-[#000000] border-[1.5px] 2xl:px-5  py-2 2xl:py-4.5 rounded-[6px] 2xl:rounded-[10px] text-[15px] 2xl:text-[25px] w-[30%] text-end' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <h5 htmlFor="" className='font-Inter font-bold text-[18px] 2xl:text-[25px] text-[#272727]'>Enter amount</h5>
                                <h5 htmlFor="" className='font-Inter font-bold text-[18px] 2xl:text-[25px] text-[#272727]'>- $0.42</h5>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h5 htmlFor="" className='font-Inter font-bold text-[18px] 2xl:text-[25px] text-[#272727]'>Enter amount</h5>
                                <h5 htmlFor="" className='font-Inter font-bold text-[18px] 2xl:text-[25px] text-[#272727]'>$20.58</h5>
                            </div>
                        </form>
                    </div>
                    <div className='w-[45%]'>
                        <h1 className='font-Inter text-[22px] 2xl:text-[35px] text-[#272727] font-[600]'>Organiser bank details</h1>
                        <form action="" className='flex flex-col gap-7 2xl:gap-14 mt-8 2xl:mt-13'>
                            <div className='grid grid-cols-2 gap-4 2xl:gap-7'>
                                <span>
                                    <label htmlFor="" className='font-Inter text-[18px] 2xl:text-[25px] font-bold text-[#272727] '>BSB code</label>
                                    <input type="text" placeholder='XXX' className='bg-white mt-3 border-[#000000] border-[1.5px] py-2.5 px-3 2xl:px-5 2xl:py-4.5 rounded-[7px] 2xl:rounded-[10px] text-[15px] 2xl:text-[25px] w-full' />
                                </span>
                                 <span>
                                    <label htmlFor="" className='font-Inter  text-[18px] 2xl:text-[25px] font-bold text-[#272727] '>Account Number</label>
                                    <input type="text" placeholder='XXX' className='bg-white mt-3 border-[#000000] border-[1.5px] py-2.5 px-3 2xl:px-5 2xl:py-4.5 rounded-[7px] 2xl:rounded-[10px] text-[15px] 2xl:text-[25px] w-full' />
                                </span>
                            </div>
                            <div>
                                 <span>
                                    <label htmlFor="" className='font-Inter  text-[19px] 2xl:text-[25px] font-bold text-[#272727] '>Account Number</label>
                                    <input type="text" placeholder='XXX' className='bg-white mt-3 border-[#000000] border-[1.5px] py-3 px-3 2xl:px-5 2xl:py-4.5 rounded-[7px] 2xl:rounded-[10px] text-[15px] 2xl:text-[25px] w-full' />
                                </span>
                            </div>
                            <div>
                                <button onClick={()=>{onNext()}} className='bg-[#FFB5C0] font-semibold text-[17px] 2xl:text-[30px] rounded-full w-full py-3 2xl:py-4 font-Inter'>Withdraw</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default FundsStep1