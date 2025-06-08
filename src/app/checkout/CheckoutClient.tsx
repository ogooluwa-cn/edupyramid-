'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

declare global {
  interface Window {
    PaystackPop?: any;
  }
}

export default function CheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get('course') || 'Course';

  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  const priceInDollars = 99;
  const priceInKobo = priceInDollars * 100 * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const payWithPaystack = () => {
    const handler = window.PaystackPop?.setup({
      key: 'pk_test_927ae64fc65930bfba3a8c0bf09e44bd755044c3',
      email: form.email,
      amount: priceInKobo,
      currency: 'NGN',
      ref: String(Math.floor(Math.random() * 1000000000 + 1)),
      callback: function (response: any) {
        alert('Payment successful! Reference: ' + response.reference);
      },
      onClose: function () {
        alert('Transaction closed.');
      },
    });

    handler?.openIframe();
  };

  if (loading) {
    return <div className="text-center py-10 text-blue-700">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8 text-blue-700">Checkout</h1>

        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-6 rounded">
            <h2 className="text-lg font-semibold mb-2">Course Summary</h2>
            <p className="mb-1"><strong>Course Name:</strong> {selectedCourse}</p>
            <p><strong>Price:</strong> <span className="text-blue-700 font-semibold">${priceInDollars}.00</span></p>
            <p className="text-sm text-gray-600 mt-4">
              Need help?{' '}
              <a href="#" className="text-blue-600 underline">Contact Support</a>
            </p>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
            />

            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
            />

            <button
              onClick={payWithPaystack}
              className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
            >
              Pay ${priceInDollars}.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
