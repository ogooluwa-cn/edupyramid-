'use client'
import React from 'react';
import CourseCard from '@/components/CourseCard';

const courses = [
  {
    title: "UI/UX Design",
    rating: 4.5,
    reviews: 132,
    description: "Learn to craft seamless digital experiences by mastering user research ,wireframing ,protyping and design tools used by top designers",
    image: "uiux.png",
  },
  {
    title: "Database Management",
    rating: 4.8,
    reviews: 122,
    description: "learn to organize and manage data using tools like microsoft access and SQL for real-world application. ",
    image: "sql.png",
  },
  {
    title: "Front-End Engineering",
    rating: 4.6,
    reviews: 110,
    description: "build responsive design ,interactive websites with HTML ,CSS javaScript and modern frameworks like React - the core of user-facing application ",
    image: "front.png",
  },
  {
    title: "Screenwriting",
    rating: 4.5,
    reviews: 98,
    description: "Master the art or writing for film and tv learn story ,dialogue charater arcs and how to pitch compelling script ",
    image: "screen.png",
  },
  {
    title: "Graphic Design",
    rating: 4.6,
    reviews: 115,
    description: "Learn to create stunning visuals using tools like adode photoshop, illustrator, and canva-from branding to digital content design.",
    image: "square.png",
  },
  {
    title: "Generative AI Tools",
    rating: 4.7,
    reviews: 89,
    description: "Explore the power of Ai-driven tools likes chatGPT, DALL.E, and others to automate tasks boost creativvity,and streamline workflows.",
    image: "/ai.png",
  },
  {
    title: "Desktop Publishing",
    rating: 4.5,
    reviews: 104,
    description: "master the layout and design of professional documents, brochures, and publications using tools like CorelDRAW, inDesign,and publisher",
    image: "/laptop.png",
  },
  {
    title: "Virtual Assistant",
    rating: 4.4,
    reviews: 128,
    description: " Gain practical skills to support businesses remotely - from email management and scheduling to customer support and research tasks",
    image: "laptop2.png",
  },
];

export default function Programmes() {
  return (
    <main className="p-8 min-h-screen m-8">
      <h1 className="text-3xl font-bold text-center mb-6">Explore our Courses</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto p-8">
        Our Tech And Management Programmes Are Designed And Delivered By Seasoned Professionals, Blending Theory With Hands-On Experience...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </main>
  );
}
