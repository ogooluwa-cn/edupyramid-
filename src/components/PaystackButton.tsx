// components/PaystackButton.tsx
'use client'; // if using Next.js 13+ app router

import React from 'react';

declare global {
  interface Window {
    PaystackPop?: any;
  }
}

export default function PaystackButton() {
  const payWithPaystack = () => {
    const paystack = window.PaystackPop && window.PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxxx', // Replace with your public key
      email: 'customer@email.com',
      amount: 5000 * 100, // kobo value, 5000 NGN = 500000
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // Unique reference
      callback: function (response: any) {
        alert('Payment complete! Reference: ' + response.reference);
        // Optionally verify the payment on your backend
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });

    paystack.openIframe();
  };

  return (
    <button
      onClick={payWithPaystack}
      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
    >
      Pay Now
    </button>
  );
}
