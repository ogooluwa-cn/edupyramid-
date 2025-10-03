'use client';
import React from 'react';

interface CourseCardProps {
  title: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  available: boolean;
  onOpen: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  rating, 
  reviews, 
  description, 
  image, 
  available,   // ✅ added this
  onOpen 
}) => {

  return (
    <div className="bg-white border border-gray-050 rounded-2xl shadow-sm p-8 w-full max-w-sm flex flex-col overflow-hidden hover:shadow-md transition">
      <div>
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-52 object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 text-center">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-3">{title}</h2>

        {/* Rating */}
        <div className="flex justify-center items-center gap-1 mb-3 text-yellow-500 text-sm">
          <span className="font-medium text-gray-800">{rating}</span>
          {"⭐".repeat(5)}
          <span className="text-gray-700 font-semibold ml-2">
            ({reviews} Reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Button */}
      <button
        onClick={available ? onOpen : undefined}
        className={`mt-auto px-4 py-2 rounded-full w-full font-medium transition
          ${available ? 'bg-[#0c0f24] text-white hover:bg-[#1a1f3d]' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
      >
        {available ? 'Explore Course' : 'Currently Not Available'}
      </button>


      </div>
      </div>
    </div>
  );
};

export default CourseCard;
