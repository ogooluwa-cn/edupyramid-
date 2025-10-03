'use client';
import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseModal from '@/components/CourseModal';

const courses = [
  {
    title: "UI/UX Design",
    rating: 4.6,
    reviews: 132,
    description: "Learn to craft seamless digital experiences by mastering user research, wireframing, prototyping, and design tools used by top designers.",
    image: "/uiux.png",
        available: true,
    plans: [
      { name: "SIWES", price: 25000 },
      { name: "IT", price: 59999 },
      { name: "REGULAR", price: 149999 },
    ],
  },
  {
    title: "Front-End Engineering",
    rating: 4.7,
    reviews: 110,
    description: "Build responsive, interactive websites with HTML, CSS, JavaScript, and modern frameworks like React — the core of user-facing applications.",
    image: "/front.png",
        available: true,
    plans: [
      { name: "SIWES", price: 45999 },  
      { name: "IT", price: 89999 },
      { name: "REGULAR", price: 199999 },
    ],
  },
  {
    title: "Screenwriting",
    rating: 4.5,
    reviews: 98,
    description: "Master the art of writing for film and TV. Learn story structure, dialogue, character arcs, and how to pitch compelling scripts.",
    image: "/screen.png",
        available: true,
    plans: [
      { name: "SIWES", price: 19999 },  
      { name: "IT", price: 39999 },
      { name: "REGULAR", price: 99999 },
    ],
  },
  {
    title: "Desktop Publishing",
    rating: 4.6,
    reviews: 89,
    description: "Master the layout and design of professional documents, brochures, and publications using tools like CorelDRAW, InDesign, and Publisher.",
    image: "/laptop.png",
        available: true,
    plans: [
      { name: "SIWES", price: 30000 },  
      { name: "IT", price: 74999 },
      { name: "REGULAR", price: 250000 },
    ],
  },
  {
    title: "Database Management",
    rating: 4.8,
    reviews: 122,
    description: "Learn to organize and manage data using tools like Microsoft access and SQL for real-world applications.",
    image: "/sql.png",
        available: true,
    plans: [
      { name: "SIWES", price: 21999 },
      { name: "IT", price: 54999 },
      { name: "REGULAR", price: 149999 },
    ],
  },
  {
    title: "Generative AI Tools",
    rating: 4.9,
    reviews: 76,
    description: "Explore the power of AI-driven tools like ChatGPT, DALL·E, and others to automate tasks, boost creativity, and streamline workflows.",
    image: "/ai.png",
        available: false,
    plans: [
      { name: "SIWES", price: 1000 },
      { name: "IT", price: 4000 },
      { name: "REGULAR", price: 1500 },
    ],
  },
  {
    title: "Virtual Assistant",
    rating: 4.5,
    reviews: 64,
    description: "Gain practical skills to support businesses remotely — from email management and scheduling to customer support and research tasks.",
    image: "/laptop2.png",
        available: false,
    plans: [
      { name: "SIWES", price: 19999 },
      { name: "IT", price: 45999 },
      { name: "REGULAR", price: 114999 },
    ],
  },
  {
    title: "Graphic Design",
    rating: 4.7,
    reviews: 104,
    description: "Learn to create stunning visuals using tools like Adobe Photoshop, Illustrator, and Canva — from branding to digital content design.",
    image: "/square.png",
        available: false,
    plans: [
      { name: "SIWES", price: 19999 },
      { name: "IT", price: 49999 },
      { name: "REGULAR", price: 114999 },
    ],
  },
];

export default function Programmes() {
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

  return (
    <main className="px-6 py-12 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-4">Explore our courses</h1>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Our Tech And Management Programmes Are Designed And Delivered By Seasoned Professionals,
        Blending Theory With Hands-On Experience To Prepare You For Today’s Evolving Workplace.
      </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {courses.map((course, index) => (
        <CourseCard 
          key={index} 
          {...course} 
          onOpen={() => setSelectedCourse(course)} 
        />
      ))}
    </div>


      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </main>
  );
}
