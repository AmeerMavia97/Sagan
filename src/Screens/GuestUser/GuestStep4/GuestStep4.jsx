import GuestLayout from '../../../Components/GuestUser/GuestLayout/GuestLayout'
import Payment from '../../Payment/Payment'

const GuestStep4 = () => {
    return (
        <>
            <div className='flex justify-center '>
                <GuestLayout CurrentStep={3}>
                    {/* <h1 className='font-Inter font-bold leading-[37px] px-20 text-[30px] '>Payment details</h1>
                    <h1 className='font-Inter  px-20 text-[22px] font-[500] text-[#7E7E7E]'>Select payment type</h1>
                    <form action="" className='flex flex-col gap-4'>
                        <div>
                            {paymentMethods.map((method) => (
                                <div
                                    key={method.key}
                                    onClick={() => setSelectedMethod(method.key)}
                                    className={`bg-white border border-[#CFCFCF] flex items-center justify-between px-14 sm:px-16 lg:px-24 py-2.5 2xl:px-28 2xl:py-3 gap-4 cursor-pointer transition-all ${selectedMethod === method.key
                                            ? "border-[#FFB5C0] bg-[#FFEDF0]"
                                            : "hover:border-[#FFB5C0] hover:bg-[#FFEDF0]"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="w-7 md:w-8 2xl:w-10"
                                            src={method.icon}
                                            alt={method.label}
                                        />
                                        <h1 className="font-Inter text-black text-[16px] lg:text-[18px] 2xl:text-[22px] w-[150px] 2xl:w-[180px] text-center">
                                            {method.label}
                                        </h1>
                                    </div>
                                    {selectedMethod === method.key && (
                                        <CheckCircle2 className="text-[#FFB5C0] w-5 h-5" />
                                    )}
                                </div>
                            ))}

                            {selectedMethod === "card" && (
                                <div className="mt-4">
                                    <Elements stripe={stripePromise}>
                                        <StripeCardForm amount={amount} />
                                    </Elements>
                                </div>
                            )}

                            {selectedMethod === "paypal" && (
                                <div ref={paypalRef} className="mt-4"></div>
                            )}
                        </div>
                        <div className='mt-10'>
                            <button className='font-Inter text-[#272727] text-[22px] px-16 py-5 rounded-full bg-[#FFB5C0] font-[700]'>PAY $10.00 AUD NOW</button>
                        </div>
                    </form> */}
                     <Payment></Payment>
                </GuestLayout>
            </div>
        </>
    )
}

export default GuestStep4