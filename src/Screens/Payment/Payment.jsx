import React, { useEffect, useState, useRef } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CircleArrowLeft, CheckCircle2 } from "lucide-react";

const stripePromise = loadStripe("pk_test_51QNhA3CZMEjSlLSVVEV7gw1olyfTdOOYIQRYE5X2lXYofRmkNPrT4h3eiO9vcQIjDGq7sneF3PheuW7dfVv8nJKX000xZhH6aL"); // 🔐 Use your publishable key here

const StripeCardForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      alert(error.message);
    } else {
      console.log("PaymentMethod:", paymentMethod);
      alert(`Demo card payment of $${amount} successful`);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="border border-[#CFCFCF] p-4 rounded-xl bg-white">
        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      </div>
      <div className="text-center">
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-[#FFB5C0] hover-btn hover-btn-purple !border-[#FFB5C0] px-10 py-3 2xl:py-4 mt-6 rounded-full text-[15.5px] lg:text-[17px] 2xl:text-[23px] font-[700] text-[#272727]"
      >
       <span>{loading ? "Processing..." : `PAY $${amount} AUD NOW`} </span> 
      </button>
      </div>
    </form>
  );
};

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState("10.00");
  const paypalRef = useRef();

  const paymentMethods = [
    {
      key: "card",
      label: "Credit/Debit Card",
      icon: "/Images/Payment/credit-card.png",
    },
    { key: "google", label: "Google Pay", icon: "/Images/Payment/Google.png" },
    { key: "paypal", label: "PayPal", icon: "/Images/Payment/Paypal.png" },
  ];

  const handleGooglePay = async () => {
    try {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: "TEST",
      });

const paymentDataRequest = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [
    {
      type: "CARD",
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: ["VISA", "MASTERCARD"],
      },
      tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: {
          gateway: "stripe", // ✅ Use "stripe" instead of "example"
          "stripe:version": "2020-08-27",
          "stripe:publishableKey": "pk_test_51QNhA3CZMEjSlLSVVEV7gw1olyfTdOOYIQRYE5X2lXYofRmkNPrT4h3eiO9vcQIjDGq7sneF3PheuW7dfVv8nJKX000xZhH6aL" // Your real key
        },
      },
    },
  ],
  merchantInfo: {
    merchantName: "Sagan Demo", // you can skip merchantId
  },
  transactionInfo: {
    totalPriceStatus: "FINAL",
    totalPrice: amount,
    currencyCode: "AUD",
    countryCode: "AU",
  },
};


      const paymentData = await paymentsClient.loadPaymentData(
        paymentDataRequest
      );

      alert("Payment successful!");
      console.log(paymentData);
    } catch (err) {
      alert("Payment failed or cancelled.");
      console.error(err);
    }
  };

  useEffect(() => {
    if (selectedMethod === "paypal" && window.paypal && paypalRef.current) {
      window.paypal
        .Buttons({
          style: { layout: "vertical" },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value: amount },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            });
          },
          onCancel: () => alert("Payment cancelled"),
          onError: (err) => {
            console.error(err);
            alert("Error with PayPal payment");
          },
        })
        .render(paypalRef.current);
    }
  }, [selectedMethod, amount]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AQWPlV0CIJsA96XcfF3seTXHlKu9rOd5G63QkW5dgW2GaFo3l8zHPgs0fJiMlVXhA2XE62Jw0RxL356U&currency=USD";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaymentClick = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (selectedMethod === "paypal") {
      alert("Please click the PayPal button below to complete your payment.");
    } else if (selectedMethod === "google") {
      handleGooglePay();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="pt-5 sm:pt-8 pb-10 lg:p-8">
        <div className="flex items-center justify-center">
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

          {/* Amount input */}
          <div className="text-center mb-2">
            <label className="font-Inter font-semibold text-[17px] 2xl:text-[22px] text-[#7E7E7E] block mb-2">
              Enter amount to pay (AUD)
            </label>
            <input
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-[#CFCFCF] rounded-full px-6 py-2 text-center w-[220px] text-[16px] 2xl:text-[20px]"
            />
          </div>

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

          {/* Stripe Elements */}
          {selectedMethod === "card" && (
            <div className="mt-4">
              <Elements stripe={stripePromise}>
                <StripeCardForm amount={amount} />
              </Elements>
            </div>
          )}

          {/* PayPal Button */}
          {selectedMethod === "paypal" && (
            <div ref={paypalRef} className="mt-4"></div>
          )}

          {/* Google Pay Button Trigger */}
          {selectedMethod === "google" && (
            <div className="text-center">
              <button
                onClick={handlePaymentClick}
                className="bg-[#FFB5C0] hover-btn hover-btn-purple !border-[#FFB5C0] px-10 py-3 2xl:py-4 mt-9 rounded-full text-[15.5px] lg:text-[17px] 2xl:text-[23px] font-[700] text-[#272727] "
              >
               <span> PAY ${amount} AUD NOW</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Payment;
