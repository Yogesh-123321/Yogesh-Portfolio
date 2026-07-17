// ─────────────────────────────────────────────────────────────
// Every fact in this file comes directly from Yogesh's resume.
// Edit here to update the whole site. Swap image paths in the
// PROFILE / PROJECTS / EXPERIENCE objects to replace placeholders.
// ─────────────────────────────────────────────────────────────
import profilePhoto from "../assets/images/profile.png";
import tyrefusionImg from "../assets/images/tyrefusion.png";
import dexlifyImg from "../assets/images/dexlify.png";
import serveSyncImg from "../assets/images/serve-sync.png";
export const PROFILE = {
  name: 'Yogesh Madan',
  designator: 'U1',
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'MERN Developer',
    'Java Developer',
    'Backend Developer',
    'React Developer',
  ],
  location: 'Faridabad, Haryana',
  email: 'yogeshmadan1428@gmail.com',
  phone: '7303692551',
  github: 'https://github.com/Yogesh-123321',
  linkedin: 'https://www.linkedin.com/in/yogesh-madan-058409329/',
  photo: profilePhoto, // drop an image at src/assets/profile.jpg and set this to it
  tagline:
    'Electronics & Computer Engineering student who builds production-ready software end to end — React and Next.js on the front, Node/Express and MongoDB on the back, deployed and running on AWS.',
};

export const EDUCATION = {
  school: 'J.C. Bose University of Science and Technology, YMCA',
  degree: 'B.Tech, Electronics and Computer Engineering',
  location: 'Faridabad, Haryana',
  period: '2022 – 2026',
  cgpa: '7.813 / 10',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home', designator: 'U1' },
  { id: 'about', label: 'About', designator: 'U2' },
  { id: 'skills', label: 'Skills', designator: 'U3' },
  { id: 'experience', label: 'Experience', designator: 'U4' },
  { id: 'projects', label: 'Projects', designator: 'U5' },
  { id: 'achievements', label: 'Achievements', designator: 'U6' },
  { id: 'contact', label: 'Contact', designator: 'U7' },
];

