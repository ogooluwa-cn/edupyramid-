// 'use client';
// import React from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { BsCheckCircleFill } from 'react-icons/bs';
// import { useRouter } from 'next/navigation';

// interface Plan {
//   name: 'SIWES' | 'IT' | 'REGULAR';
//   price: number;
// }

// interface Course {
//   title: string;
//   description: string;
//   plans: Plan[];
// }

// interface CourseModalProps {
//   course: Course;
//   onClose: () => void;
// }

// const featuresMap: Record<string, string[]> = {
//   SIWES: [
//     'Design Thinking and user needs analysis',
//     'Basic Figma for wireframing and prototyping',
//     'Mini-project: Mobile app wireframe',
//   ],
//   IT: [
//     'All SIWES features',
//     'User research, personas, and information architecture',
//     'High-fidelity UI design systems, accessibility',
//     'Portfolio creation and setup',
//   ],
//   REGULAR: [
//     'All SIWES & IT features',
//     'Micro-interactions, responsiveness, and animation',
//     'UI/UX design systems, accessibility, and case studies',
//     'Portfolio creation and setup',
//   ],
// };

// const durationMap: Record<string, string> = {
//   SIWES: '4 Months',
//   IT: '10 Months',
//   REGULAR: '12 Months',
// };

// const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
//   const router = useRouter();

//   const handleProceedToPayment = (plan: Plan) => {
//     localStorage.setItem('selectedCourse', course.title);
//     localStorage.setItem('selectedPlan', plan.name);
//     localStorage.setItem('selectedPrice', String(plan.price));
//     router.push('/payment');
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70">
//       <div
//         className="relative rounded-[30px] p-8 w-full max-w-6xl text-white max-h-[90vh] overflow-y-auto shadow-2xl"
//         style={{
//           background: 'radial-gradient(ellipse at 80% 20%, #0f3c2d 0%, #000 70%)',
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-white text-xl hover:text-gray-300"
//         >
//           <FaTimes size={24} />
//         </button>

//         {/* Title & Description */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{course.title}</h2>
//         <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
//           {course.description}
//         </p>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {course.plans.map((plan) => (
//             <div
//               key={plan.name}
//               className="bg-black/30 border border-white/10 rounded-3xl p-6 text-center flex flex-col justify-between"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
//                 <p className="text-sm text-gray-400 mb-4">{durationMap[plan.name]}</p>
//                 <p className="text-3xl font-bold mb-6">₦{plan.price.toLocaleString()}</p>

//                 <ul className="text-sm space-y-3 text-left">
//                   {featuresMap[plan.name].map((feature, i) => (
//                     <li key={i} className="flex items-start gap-2">
//                       <BsCheckCircleFill className="text-green-400 mt-1" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <button
//                 onClick={() => handleProceedToPayment(plan)}
//                 className="mt-6 bg-white text-black font-medium rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition"
//               >
//                 Enroll Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseModal;

// 'use client';
// import React from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { BsCheckCircleFill } from 'react-icons/bs';
// import { useRouter } from 'next/navigation';

// interface Plan {
//   name: 'SIWES' | 'IT' | 'REGULAR';
//   price: number;
// }

// interface Course {
//   title: string;
//   description: string;
//   plans: Plan[];
// }

// interface CourseModalProps {
//   course: Course;
//   onClose: () => void;
// }

// /* ---------------------------------------------------
//    🧠 COURSE CONTENTS
// --------------------------------------------------- */

