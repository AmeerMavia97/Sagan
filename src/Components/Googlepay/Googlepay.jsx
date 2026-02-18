import React, { useEffect, useRef } from "react";

const GooglePayButton = () => {
  const googlePayButtonRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.payments && window.google.payments.api) {
      const paymentsClient = new window.google.payments.api.PaymentsClient({ environment: "TEST" });

      const isReadyToPayRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"],
          },
        }],
      };

      paymentsClient.isReadyToPay(isReadyToPayRequest)
        .then(response => {
          if (response.result) {
            const button = paymentsClient.createButton({
              onClick: () => onGooglePaymentButtonClicked(paymentsClient),
              buttonColor: "black",
              buttonType: "short",
            });
            googlePayButtonRef.current.appendChild(button);
          } else {
            console.log("Google Pay is not available.");
          }
        })
        .catch(err => console.error("isReadyToPay error:", err));
    }
  }, []);

  const onGooglePaymentButtonClicked = (paymentsClient) => {
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: "CARD",
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",  // replace 'example' with your gateway, e.g. 'stripe'
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        },
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"],
          billingAddressRequired: true,
          billingAddressParameters: {
            format: "FULL",
          },
        },
      }],
      merchantInfo: {
        merchantId: "01234567890123456789", // Replace with your merchantId or remove in TEST
        merchantName: "Example Merchant",
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: "10.00",
        currencyCode: "USD",
        countryCode: "US",
      },
      callbackIntents: ["PAYMENT_AUTHORIZATION"],
    };

    paymentsClient.loadPaymentData(paymentDataRequest)
      .then(paymentData => {
        // Process payment here
        console.log("Payment successful", paymentData);
        alert("Payment authorized! Check console for payment data.");
      })
      .catch(err => {
        console.error("loadPaymentData failed", err.statusCode, err.statusMessage);
        alert("Payment failed or cancelled.");
      });
  };

  return <div ref={googlePayButtonRef}></div>;
};

export default GooglePayButton;
