'use client';

import React, { useState } from 'react';
import CourseModal from './CourseModal';

interface CourseCardProps {
  title: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  rating,
  reviews,
  description,
  image,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="border-2 border-stone-400 rounded-[30px] text-center shadow-md p-4 hover:shadow-lg transition duration-200 w-full sm:w-[400px] max-w-full m-4 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img
          src={image}
          alt={title}
          className="rounded-md h-[200px] sm:h-[60%] w-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="text-yellow-500 text-sm mb-1">
          {'★'.repeat(Math.floor(rating))}{' '}
          <span className="text-gray-600">({reviews} Reviews)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
        <button className="w-full bg-blue-900 text-white py-2 rounded-md text-sm hover:bg-blue-800">
          Explore Course
        </button>
      </div>

      {showModal && (
        <CourseModal
          course={{ title, description }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default CourseCard;