// const courseContents: Record<
//   string,
//   {
//     title: string;
//     description: string;
//     featuresMap: Record<string, string[]>;
//     durationMap: Record<string, string>;
//   }
// > = {
//   'UI/UX Design': {
//     title: 'UI/UX Design Masterclass',
//     description:
//       'Learn the art of designing seamless user experiences and beautiful interfaces. This course covers user research, wireframing, prototyping, and creating case studies for your professional portfolio.',
//     featuresMap: {
//       SIWES: [
//         'Design Thinking and UX Fundamentals',
//         'Wireframing with Figma',
//         'Basic Color Theory and Typography',
//         'Mini-project: Mobile App Layout',
//       ],
//       IT: [
//         'All SIWES features included',
//         'User Flows and Information Architecture',
//         'Advanced Prototyping with Figma',
//         'Accessibility and UI Systems',
//         'Portfolio Setup and Case Study Creation',
//       ],
//       REGULAR: [
//         'All SIWES & IT features included',
//         'Micro-interactions and Motion Design',
//         'Advanced Design Systems and Components',
//         'Real Client Simulation Projects',
//         'Capstone: Full Product Design Portfolio',
//       ],
//     },
//     durationMap: {
//       SIWES: '4 Months',
//       IT: '8 Months',
//       REGULAR: '12 Months',
//     },
//   },

//   'Frontend Development': {
//     title: 'Frontend Development Bootcamp',
//     description:
//       'Master modern web development by learning HTML, CSS, JavaScript, and React. Build responsive websites and applications from scratch.',
//     featuresMap: {
//       SIWES: [
//         'HTML & CSS Essentials',
//         'Responsive Design with Flexbox & Grid',
//         'Basic JavaScript and DOM Manipulation',
//         'Mini-project: Personal Portfolio Page',
//       ],
//       IT: [
//         'All SIWES features included',
//         'React Fundamentals and State Management',
//         'Component-based Architecture',
//         'APIs and Fetch Requests',
//         'Project: Interactive Web App',
//       ],
//       REGULAR: [
//         'All SIWES & IT features included',
//         'TypeScript and Advanced React',
//         'Optimization and Deployment',
//         'Next.js Fundamentals',
//         'Capstone: Multi-Page Web Application',
//       ],
//     },
//     durationMap: {
//       SIWES: '4 Months',
//       IT: '9 Months',
//       REGULAR: '12 Months',
//     },
//   },

//   'Data Management': {
//     title: 'Data Management and Analytics',
//     description:
//       'Learn how to organize, analyze, and interpret data effectively using tools like Excel, SQL, and Power BI to make business-driven decisions.',
//     featuresMap: {
//       SIWES: [
//         'Introduction to Data Management Concepts',
//         'Data Collection and Cleaning with Excel',
//         'Data Sorting and Filtering Techniques',
//         'Mini-project: Basic Business Data Report',
//       ],
//       IT: [
//         'All SIWES features included',
//         'Database Management using SQL',
//         'Data Visualization with Power BI',
//         'Pivot Tables and Dashboard Reporting',
//         'Intermediate Analytics Techniques',
//       ],
//       REGULAR: [
//         'All SIWES & IT features included',
//         'Advanced Excel Automation',
//         'Python for Data Analysis (pandas, numpy)',
//         'Building Automated Dashboards',
//         'Capstone: Full Business Analytics Report',
//       ],
//     },
//     durationMap: {
//       SIWES: '4 Months',
//       IT: '8 Months',
//       REGULAR: '12 Months',
//     },
//   },

//   'Screen Writing': {
//     title: 'Creative Screen Writing Essentials',
//     description:
//       'Discover the techniques of professional screenwriting. Learn storytelling, dialogue creation, and screenplay formatting to bring your ideas to life.',
//     featuresMap: {
//       SIWES: [
//         'Introduction to Screenwriting',
//         'Story Structure and Plot Development',
//         'Character Building and Dialogue Writing',
//         'Mini-project: Write a Short Scene',
//       ],
//       IT: [
//         'All SIWES features included',
//         'Writing for Film and TV Formats',
//         'Conflict and Pacing in Storytelling',
//         'Feedback and Revision Techniques',
//         'Project: Full Short Film Script',
//       ],
//       REGULAR: [
//         'All SIWES & IT features included',
//         'Advanced Screenplay Techniques',
//         'Adaptation and Collaborative Writing',
//         'Pitching and Story Presentation Skills',
//         'Capstone: Complete Screenplay Submission',
//       ],
//     },
//     durationMap: {
//       SIWES: '3 Months',
//       IT: '7 Months',
//       REGULAR: '12 Months',
//     },
//   },

