"use client";
import PaystackInline from '@/components/PaystackInline';

export default function PaymentPage() {
  // Retrieve user type from localStorage
  const userType = typeof window !== 'undefined' ? localStorage.getItem('userType') : 'regular';
  const email = typeof window !== 'undefined' ? localStorage.getItem('userEmail') || '' : '';

  // Set prices
  const regularPrice = 100000; // Naira
  const itSiwesPrice = 35000; // Naira

  // Choose price based on user type
  const amount = userType === 'it/siwes' ? itSiwesPrice : regularPrice;

  const handleSuccess = (reference: string) => {
    // Send reference to backend for verification
    console.log('Payment reference:', reference);
  };

  return (
    <div>
      <h2>Pay for your course</h2>
      <PaystackInline email={email} amount={amount} onSuccess={handleSuccess} />
      <p>
        You are paying for: <strong>{userType === 'it/siwes' ? 'IT/SIWES' : 'Regular'}</strong>
      </p>
      <p>
        Amount: <strong>₦{amount}</strong>
      </p>
    </div>
  )
}