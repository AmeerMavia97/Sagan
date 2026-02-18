import React, { useEffect, useRef, useState } from "react";

const Payment = () => {
  const paypalRef = useRef(null);
  const [paypalButtonsInstance, setPaypalButtonsInstance] = useState(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Load PayPal SDK script
  useEffect(() => {
    if (window.paypal) {
      setSdkReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AQWPlV0CIJsA96XcfF3seTXHlKu9rOd5G63QkW5dgW2GaFo3l8zHPgs0fJiMlVXhA2XE62Jw0RxL356U&currency=USD";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Initialize PayPal Buttons but don't render to DOM, just keep instance
  useEffect(() => {
    if (!sdkReady) return;

    const buttons = window.paypal.Buttons({
      style: { layout: "vertical" },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "10.00",
              },
            },
          ],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
        });
      },
      onCancel: () => {
        alert("Payment cancelled");
      },
      onError: (err) => {
        console.error(err);
        alert("Error with PayPal payment");
      },
      commit: true,
    });

    setPaypalButtonsInstance(buttons);
  }, [sdkReady]);

  const handlePayClick = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (selectedMethod === "paypal") {
      if (!paypalButtonsInstance) {
        alert("PayPal SDK not loaded yet.");
        return;
      }
      // Programmatically trigger PayPal button click to open PayPal checkout popup
      paypalButtonsInstance
        .render(paypalRef.current)
        .then(() => {
          // After rendering, call the 'click' event programmatically
          const button = paypalRef.current.querySelector("button");
          if (button) {
            button.click();
          }
        });
      return;
    }

    // For other methods, just do your current redirect
    alert("Currently only PayPal integration is supported in this example.");
  };

  const paymentMethods = [
    { key: "paypal", label: "PayPal", icon: "/Images/Payment/Paypal.png" },
    // Add other methods here if needed
  ];

  return (
    <div>
      <h1>Select payment type</h1>
      {paymentMethods.map((method) => (
        <div
          key={method.key}
          onClick={() => setSelectedMethod(method.key)}
          style={{
            border: selectedMethod === method.key ? "2px solid pink" : "1px solid gray",
            padding: "10px",
            cursor: "pointer",
            width: "150px",
            marginBottom: "10px",
          }}
        >
          <img src={method.icon} alt={method.label} width={30} />
          <span>{method.label}</span>
        </div>
      ))}

      <button onClick={handlePayClick}>PAY $10.00 AUD NOW</button>

      {/* Invisible div to render PayPal buttons */}
      <div ref={paypalRef} style={{ position: "absolute", left: "-9999px", top: "-9999px" }}></div>
    </div>
  );
};

export default Payment;
