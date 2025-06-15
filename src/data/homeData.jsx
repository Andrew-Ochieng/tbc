import { Book, Users, BookOpen, Home, Calendar, Mail, HeartHandshake, BookText, UserRoundCog } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import heroImg3 from "../assets/hero3.jpg";
import heroImg2 from "../assets/hero2.jpg";
import blogImage from "../assets/scriptures.jpg";


const heroCarouselData = [
  {
    id: 1,
    title: "Trinity Baptist Church Funyula",
    subtitle: "A Reformed Baptist Congregation",
    description: "Proclaiming Christ crucified and the whole counsel of God in Busia.",
    bgImage: heroImg,
    stats: {
      main: "Est. 2011",
      secondary: "Faithfully serving our community"
    }
  },
  {
    id: 2,
    title: "Biblical Preaching",
    subtitle: "Expository & Doctrinal",
    description: "We are committed to the faithful exposition of Scripture and Reformed theology.",
    bgImage: heroImg2,
    stats: {
      main: "52 Weeks",
      secondary: "of consecutive Bible teaching"
    }
  },
  {
    id: 3,
    title: "Family Worship",
    subtitle: "Multi-Generational Ministry",
    description: "Nurturing faith in all ages through Sunday School, youth programs, and discipleship.",
    bgImage: heroImg3,
    stats: {
      main: "20+",
      secondary: "families worshiping together"
    }
  },
  {
    id: 4,
    title: "Community Outreach",
    subtitle: "Serving Funyula",
    description: "Sharing Christ's love through evangelism, mercy ministry, and biblical counseling.",
    bgImage: heroImg2,
    stats: {
      main: "4+",
      secondary: "community programs annually"
    }
  }
];



const faqs = [
    {
      question: "What is Elimu360 and how does it work?",
      answer: "Elimu360 is a comprehensive school management system that digitizes and automates all school operations. It provides modules for student management, attendance tracking, exam management, fee collection, communication, and more. The cloud-based platform works on any device, allowing administrators, teachers, students, and parents to access relevant information in real-time."
    },
    {
      question: "Is Elimu360 suitable for all types of educational institutions?",
      answer: "Yes, Elimu360 is designed to serve all educational institutions including kindergartens, primary schools, secondary schools, colleges, and training centers. The system is customizable to accommodate different curricula (CBC, 8-4-4, IGCSE, etc.) and can be scaled to fit institutions of any size."
    },
    {
      question: "How secure is our school's data on Elimu360?",
      answer: "Data security is our top priority. Elimu360 uses enterprise-grade security measures including SSL encryption, regular backups, role-based access control, and secure cloud hosting. We comply with data protection regulations and never share your data with third parties without consent."
    },
    // {
    //   question: "Can parents access student information through Elimu360?",
    //   answer: "Absolutely. Elimu360 provides a dedicated parent portal and mobile app where parents can view their children's attendance, academic performance, fee statements, timetable, and school announcements. Parents can also communicate directly with teachers through the platform."
    // },
    {
      question: "How does the fee management system work?",
      answer: "Our fee module automates the entire financial process. Schools can set up fee structures, generate invoices, record payments (including mobile money and bank transfers), send automatic reminders, and generate comprehensive financial reports. The system supports partial payments, installment plans, and fee waivers."
    },
    {
      question: "What kind of training and support do you provide?",
      answer: "We provide comprehensive onboarding training for administrators and teachers, along with detailed documentation and video tutorials. Our support team is available via phone, email, and live chat during business hours. We also offer regular webinars and system updates to ensure you get the most from Elimu360."
    },
    {
      question: "Can we customize Elimu360 to match our school's workflow?",
      answer: "Yes, Elimu360 offers significant customization options. You can configure grading systems, attendance policies, report formats, user permissions, and more. For advanced customizations, our team can work with you to implement school-specific features."
    },
    // {
    //   question: "How does the examination management system work?",
    //   answer: "Our exam module handles everything from exam scheduling and seating arrangements to grading and report generation. Teachers can input marks electronically, the system automatically calculates totals and ranks, and generates detailed report cards. It supports continuous assessment, competency-based grading, and traditional percentage systems."
    // }
  ];


const navList = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { 
    name: "About", 
    href: "#", 
    icon: <Users size={18} />,
    submenu: [
      { name: "Statement of Faith", href: "/about/statement-of-faith", icon: <BookOpen size={18} /> },
      { name: "Our Beliefs", href: "/about/our-beliefs", icon: <BookText size={18} /> },
      { name: "Literature", href: "/about/literature", icon: <Book size={18} /> },
      { name: "Our Leaders", href: "/about/our-leaders", icon: <UserRoundCog size={18} /> },
    ]
  },
  { name: "Sermons", href: "/sermons", icon: <Book size={18} /> },
  { name: "Blog", href: "/blog", icon: <BookText size={18} /> },
  { name: "Events", href: "/events", icon: <Calendar size={18} /> },
  { name: "Contact", href: "/contact", icon: <Mail size={18} /> },
  { name: "Give", href: "/give", icon: <HeartHandshake size={18} /> },
];


const recentArticles = [
  {
    id: 1,
    title: "The Sovereignty of God in Salvation",
    excerpt: "Exploring how God's sovereign grace works in the salvation of sinners according to Ephesians 1.",
    date: "May 15, 2023",
    author: "Pastor Simon",
    category: "Theology",
    readTime: "5 min read",
    image: {blogImage}
  },
  {
    id: 2,
    title: "Biblical Church Membership",
    excerpt: "Why formal church membership matters and how it reflects New Testament practice.",
    date: "April 28, 2023",
    author: "Elder Mark",
    category: "Church Life",
    readTime: "7 min read",
    image: {blogImage}
  },
  {
    id: 3,
    title: "Family Worship in the Christian Home",
    excerpt: "Practical guidance for establishing regular family worship times in your household.",
    date: "April 10, 2023",
    author: "Deacon Samuel",
    category: "Family",
    readTime: "4 min read",
    image: {blogImage}
  },
  {
    id: 4,
    title: "The Reformation and Its Legacy",
    excerpt: "How the Protestant Reformation continues to shape our faith and practice today.",
    date: "March 22, 2023",
    author: "Pastor Simon",
    category: "History",
    readTime: "8 min read",
    image: {blogImage}
  }
];


export { heroCarouselData, faqs, navList, recentArticles };