import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Payment.css";
import Shipment from './Shipment';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#fce883"
            },
            "::placeholder": {
                color: "#87bbfd"
            }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
};

const CardField = ({ onChange }) => (
    <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
);

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange
}) => (
    <div className="FormRow">
        <label htmlFor={id} className="FormRowLabel">
            {label}
        </label>
        <input
            className="FormRowInput"
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
        />
    </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
        className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
        type="submit"
        disabled={processing || disabled}
    >
        {processing ? "Processing..." : children}
    </button>
);

const ErrorMessage = ({ children }) => (
    <div className="ErrorMessage" role="alert">
        <svg width="16" height="16" viewBox="0 0 17 17">
            <path
                fill="#FFF"
                d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
            />
            <path
                fill="#6772e5"
                d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
            />
        </svg>
        {children}
    </div>
);

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
    ]
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51J5mg7E45xXIJL6Pken4BAGMxaEfhq0JtHZ9dTuk9YFdpUD6R0B1PAZi0aeKPHJAlWuLZjkDy4xiEBdDr1MdylSU005q9Xyyif");

const PaymentProccess = (props) => {
    const { service, modalCloseBtn } = props;

    const CheckoutForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        const [error, setError] = useState(null);
        const [cardComplete, setCardComplete] = useState(false);
        const [processing, setProcessing] = useState(false);
        const [paymentMethod, setPaymentMethod] = useState(null);
        const [billingDetails, setBillingDetails] = useState({
            email: "",
            phone: "",
            name: ""
        });
        console.log('Payment method', paymentMethod); // Payment info
        console.log('Billing method', billingDetails); // Billing info

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                // Stripe.js has not loaded yet. Make sure to disable
                // form submission until Stripe.js has loaded.
                return;
            }

            if (error) {
                elements.getElement("card").focus();
                return;
            }

            if (cardComplete) {
                setProcessing(true);
            }

            const payload = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
                billing_details: billingDetails
            });

            setProcessing(false);

            if (payload.error) {
                setError(payload.error);
            } else {
                setPaymentMethod(payload.paymentMethod);
            }
        };

        return paymentMethod ? (
            <div>
                {alert(`Thanks for trying Stripe Elements. No money was charged, but we generated a PaymentMethod: ${paymentMethod.id}`)}
                <Shipment
                    service={service}
                    modalCloseBtn={modalCloseBtn}
                    orderId={paymentMethod.id}
                />
            </div>
        ) : (
            <form className="Form" onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <Field
                        label="Name"
                        id="name"
                        type="text"
                        placeholder="simon hem"
                        required
                        autoComplete="name"
                        value={billingDetails.name}
                        onChange={(e) => {
                            setBillingDetails({ ...billingDetails, name: e.target.value });
                        }}
                    />
                    <Field
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="simonhem@gmail.com"
                        required
                        autoComplete="email"
                        value={billingDetails.email}
                        onChange={(e) => {
                            setBillingDetails({ ...billingDetails, email: e.target.value });
                        }}
                    />
                    <Field
                        label="Phone"
                        id="phone"
                        type="tel"
                        placeholder="(+880) 1712345678"
                        required
                        autoComplete="tel"
                        value={billingDetails.phone}
                        onChange={(e) => {
                            setBillingDetails({ ...billingDetails, phone: e.target.value });
                        }}
                    />
                </fieldset>
                <fieldset className="FormGroup">
                    <CardField
                        onChange={(e) => {
                            setError(e.error);
                            setCardComplete(e.complete);
                        }}
                    />
                </fieldset>
                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                <SubmitButton processing={processing} error={error} disabled={!stripe}>
                    Payment Now
                </SubmitButton>
            </form>
        );
    };

    return (
        <div className="AppWrapper">
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default PaymentProccess;