//   'Desktop Publishing': {
//     title: 'Desktop Publishing & Print Media Design',
//     description:
//       'Gain skills in document layout and print design using Adobe InDesign, CorelDRAW, and Photoshop. Learn to create professional brochures, books, and flyers.',
//     featuresMap: {
//       SIWES: [
//         'Introduction to Desktop Publishing',
//         'Basic Typography and Layout',
//         'Designing with CorelDRAW',
//         'Mini-project: Business Flyer Design',
//       ],
//       IT: [
//         'All SIWES features included',
//         'Advanced Layout Design in InDesign',
//         'Photo Editing and Composition',
//         'Multi-page Document Design',
//         'Project: Company Brochure Creation',
//       ],
//       REGULAR: [
//         'All SIWES & IT features included',
//         'Professional Print Setup and Prepress',
//         'Magazine and Book Cover Design',
//         'Branding and Corporate Identity Projects',
//         'Capstone: Full Publishing Portfolio',
//       ],
//     },
//     durationMap: {
//       SIWES: '4 Months',
//       IT: '8 Months',
//       REGULAR: '12 Months',
//     },
//   },

//   'Graphic Design': {
//     title: 'Graphic Design & Visual Communication',
//     description:
//       'Develop creative and technical skills in graphic design using Adobe Photoshop, Illustrator, and Canva. Learn branding, layout, and visual storytelling.',
//     featuresMap: {
//       SIWES: [
//         'Introduction to Graphic Design Principles',
//         'Color Theory and Composition',
//         'Logo and Poster Design with Canva',
//         'Mini-project: Brand Poster Design',
//       ],
//       IT: [
//         'All SIWES features included',
//         'Adobe Photoshop and Illustrator Basics',
//         'Typography and Visual Hierarchy',
//         'Social Media Content Creation',
//         'Project: Brand Identity Kit',
//       ],
//       REGULAR: [
//         'All SIWES & IT features included',
//         'Advanced Adobe Suite Projects',
//         'Print and Digital Campaign Design',
//         'Brand Strategy and Design Systems',
//         'Capstone: Full Visual Identity Portfolio',
//       ],
//     },
//     durationMap: {
//       SIWES: '4 Months',
//       IT: '9 Months',
//       REGULAR: '12 Months',
//     },
//   },
// };

// /* ---------------------------------------------------
//    💻 MODAL COMPONENT
// --------------------------------------------------- */

// const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
//   const router = useRouter();
//   const data =
//     courseContents[course.title] || courseContents['UI/UX Design']; // fallback if no match

//   const handleProceedToPayment = (plan: Plan) => {
//     localStorage.setItem('selectedCourse', data.title);
//     localStorage.setItem('selectedPlan', plan.name);
//     localStorage.setItem('selectedPrice', String(plan.price));
//     router.push('/payment');
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70">
//       <div
//         className="relative rounded-[30px] p-8 w-full max-w-6xl text-white max-h-[90vh] overflow-y-auto shadow-2xl"
//         style={{
//           background: 'radial-gradient(ellipse at 80% 20%, #0f3c2d 0%, #000 70%)',
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-white text-xl hover:text-gray-300"
//         >
//           <FaTimes size={24} />
//         </button>

//         {/* Title & Description */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
//           {data.title}
//         </h2>
//         <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
//           {data.description}
//         </p>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {course.plans.map((plan) => (
//             <div
//               key={plan.name}
//               className="bg-black/30 border border-white/10 rounded-3xl p-6 text-center flex flex-col justify-between"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
//                 <p className="text-sm text-gray-400 mb-4">
//                   {data.durationMap[plan.name]}
//                 </p>
//                 <p className="text-3xl font-bold mb-6">
//                   ₦{plan.price.toLocaleString()}
//                 </p>

