'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Course = {
  title: string;
  institute: string;
  skills: string[];
  rating: string;
  reviews: string;
  level: string;
  duration: string;
  mode: string;
  oldPrice: string;
  newPrice: string;
  category: string;
  description?: string;
  image?: string;
};

const courses: Course[] = [
  {
    title: 'Front-End Web Development',
    institute: 'Spraditech',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'TailwindCSS', 'Next.js', 'Zod'],
    rating: '4.7',
    reviews: '30',
    level: 'Beginner',
    duration: '4–6 months',
    mode: 'On-site',
    oldPrice: '₦120,000',
    newPrice: '₦80,000',
    category: 'Software Development',
    image: '/front-end-web-development.png',
  },
  {
    title: 'Back-End Web Development',
    institute: 'Spraditech',
    skills: ['Node.js', 'PHP', 'Python', 'Express.js', 'Laravel', 'Django', 'SQL', 'MongoDB'],
    rating: '4.9',
    reviews: '23',
    level: 'Beginner',
    duration: '4–6 months',
    mode: 'On-site',
    oldPrice: '₦140,000',
    newPrice: '₦100,000',
    category: 'Software Development',
    image: '/back-end-web-development.png',
  },
  {
    title: 'Full Stack Web Development',
    institute: 'Spraditech',
    skills: ['Node.js', 'PHP', 'Python', 'Express.js', 'Laravel', 'Django', 'SQL', 'MongoDB'],
    rating: '4.9',
    reviews: '23',
    level: 'Beginner',
    duration: '4–6 months',
    mode: 'On-site',
    oldPrice: '₦250,000',
    newPrice: '₦150,000',
    category: 'Software Development',
    image: '/full-stack-web-development.png',
  },
  {
    title: 'Mobile App Development',
    institute: 'Spraditech',
    skills: ['Flutter', 'React Native', 'Kotlin', 'Java', 'Dart'],
    rating: '3.9',
    reviews: '23',
    level: 'Beginner',
    duration: '4–6 months',
    mode: 'On-site',
    oldPrice: '₦200,000',
    newPrice: '₦160,000',
    category: 'Software Development',
    image: '/mobile-app-development.png',
  },
  {
    title: 'Professional Virtual Assistant',
    institute: 'Spraditech',
    skills: ['Google Workspace', 'Trello', 'Asana', 'CRM', 'Email Management'],
    rating: '4.5',
    reviews: '18',
    level: 'Beginner',
    duration: '2–4 months',
    mode: 'Online',
    oldPrice: '₦90,000',
    newPrice: '₦60,000',
    category: 'Virtual Assistance',
    image: '/virtual.png',
  },
  {
    title: 'Data Administrator',
    institute: 'Spraditech',
    skills: ['Excel', 'SQL', 'Data Cleaning', 'Database Management'],
    rating: '4.4',
    reviews: '12',
    level: 'Beginner',
    duration: '3–5 months',
    mode: 'On-site',
    oldPrice: '₦110,000',
    newPrice: '₦85,000',
    category: 'Data Management',
    image: '/data.png',
  },
  {
    title: 'Data Analyst',
    institute: 'Spraditech',
    skills: ['Excel', 'Power BI', 'SQL', 'Python', 'Tableau'],
    rating: '4.8',
    reviews: '22',
    level: 'Beginner',
    duration: '4–6 months',
    mode: 'Hybrid',
    oldPrice: '₦180,000',
    newPrice: '₦150,000',
    category: 'Data Management',
    image: '/anaylit.png',
  },
  {
    title: 'Data Science',
    institute: 'Spraditech',
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Statistics'],
    rating: '4.9',
    reviews: '20',
    level: 'Beginner',
    duration: '6–8 months',
    mode: 'On-site',
    oldPrice: '₦250,000',
    newPrice: '₦210,000',
    category: 'Data Management',
    image: '/database-management.png',
  },
  {
    title: 'Artificial Intelligence',
    institute: 'Spraditech',
    skills: ['Python', 'TensorFlow', 'Deep Learning', 'Neural Networks'],
    rating: '5.0',
    reviews: '10',
    level: 'Beginner',
    duration: '8–10 months',
    mode: 'On-site',
    oldPrice: '₦300,000',
    newPrice: '₦260,000',
    category: 'AI & ML',
    image: '/machine.png',
  },
  {
    title: 'UI/UX Design',
    institute: 'Spraditech',
    skills: ['Figma', 'Adobe XD', 'Design Thinking', 'User Research', 'Wireframing'],
    rating: '4.7',
    reviews: '25',
    level: 'Beginner',
    duration: '3–5 months',
    mode: 'Hybrid',
    oldPrice: '₦130,000',
    newPrice: '₦100,000',
    category: 'Design',
    image: '/ui-ux.png',
  },
  {
    title: 'Software Engineer',
    institute: 'Spraditech',
    skills: ['C++', 'Java', 'Algorithms', 'Data Structures', 'System Design', 'Git'],
    rating: '4.9',
    reviews: '18',
    level: 'Beginner',
    duration: '6–8 months',
    mode: 'On-site',
    oldPrice: '₦220,000',
    newPrice: '₦180,000',
    category: 'Software Development',
    image: '/software-engineer.png',
  },
  {
    title: 'Graphic Design',
    institute: 'Spraditech',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'Typography', 'Branding'],
    rating: '4.6',
    reviews: '15',
    level: 'Beginner',
    duration: '3–5 months',
    mode: 'Online',
    oldPrice: '₦100,000',
    newPrice: '₦70,000',
    category: 'Design',
    image: '/graphic.png',
  },
  {
    title: 'Cinematography',
    institute: 'Spraditech',
    skills: ['Camera Operation', 'Lighting Techniques', 'Editing', 'Storyboarding', 'Color Grading'],
    rating: '4.8',
    reviews: '12',
    level: 'Beginner',
    duration: '4–6 months',
    mode: 'On-site',
    oldPrice: '₦150,000',
    newPrice: '₦120,000',
    category: 'Media',
    image: '/cinmal.png',
  },
  {
    title: 'Animation',
    institute: 'Spraditech',
    skills: ['2D Animation', '3D Animation', 'After Effects', 'Maya', 'Storytelling'],
    rating: '4.7',
    reviews: '14',
    level: 'Beginner',
    duration: '5–7 months',
    mode: 'Hybrid',
    oldPrice: '₦170,000',
    newPrice: '₦140,000',
    category: 'Media',
    image: '/aniamation.png',
  },
];

