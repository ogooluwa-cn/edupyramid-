'use client';

import { useEffect, useState } from 'react';

interface PaystackButtonProps {
  email: string;
  amount: number; // in Naira
  publicKey: string;
  onSuccess?: (reference: string) => void;
  onClose?: () => void;
}

const PaystackButton: React.FC<PaystackButtonProps> = ({
  email,
  amount,
  publicKey,
  onSuccess,
  onClose,
}) => {
  const [paystackReady, setPaystackReady] = useState(false);

  // Load Paystack script once
  useEffect(() => {
    if (!(window as any).PaystackPop) {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      script.onload = () => setPaystackReady(true);
      document.body.appendChild(script);
    } else {
      setPaystackReady(true);
    }
  }, []);

  const handlePayment = () => {
    const PaystackPop = (window as any).PaystackPop;

    if (!PaystackPop) {
      alert('⚠️ Paystack not loaded. Refresh the page.');
      return;
    }

    if (amount <= 0) {
      alert('⚠️ Invalid amount for payment.');
      return;
    }

    const handler = PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100, // in Kobo
      currency: 'NGN',
      callback: (response: any) => {
        console.log('✅ Payment successful:', response.reference);
        if (onSuccess) onSuccess(response.reference);
      },
      onClose: () => {
        console.log('❌ Payment closed by user.');
        if (onClose) onClose();
      },
    });

    handler.openIframe();
  };

  return (
    <button
      type="button"
      disabled={!paystackReady}
      onClick={handlePayment}
      className={`px-6 py-3 rounded-full font-semibold transition ${
        paystackReady
          ? 'bg-[#04011bff] text-white hover:bg-blue-800'
          : 'bg-gray-400 text-gray-200 cursor-not-allowed'
      }`}
    >
      {paystackReady ? 'Pay Now' : 'Loading...'}
    </button>
  );
};

export default PaystackButton;
