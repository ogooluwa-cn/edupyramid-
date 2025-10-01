'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PaystackButton from '@/components/PaystackInline';

export default function PaymentPage() {
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [plan, setPlan] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedCourse = localStorage.getItem('selectedCourse') || '';
    const storedPlan = localStorage.getItem('selectedPlan') || '';
    const storedPrice = localStorage.getItem('selectedPrice') || '0';

    setEmail(storedEmail);
    setCourse(storedCourse);
    setPlan(storedPlan);
    setAmount(Number(storedPrice));

    if (!storedEmail) {
      router.push('/registration/login');
      return;
    }

    if (!storedCourse || !storedPlan || storedPrice === '0') {
      setError('⚠️ Missing course or plan details.');
    } else {
      setError(null);
    }
  }, [router]);

  const handleSuccess = async (reference: string) => {
    console.log('✅ Payment reference:', reference);

    try {
      const res = await fetch('https://backend-code-3-3qwp.onrender.com/api/paystack/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, email, course, plan, amount }),
      });

      const data = await res.json();
      console.log('✅ Verification response:', data);

      if (res.ok) {
        alert('Payment successful!');
        router.push('/dashboard'); // redirect after payment
      } else {
        alert('⚠️ Payment verification failed.');
      }
    } catch (err) {
      console.error('⚠️ Error verifying payment:', err);
      alert('⚠️ An error occurred while verifying payment.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Pay for your Course</h2>

        {error && (
          <p className="text-red-500 mb-4 text-sm">{error}</p>
        )}

        {!error && (
          <PaystackButton
            email={email}
            amount={amount}
            publicKey="pk_live_cd49bc697f702d246623afb4978d0ad1ac4ac3be"
            onSuccess={handleSuccess}
          />
        )}

        <div className="mt-6 text-gray-700 text-sm">
          <p>Course: <strong>{course || '—'}</strong></p>
          <p>Plan: <strong>{plan || '—'}</strong></p>
          <p>Amount: <strong>₦{amount ? amount.toLocaleString() : '0'}</strong></p>
        </div>
      </div>
    </div>
  );
}
