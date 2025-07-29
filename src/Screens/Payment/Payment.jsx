import React, { useState } from "react";
import { CircleArrowLeft, CheckCircle2 } from "lucide-react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Components/StripeCheckOutForm/StripeCheckOutForm";

const stripePromise = loadStripe(
  "sk_test_51RqHG6CwyVX8YENw2vE6COIp8cXAMVbTHX8GP2qVVSjNhQZy8gjtPqHSPExgbZYQmzIjBH0awAHNithMRq2abkKx00udbOrDKe"
);

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      key: "card",
      label: "Credit/Debit Card",
      icon: "/Images/Payment/credit-card.png",
    },
    { key: "google", label: "Google Pay", icon: "/Images/Payment/Google.png" },
    { key: "paypal", label: "PayPal", icon: "/Images/Payment/Paypal.png" },
  ];
  const checkoutLinks = {
    card: "https://buy.stripe.com/test_7sY9AS7kRdp42sWau51ZS00",
    google: "https://buy.stripe.com/test_7sY9AS7kRdp42sWau51ZS00",
    paypal: "https://buy.stripe.com/test_7sY9AS7kRdp42sWau51ZS00",
  };

  const handlePaymentClick = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Use same link for all methods
    const link = checkoutLinks;
    window.location.href = link;
  };
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="pt-5 sm:pt-8 pb-10 lg:p-8">
        <div className="flex items-center justify-center ">
          <img
            src="/Images/logo.png"
            alt="SAGAN"
            className="h-16 md:h-20 2xl:h-24"
          />
        </div>
      </header>

      <section className="sm:pb-24 md:pb-32 2xl:pb-36 sm:pt-10 sm:px-8 2xl:px-12 sm:bg-[#FFF5F7] rounded-[20px] sm:shadow-lg mt-10 mb-24 flex flex-col gap-16 md:gap-20 2xl:gap-24">
        {/* Progress bar */}
        <div className="flex justify-center items-center gap-4 px-1.5 sm:px-0">
          <CircleArrowLeft className="size-5.5 2xl:size-7 text-[#FFB5C0]" />
          <div className="relative w-full max-w-lg">
            <div className="w-full h-0.5 2xl:h-1 bg-[#FFB5C0] rounded-full" />
            <div className="absolute top-1/2 left-0 w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
            <div className="absolute top-1/2 left-2/3 w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
            <div className="absolute top-1/2 left-full -translate-x-full w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
          </div>
        </div>

        {/* Payment Selection */}
        <div className="w-max flex flex-col justify-center gap-5">
          <div className="text-center">
            <h1 className="font-Inter font-semibold text-[23px] lg:text-[27px] 2xl:text-[30px] mb-4">
              Payment details
            </h1>
            <p className="font-Inter font-semibold text-[16px] lg:text-[17px] 2xl:text-[22px] text-[#7E7E7E]">
              Select payment type
            </p>
          </div>

          {/* {paymentMethods.map((method) => (
            <div
              key={method.key}
              onClick={() => {
                setSelectedMethod(method.key);
                setShowStripeForm(false); // reset form on change
              }}
              className={`bg-white border border-[#CFCFCF] flex items-center justify-between px-14 sm:px-16 lg:px-20 xl:px-20 py-2.5 2xl:px-28 2xl:py-3 gap-4 cursor-pointer transition-all ${
                selectedMethod === method.key
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
          ))} */}
          {paymentMethods.map((method) => (
            <div
              key={method.key}
              onClick={() => setSelectedMethod(method.key)}
              className={`bg-white border border-[#CFCFCF] flex items-center justify-between px-14 sm:px-16 lg:px-24 py-2.5 2xl:px-28 2xl:py-3 gap-4 cursor-pointer transition-all ${
                selectedMethod === method.key
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

          <div className="text-center">
            <button
              onClick={handlePaymentClick}
              className="bg-[#FFB5C0] hover-btn hover-btn-purple !border-[#FFB5C0] px-10 py-3 2xl:py-4 mt-9 rounded-full text-[15.5px] lg:text-[17px] 2xl:text-[23px] font-[700] text-[#272727]"
            >
              <span>PAY $10.00 AUD NOW</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
