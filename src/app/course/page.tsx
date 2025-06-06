'use client';

import React, { useState } from "react";
import "animate.css";
import Link from "next/link";

const courses = [
  { title: "Professional Virtual Assistant", description: "Master VA skills, tools, and client management.", category: "Virtual Assistance" },
  { title: "Software Engineer", description: "Learn software development fundamentals and systems.", category: "Software Development" },
  { title: "Full Stack Developer", description: "Front-end, back-end, and everything in between.", category: "Software Development" },
  { title: "Front End Developer", description: "HTML, CSS, JavaScript and frameworks like React.", category: "Software Development" },
  { title: "Back End Developer", description: "Server-side logic and databases with Node or Python.", category: "Software Development" },
  { title: "Database Administrator", description: "Manage, secure and optimize data systems.", category: "Data Management" },
  { title: "Data Analyst", description: "Analyze trends and extract insights using data.", category: "Data Management" },
  { title: "Data Science", description: "Machine learning, statistics and big data analysis.", category: "Data Management" },
  { title: "Artificial Intelligence", description: "Build intelligent systems and automation tools.", category: "AI & ML" },
  { title: "UI/UX Design", description: "Design user-friendly and attractive interfaces.", category: "Design" },
  { title: "Graphic Design", description: "Visual design, branding and content creation.", category: "Design" },
  { title: "Cinematography", description: "Video production, storytelling and lighting.", category: "Media" },
  { title: "Animation", description: "Create motion graphics and digital animation.", category: "Media" },
  { title: "Mobile App Developer", description: "Build mobile apps for Android & iOS platforms.", category: "Software Development" }
];

const uniqueCategories = ["All Categories", ...new Set(courses.map(course => course.category))];

export default function CoursePrograms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center bg-white sticky top-0 h-24 px-6 md:px-32 z-50 shadow">
        <h1 className="text-3xl font-bold text-blue-800">Our Programs</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-3/4 mx-auto my-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/2"
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/4"
        >
          {uniqueCategories.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-3/4 mx-auto pb-10">
            {filteredCourses.map((course, idx) => (
        <Link href={`/checkout?course=${encodeURIComponent(course.title)}`} key={idx}>
          <div className="h-48 p-4 bg-white shadow rounded border border-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 animate__animated animate__fadeInUp cursor-pointer">
            <h2 className="font-semibold text-blue-700 mb-2">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        </Link>
      ))}

      </div>
    </div>
  );
}
