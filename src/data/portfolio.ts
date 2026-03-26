
export interface PersonalDetails {
  name: string;
  role: string;
  photo: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  cvUrl: string;
}

export interface Qualification {
  degree: string;
  school: string;
  year: string;
  cgpa?: string;
  percentage?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  sourceUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export interface Internship {
  company: string;
  role: string;
  link: string;
  socialMediaLink?: string;
  project: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface AboutSection {
  description: string;
  social: SocialLinks;
}

export interface PortfolioData {
  personal: PersonalDetails;
  qualifications: Qualification[];
  skills: Skill[];
  projects: Project[];
  internships: Internship[];
  about: AboutSection;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Gulshan Kumar",
    role: "Full Stack Developer",
    photo: "image copy 5.jpg", 
    bio: "Computer Engineer passionate about learning, building efficient applications, improving coding skills, and work towards attaining professional and personal goals.",
    email: "gulshan311604@gmail.com",
    phone: "+91 9534311604",
    location: "Delhi, India",
    cvUrl: "/Gulshan_Kumar.pdf", // Place your CV file in the public folder
  },
  qualifications: [
    {
      degree: "Bachelor of Technology in Computer Engineering ",
      school: "Marwadi University",
      year: "2022-2026",
      cgpa: "6.81",
    },
    {
      degree: "Intermediate Annual Examination",
      school: "Bihar School Examination Board, Patna",
      year: "2020",
      percentage: "68.2%",
    },
    {
      degree: "Secondary School Examination",
      school: "Bihar School Examination Board, Patna",
      year: "2018",
      percentage: "60%",
    },
  ],
  skills: [
    { name: "HTML", level: 90, category: "frontend", icon: "FaHtml5" },
    { name: "CSS", level: 90, category: "frontend", icon: "FaCss3Alt" },
    { name: "JavaScript", level: 85, category: "frontend", icon: "SiJavascript" },
    { name: "React.js", level: 90, category: "frontend", icon: "FaReact" },
    { name: "Next.js", level: 85, category: "frontend", icon: "SiNextdotjs" },
    { name: "Bootstrap", level: 80, category: "frontend", icon: "FaBootstrap" },
    { name: "Tailwind", level: 95, category: "frontend", icon: "SiTailwindcss" },


    { name: "Node.js", level: 80, category: "backend", icon: "FaNodeJs" },
    { name: "Python", level: 75, category: "backend", icon: "FaPython" },
    { name: "Java", level: 70, category: "backend", icon: "FaJava" },
    { name: "PHP", level: 65, category: "backend", icon: "FaPhp" },
    { name: "PostgreSQL", level: 75, category: "backend", icon: "SiPostgresql" },
    { name: "MongoDB", level: 80, category: "backend", icon: "SiMongodb" },
    { name: "MySQL", level: 75, category: "backend", icon: "SiMysql" },

    { name: "Figma", level: 80, category: "design", icon: "FaFigma" },
    { name: "Canva", level: 80, category: "design", icon: "SiCanva" },

    { name: "Git", level: 85, category: "tools", icon: "FaGitAlt" },
    { name: "GitHub", level: 90, category: "tools", icon: "FaGithub" },
  ],
  projects: [
    {
      title: "AI-Based Exam Invigilator",
      description: "AI-Based Exam Invigilator is an online proctoring system that uses AI to monitor students during exams and detect cheating activities in real time.",
      tech: ["Rect.js","Tailwind", "MongoDB", "Tensorflow"],
      sourceUrl: "https://github.com/Vivek-Prajapati1/InvigilateX-Ai",
      liveUrl: "https://invigilate-x-ai.vercel.app",
      imageUrl: "/image copy 2.png",
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind","Stripe"],
      sourceUrl: "https://github.com/Gulshan36/E-commerce",
      liveUrl: "https://e-commerce-frontend-delta-umber.vercel.app/",
      imageUrl: "/image.png",
    },
    {
      title: "Quick Rides",
      description: "A collaborative real time booking ride application with real-time synchronization, location functionality, and admin management features.",
      tech: ["React", "Tailwind CSS", "Google Maps",  "Socket.IO"],
      sourceUrl: "https://github.com/Gulshan36/QuickRides",
      liveUrl: "https://github.com/Gulshan36/QuickRides",
      imageUrl: "/image copy.png",
    },
    {
      title: "Namaste Bharat",
      description: "Namaste Bharat is a modern ice cream shop website featuring a wide range of flavors with an attractive catalog design. The platform provides a smooth and user-friendly interface for browsing and exploring different ice cream varieties.",
      tech: ["React.ts","MongoDB","Material-UI","Socket.io  "],
      sourceUrl: "https://github.com/Gulshan36/IceCream",
      liveUrl: "https://ice-cream-vw22.vercel.app/",
      imageUrl: "/image copy 4.png",
    },
    {
      title: "Food Delivery",
      description: "A food delivery platform with Order food and get it delivered to your doorstep and real time tracking of your order.  ",
      tech: ["React", "Tailwind CSS", "Google Maps",  "Socket.IO"],
      sourceUrl: "https://github.com/Gulshan36/Food-Delivery",
      liveUrl: "https://food-delivery-xi-ashen.vercel.app/  ",
      imageUrl: "/image copy 3.png",
    },
  ],
  internships: [
    {
      company: "Company Name",
      role: "Intern",
      link: "https://example.com",
      socialMediaLink: "https://linkedin.com/company/example",
      project: "Describe the internship project here.",
    }
  ],
  about: {
    description: `I'm a software engineer with a passion for building scalable and user-friendly applications. 
    I specialize in modern web technologies and love solving complex problems. When I'm not coding, you can find me hiking or reading.`,
    social: {
      github: "https://github.com/gulshan36",
      linkedin: "https://www.linkedin.com/in/gulshan-kumar-99489a250/",
      twitter: "https://x.com/GulshanKum93053",
    },
  },
};