const uniqueCategories = ['All Categories', ...Array.from(new Set(courses.map(c => c.category)))];

export default function CoursePrograms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredCourses = courses.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white h-24 px-6 md:px-32 z-50 shadow flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-800">Our Programs</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
      </header>

      {/* Filters */}
      <div className="w-11/12 md:w-3/4 mx-auto my-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/3"
        >
          {uniqueCategories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Courses */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Our Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCourses.map((course, i) => (
            <Link
              href={{ pathname: '/checkout', query: { course: course.title } }}
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col cursor-pointer"
            >
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              )}
              <div className="p-6 flex flex-col flex-1">
                <div>
                  <h3 className="text-xl font-bold text-blue-800">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{course.institute}</p>
                  <p className="text-sm mb-3">
                    <span className="font-semibold text-black">Skills:</span>{' '}
                    {course.skills.join(', ')}
                  </p>
                  <p className="text-sm text-yellow-600 font-medium mb-2">
                    ⭐ {course.rating}{' '}
                    <span className="text-gray-500">({course.reviews} reviews)</span>
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-700 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded">{course.level}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">{course.duration}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">{course.mode}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm line-through text-gray-400">{course.oldPrice}</span>
                    <span className="text-lg font-bold text-green-600">{course.newPrice}</span>
                  </div>
                  <div className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded text-center">
                    Enroll Now
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {filteredCourses.length === 0 && (
            <p className="text-center text-gray-700 col-span-full">No courses found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
