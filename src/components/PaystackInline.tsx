'use client';

import { useEffect } from 'react';

interface PaystackInlineProps {
  email: string;
  amount: number; // Amount in Naira
  onSuccess?: (reference: string) => void;
}

const PaystackInline: React.FC<PaystackInlineProps> = ({ email, amount, onSuccess }) => {
  useEffect(() => {
    // Load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payWithPaystack = () => {
    const handler = (window as any).PaystackPop.setup({
      key: 'pk_live_cd49bc697f702d246623afb4978d0ad1ac4ac3be', // Replace with your live public key
      email,
      amount: amount * 100, // Convert Naira to Kobo
      currency: 'NGN',
      callback: function (response: any) {
        alert('Payment successful! Reference: ' + response.reference);
        if (onSuccess) onSuccess(response.reference);
        // Send reference to backend for verification
        fetch('https://your-backend-url.com/api/verify-paystack', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reference: response.reference, email }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.status === 'success') {
              alert('Payment verified on backend!');
            } else {
              alert('Payment verification failed!');
            }
          })
          .catch(() => alert('Error verifying payment!'));
      },
      onClose: function () {
        alert('Payment window closed');
      },
    });
    handler.openIframe();
  };

  return (
    <button
      type="button"
      onClick={payWithPaystack}
      className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
    >
      Pay Now
    </button>
  );
};

export default PaystackInline;