'use client';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

interface Plan {
  name: 'SIWES' | 'IT' | 'REGULAR';
  price: number;
}

interface Course {
  title: string;
  description: string;
  plans: Plan[];
}

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const featuresMap: Record<string, string[]> = {
  SIWES: [
    'Design Thinking and user needs analysis',
    'Basic Figma for wireframing and prototyping',
    'Mini-project: Mobile app wireframe',
  ],
  IT: [
    'All SIWES features',
    'User research, personas, and information architecture',
    'High-fidelity UI design systems, accessibility',
    'Portfolio creation and setup',
  ],
  REGULAR: [
    'All SIWES & IT features',
    'Micro-interactions, responsiveness, and animation',
    'UI/UX design systems, accessibility, and case studies',
    'Portfolio creation and setup',
  ],
};

const durationMap: Record<string, string> = {
  SIWES: '4 Months',
  IT: '10 Months',
  REGULAR: '12 Months',
};

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const router = useRouter();

  const handleProceedToPayment = (plan: Plan) => {
    localStorage.setItem('selectedCourse', course.title);
    localStorage.setItem('selectedPlan', plan.name);
    localStorage.setItem('selectedPrice', String(plan.price));
    router.push('/payment');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70">
      <div
        className="relative rounded-[30px] p-8 w-full max-w-6xl text-white max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{
          backgroundImage: "url('/card.png')", // 👈 your modal card background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-xl hover:text-gray-300"
        >
          <FaTimes size={24} />
        </button>

        {/* Title & Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{course.title}</h2>
        <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          {course.description}
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {course.plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-black/30 border border-white/10 rounded-3xl p-6 text-center flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{durationMap[plan.name]}</p>
                <p className="text-3xl font-bold mb-6">₦{plan.price.toLocaleString()}</p>

                <ul className="text-sm space-y-3 text-left">
                  {featuresMap[plan.name].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BsCheckCircleFill className="text-green-400 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleProceedToPayment(plan)}
                className="mt-6 bg-white text-black font-medium rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
