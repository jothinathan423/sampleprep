import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Button, Typography } from '@mui/material';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setError(error.message);
            return;
        }

        const { data: clientSecret } = await axios.post('/api/create-payment-intent', { amount });
        const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
        });

        if (confirmError) {
            setError(confirmError.message);
        } else {
            alert('Payment successful!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
                Pay ${amount}
            </Button>
        </form>
    );
};

const Payment = ({ amount }) => (
    <Elements stripe={stripePromise}>
        <PaymentForm amount={amount} />
    </Elements>
);

export default Payment;