export const EXPERIENCE = [
  {
    id: 'exp-2',
    company: 'Technotrendz Solutions Pvt. Ltd.',
    role: 'Software Developer Intern',
    period: '12 Jan 2026 – 15 Jul 2026',
    current: true,
    summary:
      'End-to-end software development across web, mobile, and cloud for a geospatial survey management platform, working closely with BSNL on survey and field-data management initiatives.',
    points: [
      'Led development of a MERN-based GP Survey Management Platform: survey workflows, image and document management, automated Excel report generation, role-based administration, and scalable storage on MongoDB Atlas.',
      'Designed and integrated RESTful APIs with Node.js and Express.js; deployed production apps on AWS EC2 with Nginx, PM2, SSL, and Linux server administration.',
      'Built Android applications for GNSS-based field surveying — Bluetooth device integration, real-time location visualization, mapping, and field data collection.',
      'Collaborated across firmware and hardware teams to integrate positioning data into the software platform end to end.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'AWS EC2', 'Android', 'REST APIs'],
  },
  {
    id: 'exp-1',
    company: 'Technotrendz Solutions Pvt. Ltd.',
    role: 'Software Development Trainee',
    period: '16 Jun 2025 – 14 Aug 2025',
    current: false,
    summary:
      'Contributed to a scalable system architecture managing concurrent data streams from 5,000 devices over a TCP server.',
    points: [
      'Built and tested a system architecture handling concurrent data streams from 5,000 devices via a TCP server.',
      'Worked on a React.js front-end dashboard alongside supporting HTTP/TCP servers for bidirectional data flow.',
      'Implemented logic for remote monitoring and control of devices.',
      'Supported the final deployment and testing phase of the application on the AWS cloud platform.',
    ],
    stack: ['React', 'TCP/HTTP', 'AWS'],
  },
];

export const PROJECTS = [
  {
    id: 'tyrefusion',
    name: 'TyreFusion',
    tagline: 'Full-stack tyre e-commerce platform',
    description:
      'A production-ready MERN-based tyre marketplace with vehicle-based tyre search, product management, order processing, and a comprehensive admin dashboard — freelance client project, live on AWS with a custom domain.',
    features: [
      'Vehicle-based tyre search, product catalog, and end-to-end order processing',
      'OTP-based authentication via the Resend API and role-based access control on secure REST APIs',
      'Cloudinary integration for media management across the product catalog',
      'Deployed on AWS with a custom domain; technical SEO, Google Analytics, and Search Console integration for discoverability',
    ],
    challenges:
      'Shipping a client-facing marketplace end to end — auth, payments-adjacent order flow, media handling, and SEO — as a solo freelance build on a production timeline.',
    impact: 'Delivered and deployed as a live, client-owned e-commerce platform on AWS with a custom domain.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Cloudinary', 'AWS', 'Resend API'],
    github: '',
    demo: 'https://www.tyrefusion.in/',
    image: tyrefusionImg,
    featured: true,
  },
  {
    id: 'dexlify',
    name: 'Dexlify',
    tagline: 'A multi-tool developer suite',
    description:
      'A multi-tool developer suite bundling a JSON Formatter, Code Explainer, Snippet Vault, API Tester, Markdown Editor, and more into one fast, modular interface.',
    features: [
      'JSON Formatter, Code Explainer, Snippet Vault, API Tester, Markdown Editor',
      'High-performance, modular frontend built with React and Vite',
      'Custom-tailored ShadCN components for a responsive, intuitive UI',
      'JWT authentication with global state managed via Zustand',
    ],
    challenges:
      'Keeping a growing set of independent developer tools consistent in UI and state without duplicating logic across the suite.',
    impact: 'Launched with a growing user base and positive feedback on interface design and usability.',
    stack: ['React.js', 'Tailwind', 'Shadcn', 'JavaScript', 'Zustand', 'MongoDB', 'Vite', 'Node.js', 'Python (OpenAI)'],
    github: 'https://github.com/Yogesh-123321/dexlify-devtools',
    demo: 'https://dexlify-frontend.onrender.com/',
    image: dexlifyImg,
  },
  {
    id: 'serve-sync',
    name: 'Serve-Sync',
    tagline: 'Full-stack service request manager',
    description:
      'A full-stack web application that lets users synchronize and manage service requests efficiently, with an emphasis on backend logic and seamless frontend interaction.',
    features: [
      'Responsive layouts in HTML/CSS with dynamic JavaScript interaction',
      'RESTful APIs in Node.js handling requests, validation, and business logic',
      'MongoDB integration for user and service-request data with secure access control',
      'Deployed on Render for reliable access and performance',
    ],
    challenges:
      'Coordinating real-time synchronization of service requests between users while keeping backend logic and data access secure.',
    impact: 'Deployed and running on Render, giving users a reliable way to manage service requests end to end.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Yogesh-123321/serve_sync2.0',
    demo: 'https://serve-sync.onrender.com/',
    image: serveSyncImg,
  },
];

export const SKILLS = {
  Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'SQL', 'Git'],
  Frontend: ['ReactJS', 'Next.js', 'TailwindCSS', 'Vite', 'Shadcn', 'Zustand'],
  'Backend & APIs': ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'MongoDB'],
  'Cloud & DevOps': ['AWS EC2', 'Nginx', 'PM2', 'SSL', 'Linux Server Administration'],
  'Tools & Integrations': ['Cloudinary', 'Google Analytics', 'Search Console', 'Postman'],
  'Computer Fundamentals': ['Data Structures (Java)', 'Algorithms', 'OOPS', 'DBMS', 'Computer Networks'],
};

export const ACHIEVEMENTS = [
  {
    id: 'ach-1',
    title: '400+ problems solved',
    detail: 'Across LeetCode, GeeksforGeeks, and Codeforces.',
    year: '',
    stat: 400,
    suffix: '+',
  },
  {
    id: 'ach-2',
    title: '1st Position',
    detail: 'National Technology Day, J.C. Bose University of Science and Technology.',
    year: '2023',
  },
  {
    id: 'ach-3',
    title: '4th Position',
    detail: 'Escalade, IIT Guwahati.',
    year: '2023',
  },
  {
    id: 'ach-4',
    title: '4th Position',
    detail: 'Super Strikers, Cognizance, IIT Roorkee.',
    year: '2024',
  },
  {
    id: 'ach-5',
    title: 'UAS Bootcamp',
    detail: '"UAS and its Applications" basic bootcamp, Centre for Development of Advanced Computing, Noida.',
    year: '2024',
  },
];

export const CODING_PROFILES = [
  { name: 'GitHub', handle: 'Yogesh-123321', url: 'https://github.com/Yogesh-123321' },
  { name: 'LeetCode', handle: 'Yogesh Madan', url: 'https://leetcode.com/u/yogeshmadan1428/' },
];

export const RESUME_FILE = '/Yogesh_Madan_Resume.pdf';