//                 <ul className="text-sm space-y-3 text-left">
//                   {data.featuresMap[plan.name].map((feature, i) => (
//                     <li key={i} className="flex items-start gap-2">
//                       <BsCheckCircleFill className="text-green-400 mt-1" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <button
//                 onClick={() => handleProceedToPayment(plan)}
//                 className="mt-6 bg-white text-black font-medium rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition"
//               >
//                 Enroll Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseModal;


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

// 🧠 All course content (from your Grok data)
const courseContent: Record<
  string,
  {
    description: string;
    durationMap: Record<string, string>;
    featuresMap: Record<string, string[]>;
  }
> = {
  'UI/UX Design': {
    description:
      'Kickstart your design career by mastering both the fundamentals and advanced concepts of User Interface and User Experience Design. This course walks you through the full design process—from user research and wireframing to high-fidelity prototypes and portfolio presentation.',
    durationMap: { SIWES: '4 Months', IT: '10 Months', REGULAR: '12 Months' },
    featuresMap: {
      SIWES: [
        'Design Thinking and user needs analysis',
        'Basic Figma for wireframing and prototyping',
        'Mini-project: Mobile app wireframe',
        'Portfolio creation and setup',
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
    },
  },

  'Front-End Engineering': {
    description:
      'Learn to build responsive and interactive web applications using HTML, CSS, JavaScript, and modern frameworks like React, from static pages to full single-page apps with deployment.',
    durationMap: { SIWES: '4 Months', IT: '10 Months', REGULAR: '12 Months' },
    featuresMap: {
      SIWES: [
        'HTML Basics & Semantic Tags',
        'CSS Fundamentals & Responsive Layouts (Flexbox)',
        'Basic JavaScript Interactions',
        'Mini Project: Static Portfolio Page',
        'Portfolio creation and setup',
      ],
      IT: [
        'All SIWES features',
        'Advanced HTML/CSS + Grid System',
        'JavaScript ES6+, DOM Manipulation & APIs',
        'ReactJS Basics (Components, State)',
        'Mini Project: Build and deploy blog UI',
        'Portfolio creation and setup',
      ],
      REGULAR: [
        'All SIWES & IT features',
        'Full ReactJS SPA',
        'State Management with Redux/Context',
        'Routing, Hooks, Lifecycle & Deployment',
        'Capstone: Build a multi-page app with authentication',
        'Portfolio creation and setup',
      ],
    },
  },

  'Database Management': {
    description:
      'Learn to manage and analyze data effectively with spreadsheets, SQL databases, visualization tools like Power BI, and advanced pipelines for secure, optimized data handling.',
    durationMap: { SIWES: '4 Months', IT: '10 Months', REGULAR: '12 Months' },
    featuresMap: {
      SIWES: [
        'Intro to Data Types & Structures',
        'Excel & Google Sheets for Beginners',
        'Data Entry, Cleaning, Filtering',
        'Simple Charting & Summaries',
        'Mini Project: Clean & Visualize School Survey Data',
        'Portfolio creation and setup',
      ],
      IT: [
        'All SIWES features',
        'SQL Basics & Queries',
        'ER Diagrams, Relational DB Design',
        'Intro to Power BI/Tableau',
        'NoSQL Overview (MongoDB Basics)',
        'Data Governance & Security Principles',
        'Mini Project: Build dashboard from raw data',
        'Portfolio creation and setup',
      ],
      REGULAR: [
        'All SIWES & IT features',
        'Advanced SQL (Joins, Subqueries, Triggers)',
        'Database Optimization',
        'ETL Concepts & Data Pipelines',
        'Data Warehousing Principles',
        'Capstone: Analyze and report on open government dataset',
        'Portfolio creation and setup',
      ],
    },
  },

  Screenwriting: {
    description:
      'Learn to craft compelling stories for film and series, mastering script formats, character development, dialogue, and professional pitching from short scenes to full episodic content.',
    durationMap: { SIWES: '4 Months', IT: '10 Months', REGULAR: '12 Months' },
    featuresMap: {
      SIWES: [
        'Script Formats (Short Film, Series)',
        '3-Act Structure & Story Beats',
        'Basic Dialogue Writing with Celtx',
        'Mini Project: 2-page Short Scene',
        'Portfolio creation and setup',
      ],
      IT: [
        'All SIWES features',
        'Genre Writing (Comedy, Thriller, Drama)',
        'Character Arcs, Conflict & World-Building',
        'Screenplay Formatting, Rewrites & Feedback',
        'Mini Project: 5-minute Screenplay',
        'Portfolio creation and setup',
      ],
      REGULAR: [
        'All SIWES & IT features',
        'Writing Episodic Content',
        'Pacing, Tension & Dialogue Nuance',
        'Writing Bibles, Pitch Decks',
        'Capstone: Write and polish a full short film script',
        'Portfolio creation and setup',
      ],
    },
  },

  'Desktop Publishing': {
    description:
      'Learn to design professional print and digital layouts using tools like Adobe InDesign and MS Publisher, from simple brochures to multi-page documents and interactive eBooks.',
    durationMap: { SIWES: '4 Months', IT: '10 Months', REGULAR: '12 Months' },
    featuresMap: {
      SIWES: [
        'What is DTP? Basic Concepts',
        'MS Publisher & Google Docs Layouts',
        'Simple Brochures & Newsletters',
        'Print Prep Basics',
        'Mini Project: Newsletter for student club',
        'Portfolio creation and setup',
      ],
      IT: [
        'All SIWES features',
        'Page Design Principles',
        'Adobe InDesign Basics',
        'Multi-Page Document Design',
        'Exporting for Print & Web',
        'Mini Project: College Magazine Sample Layout',
        'Portfolio creation and setup',
      ],
      REGULAR: [
        'All SIWES & IT features',
        'Master Pages, Paragraph Styles, TOC',
        'Commercial Printing Workflow',
        'Creating eBooks & Interactive PDFs',
        'Capstone: 12–20 Page Published Print Sample',
        'Portfolio creation and setup',
      ],
    },
  },

  'Graphics Design': {
    description:
      'Learn to create stunning visual assets with tools like Adobe Suite and Canva, from basic posters to advanced branding systems and integrated print-digital designs.',
    durationMap: { SIWES: '4 Months', IT: '10 Months', REGULAR: '12 Months' },
    featuresMap: {
      SIWES: [
        'Basics of Visual Communication',
        'Intro to Canva & Pixlr',
        'Color Theory & Typography',
        'Basic Layouts & Poster Design',
        'Mini Project: Design a social media post',
        'Portfolio creation and setup',
      ],
      IT: [
        'All SIWES features',
        'Adobe Photoshop & Illustrator Essentials',
        'Logo Design & Branding',
        'Composition & Visual Hierarchy',
        'Creating Marketing Assets (Flyers, Brochures)',
        'Mini Projects: Product Label, Event Poster',
        'Portfolio creation and setup',
      ],
      REGULAR: [
        'All SIWES & IT features',
        'Advanced Adobe Suite (InDesign, Illustrator)',
        'UI for Graphic Designers',
        'Branding Systems, Packaging Design',
        'Print & Digital Media Integration',
        'Capstone: Brand Identity Package for Startup',
        'Portfolio creation and setup',
      ],
    },
  },
};

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const router = useRouter();
  const courseData = courseContent[course.title];

  const handleProceedToPayment = (plan: Plan) => {
    localStorage.setItem('selectedCourse', course.title);
    localStorage.setItem('selectedPlan', plan.name);
    localStorage.setItem('selectedPrice', String(plan.price));
    router.push('/payment');
  };

  if (!courseData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70">
      <div
        className="relative rounded-[30px] p-8 w-full max-w-6xl text-white max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, #0f3c2d 0%, #000 70%)',
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          {course.title}
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          {courseData.description}
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
                <p className="text-sm text-gray-400 mb-4">
                  {courseData.durationMap[plan.name]}
                </p>
                <p className="text-3xl font-bold mb-6">
                  ₦{plan.price.toLocaleString()}
                </p>

                <ul className="text-sm space-y-3 text-left">
                  {courseData.featuresMap[plan.name].map((feature, i) => (
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
