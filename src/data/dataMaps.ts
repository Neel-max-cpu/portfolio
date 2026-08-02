export const projects = [
  {
    id: 1,
    image: "/images/project1.png",
    heading: "Hotels And Flight Booking Web App",
    description: [
      "Full-stack Travel Booking app built with Next.js and Java Spring Boot.",
      "Database-first approach with MySQL for structured schema design.",
      "Features: users, roles, hotel/flight data, bookings, and transactions.",
      "Containerized with Docker and deployed on Render.",
      "Authentication using JWT with OTP-based signup.",
      "Payment integration with Razorpay."
    ],
    url: "https://github.com/Neel-max-cpu/travelApp.git",
  },
  {
    id: 2,
    image: "/images/project2.png",
    heading: "AI Resume Analyzer (RAG-based Document Assistant)",
    description: [
      "Built an AI-powered Resume Analyzer that compares resumes against job descriptions using LLM-based skill extraction and semantic matching.",
      "Implemented an AI evaluation pipeline with PDF parsing, skill normalization, match scoring, and explainable hiring recommendations.",
      "Designed an interactive dashboard featuring resume/JD upload, skill gap analysis, match percentage visualization, and qualification verdicts.",
      "Optimized backend processing by normalizing extracted skills and streamlining inference requests, improving analysis consistency and response time.",
      "Deployed the full-stack application using Next.js frontend and Node.js/Express backend with Gemini API integration for scalable AI-powered evaluations."
    ],
    url: "https://github.com/Neel-max-cpu/Resume-Analyzer.git",
  },
  {
    id: 3,
    image: "/images/project3.png",
    heading: "Quiz App",
    description: [
      "Time-based quiz app with dynamic question flow and genre selection.",
      "Frontend built using Angular, Tailwind CSS, and PrimeNG for responsive, modular UI.",
      "Questions fetched in real-time from Open Trivia DB via REST APIs.",
      "Supports multiple genres including General Knowledge, Science, History, and more.",
      "Flexible quiz formats: multiple choice, true/false, difficulty selection, which is then again timed challenges."
    ],  
    url: "https://github.com/Neel-max-cpu/QuizApp-Angular.git",
  },
];

export const skills = [
  {
    id: 1,
    heading: "Frontend Development",
    desc: [
      "Crafting responsive, intuitive UIs using React, Next.js, Angular, and Vite for seamless cross-device experiences",
      "Styling with precision and flair via Tailwind CSS—leveraging global utility classes and custom themes for scalable design systems",
      "Familiar with state management, with tools like Zustand, Context API, and custom hooks—ensuring fluid user interactions and predictable data flow",
      "Obsessed with the little details—from hover states to micro-interactions, I love adding those subtle touches that make users smile and interfaces feel alive 😉",
      
    ],
  },
  {
    id: 2,
    heading: "Backend Development",
    desc: [
      "Developing scalable server-side applications with Node.js, Express.js, and Java Spring Boot",
      "Strong understanding of RESTful APIs, authentication, and authorization",
      "Integration of third-party services like payment gateways and cloud storage",
      "Currently learning Docker to make deployments smoother and more consistent—no more “it works on my machine” moments 😆😅"
    ],
  },
  {
    id: 3,
    heading: "Database Management",
    desc: [
      "Comfortable working with relational databases like MySQL and MsSQL—structuring data to keep things clean and efficient",
      "Have hands-on experience with MongoDB for flexible, document-based storage—great for fast-moving projects",
      "I enjoy designing schemas that make sense and writing queries that run fast (because nobody likes waiting 😄)",
      "Currently diving into SQL procedures to level up my backend logic and make things even more powerful",
    ],
  },
  {
    id: 4,
    heading: "Version Control",
    desc: [
      "Comfortable with Git and GitHub—my trusty tools for keeping code clean, collaborative, and under control",
      "Experienced in team workflows—branching, pull requests, and version tracking that make collaboration feel like choreography",
      "I genuinely enjoy the rhythm of good teamwork—reviewing code, resolving merge conflicts, and watching features come together",
      "And yes, I do check my GitHub heat map more often than I check the weather—because green squares are the real forecast 🌱😄",
    ],
  },
];


export const timeline =[
  {
    id:1,
    date:"April 2025 - Present",
    title:"Software Developer",
    subtitle:"Novus Hi-Tech, Gurugram",
    icon: "work",
  },
  {
    id:2,
    date:"2023-2025",
    title:"Bhai Parmanand DSEU Shakarpur Campus-II, Delhi",
    subtitle:"MCA - Masters Of Computer Application",
    icon: "graduation",
  },
  {
    id:3,
    date:"April 2024 - July 2024",
    title:"Teaching Assistant At Coding Ninjas",
    subtitle:"Coding Ninjas, Remote",
    icon: "work",
  },
  {
    id:4,
    date:"April 2024 - May 2024",
    title:"Backend Internship",
    subtitle:"Bhai Parmanand DSEU Shakarpur Campus-II, Delhi",
    icon: "work",
  },
  {
    id:5,
    date:"2020-2023",
    title:"Darrang College, Tezpur",
    subtitle:"BSc. in Maths with Honours",
    icon: "graduation",
  },
  {
    id:6,
    date:"2018-2020",
    title:"Darrang College, Tezpur",
    subtitle:"Higer Secondary, 12",
    icon: "school",
  },
  {
    id:7,
    date:"2008-2018",
    title:"Don Bosco High School, Tezpur",
    subtitle:"Schooling, 10",
    icon: "school",
  },
]