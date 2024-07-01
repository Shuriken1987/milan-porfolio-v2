import { ExperienceType, NavLink, ProjectType, Testimonial } from "@/types";
import {
    frontend,
    backend,
    ux,
    prototyping,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    expressjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    github,
    linkedin,
    mongoDb,
    // renaxLeaveApplication,
    // renaxLogin,
    // renaxNotification,
    // renaxProfile,
    // renaxReport,
    renaxDashboard,
    truckSeek,
    truckSeekMobile,
    arbetscentralen,
    arbetscentralenMobile,
    arbetscentralenSecond,
    arbetscentralenThird,
    arbetscentralenFourth,
  } from "../public/assets";
  
  export const navLinks: NavLink[] = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

export const experiences: { [key: string]: ExperienceType } = {
    Edument: {
      title: "Software developer",
      period: "Nov 2023 - Feb 2024",
      description: [
        "Successfully optimized application speed by implementing advanced front-end technologies, resulting in a 40% improvement in loading times.",
        "Enhanced overall application efficiency by 50% through strategic optimizations and coding best practices.",
        "Completed an advanced React course provided by the employing company, deepening knowledge and skills in modern web development frameworks.",
        "Received personalized TypeScript training from a mentor, leading to significant enhancements in coding proficiency and project contributions.",
      ],
    },
    Renax:  {
      title: "Software developer",
      period: "Jan 2023 - Sep 2023",
      description: [
        `Spearheaded the development and integration of a comprehensive workforce management system, boosting user engagement by 25% and operational efficiency by 30%.`,
        `Architected and deployed interactive React-based user interfaces, enhancing customer satisfaction scores by 20% and contributing to a 15% increase in projectsuccess metrics.`,
        `Streamlined data interactivity by integrating RESTful services and optimizing full-stack operations, which resulted in a 35% reduction in data retrieval times.`,
        `Ensured high standards of quality by developing testable modules and thorough test cases for the application.`,
      ],
    },
    Freelance:  {
      title: "Full stack developer",
      period: "Aug 2021 - Present",
      description: [
        `Engineered and launched over ten web applications with React and Next.js, achieving an improvement in responsive design and user experience ratings.`,
        `Designed and implemented robust backend APIs using Node.js and Express, enabling faster data exchange by 40% and enhancing integration between frontendand backend systems.`,
        `Implemented MongoDB for data management, which improved application responsiveness by 50% and user satisfaction scores.`,
        `Optimized application performance through efficient database queries and streamlined code implementation.`,
        `Strengthened security measures within applications by conducting vulnerability assessments and implementing patches as needed.`,
      ],
    },
  };

export const testimonials: Testimonial[] = [    {
    id: "testimonial-1",
    name: "Matt Phelps",
    title: "CEO of Inkgen.ai",
    text: `Every single time Milan goes above and beyond what you ask and expect of him. He's find and fixes problems in my application that I don't even know exist. He really feels like a developer on my team, thinking as a business owner, not just a freelancer.`,
  },
  {
    id: "testimonial-2",
    name: "Nenad Dacic",
    title: "CEO of Renax AB",
    text: `Milan demonstrated exceptional technical and innovative skills in developing our workforce management system, significantly enhancing our operational efficiencies. As a person, he is highly dedicated, communicative, and team-oriented, making him a valuable asset to any team.`,
  },
  {
    id: "testimonial-3",
    name: "Jelena Milenkovic",
    title: "CEO of Truck-Seek",
    text: `Milan elevated our frontend and spirits alike; he is not just a coder, he is a morale booster with a keyboard!`,
  },
];
  
export const projects: ProjectType[] = [ 
   {
    id: "project-1",
    slug: "renax-app",
    title: "Renax App",
    excerpt: `The Workforce Management System that streamlines HR and
              management processes, including leave applications, time
              reporting, and user account management, fostering a more
              transparent, efficient, and user-friendly work environment.`,
    description: `The Workforce Management System comprises a client app and a management portal, both designed to streamline HR and management processes. The client app offers employees an intuitive interface for managing leave applications, time reporting, and user account settings. The management portal provides managers with powerful tools for overseeing workforce operations, generating reports, and managing user accounts.`,
    role: "Software Developer",
    tags: [
      {
        name: "react",
        icon: "/assets/tech/reactjs.png",
      },
      {
        name: "mongodb",
        icon: "/assets/tech/mongoDB.png",
      },
      {
        name: "node.js",
        icon: "/assets/tech/nodejs.png",
      },
      {
        name: "mongodb",
        icon: "/assets/tech/mongoDB.png",
      },
      {
        name: "tailwind",
        icon: "/assets/tech/tailwind.png",
      },
    ],
    image: "/assets/projects/renax-dashboard.png",
    featuredImg: "/assets/projects/renax_featured.png",
    images: [
      "/assets/projects/renax_leave_application.png",
      "/assets/projects/renax_notifications.png",
      "/assets/projects/renax_profile.png",
      "/assets/projects/renax_report.png",
    ], 
    // demo: "https://rms-renax.vercel.app/",
    technicalDetails: {
      clientApp: [
        { label: "Framework", detail: "Developed as a Progressive Web App (PWA) using React" },
        { label: "Development and Build", detail: "Vite" },
        { label: "State Management", detail: "Redux" },
        { label: "API Interactions", detail: "Axios" },
        { label: "Routing", detail: "React Router" },
        { label: "Data Fetching and Caching", detail: "Tanstack Query (formerly React Query)" },
        { label: "Testing", detail: "Vitest, Jest, Cypress, and @testing-library" },
        { label: "Styling", detail: "TailwindCSS" },
      ],
      backend: [
        { label: "Framework", detail: "Node.js with Express.js" },
        { label: "Database", detail: "MongoDB using mongoose for object modeling" },
        { label: "Authentication", detail: "JWT" },
        { label: "Real-time Communication", detail: "Socket.io" },
      ],
    },
    features: [
      {
        title: "Leave Applications",
        description: "Employees can easily apply for leave, choose the type of leave, and track the status of their applications. This feature streamlines the process of requesting and managing time off, ensuring transparency and efficiency.",
      },
      {
        title: "Time Reporting",
        description: "Employees can log their working hours and select the client they are working for. This functionality enables accurate time tracking and client billing, ensuring accountability and streamlined reporting.",
      },
      {
        title: "Notifications",
        description: "Push notifications keep employees informed about the status of their leave applications and any global announcements. This ensures timely updates and effective communication within the organization.",
      },
      {
        title: "User Account Settings",
        description: "Employees have access to manage their personal details and account settings, providing them with control over their information and preferences.",
      },
    ],
  },
  {
    id: "project-2",
    slug: "arbetscentralen",
    title: "Arbetscentralen",
    excerpt: `Recruitment company platform is a seamless platform for connecting job seekers with employers, while providing an easy-to-use backend for administrators to manage user accounts, job postings, and applications.`,
    description: `This website is a comprehensive platform built for a recruiting company to facilitate seamless connections between job seekers and employers. The website allows users to browse available job listings, apply for jobs, and create accounts with the option to upload their CVs. It also features a subscription service for newsletters and a robust search functionality for job listings. Additionally, the platform includes a management portal for administrators to efficiently manage job postings, applications, and user accounts. This platform is designed to provide an intuitive and user-friendly experience for both job seekers and administrators, ensuring efficient management of all recruitment-related activities.`,
    role: "Full Stack Developer / Project Lead",
    tags: [
      {
        name: "next.js",
        icon: "/assets/tech/nextjs.png",
      },
      {
        name: "mongo",
        icon: "/assets/tech/mongoDB.png",
      },
      {
        name: "scss",
        icon: "/assets/tech/css.png",
      },
    ],
    featuredImg: "/assets/projects/arbetscentralen_featured.png",
    image: "/assets/projects/arbetscentralen.png",
    mobileImage: "/assets/projects/arbetscentralen-mobile.png",
    // secondImage: arbetscentralenSecond,
    // thirdImage: arbetscentralenThird,
    // fourthImage: arbetscentralenFourth,
    technicalDetails: {
      clientApp: [
        { label: "Framework", detail: "Built with Next.js for server-side rendering and static site generation" },
        { label: "State Management", detail: "Redux" },
        { label: "API Interactions", detail: "Axios" },
        { label: "Authentication", detail: "NextAuth.js for handling authentication and user sessions" },
        { label: "Image Handling", detail: "Cloudinary for image storage and transformations" },
        { label: "Email Functionality", detail: "Nodemailer for sending emails" },
        { label: "Styling", detail: "Utilizes SCSS for styling, with additional components from Ant Design and Bootstrap for UI elements" },
      ],
      backend: [
        { label: "Framework", detail: "MongoDB for robust and scalable data storage, managed with Mongoose for object modeling." },
        { label: "Authentication", detail: "Bcrypt and bcryptjs for password hashing and security" },
        { label: "File Uploads", detail: "Multer for handling file uploads, such as CVs" },
        { label: "Utilities", detail: "UUID for generating unique identifiers" },
        { label: "Hosting", detail: "Deployed on Vercel, ensuring optimal performance and scalability" },
      ],
    },
    features: [
      {
        title: "Job Listings",
        description: "Users can browse available job listings with detailed descriptions and requirements, making it easy to find suitable job opportunities.",
      },
      {
        title: "Job Applications",
        description: "Users can apply for jobs directly through the website by submitting their CVs and other relevant documents. This feature simplifies the job application process for users.",
      },
      {
        title: "Account Creation",
        description: "Users can create personal accounts where they can upload their CVs, manage their profiles, and track their job applications.",
      },
      {
        title: "CV Upload",
        description: "Users have the option to upload their CVs, which can be accessed and reviewed by potential employers. This ensures that all necessary application materials are easily available.",
      },
      {
        title: "Newsletter Subscription",
        description: "Users can subscribe to newsletters to receive regular updates about new job listings and company news. This feature keeps users informed about the latest opportunities and developments.",
      },
      {
        title: "Job Search",
        description: "The website includes a robust search functionality that allows users to search for jobs based on keywords, locations, and other criteria. This helps users quickly find jobs that match their preferences.",
      },
      {
        title: "Management Portal",
        description: "The platform includes a management portal for administrators to manage job postings, applications, and user accounts. This ensures efficient handling of recruitment activities and user management.",
      },
    ],
    demo: "https://arbetscentralen.vercel.app",
  },
  {
    id: "project-3",
    slug: "truck-seek",
    title: "Truck-Seek",
    excerpt: `Truck driver recruitment company website is a dedicated platform that connects qualified truck drivers with employers, offering an easy-to-navigate interface for job listings, applications, and seamless backend management for administrators.`,
    description: `The Truck-Seek website is a dedicated platform designed for a truck driver recruiting company to connect qualified truck drivers with employers. Users can submit their information through a detailed application form, which is then used by the recruiting company to match them with potential employers. Similarly, companies can submit their requirements through the form, allowing the recruiting company to find suitable truck drivers for their needs. This platform streamlines the recruitment process, providing an efficient and user-friendly way for both truck drivers and employers to connect through the recruiting company.`,
    role: "Frontend Developer ",
    tags: [
      {
        name: "nextjs",
        icon: "/assets/tech/nextjs.png",
      },
      {
        name: "tailwind",
        icon: "/assets/tech/tailwind.png",
      },
    ],
    featuredImg: "/assets/projects/truck-seek_featured.png",
    image: "/assets/projects/truck-seek.png",
    mobileImage: "/assets/projects/truck-seek-mobile.png",
    technicalDetails: {
      clientApp: [
        { label: "Framework", detail: "Built with Next.js for server-side rendering and static site generation" },
        { label: "API Interactions", detail: "Axios for handling HTTP requests and interactions with backend services" },
        { label: "Email Functionality", detail: "Nodemailer for sending email notifications and confirmations" },
        { label: "Testing", detail: "Vitest, Jest, Cypress, and @testing-library" },
        { label: "Styling", detail: "TailwindCSS for styling, providing a modern and responsive design. Additional styling capabilities are provided by Sass" },
      ],
      backend: [
        { label: "Email Handling", detail: "Nodemailer is used to send and manage emails for form submissions" },
        { label: "Form Submissions", detail: "Data submitted through forms is processed and handled by the backend, facilitating seamless communication between job seekers, employers, and the recruiting company" },
      ],
    },
    features: [
      {
        title: "Job Seeker Form Submission",
        description: "Truck drivers can submit their information through a detailed application form, providing all necessary details for potential job matches.",
      },
      {
        title: "Employer Form Submission",
        description: "Companies can submit their job requirements through a dedicated form. This information is used by the recruiting company to find suitable truck drivers, ensuring a good match for both parties.",
      },
      {
        title: "Responsive Design",
        description: "The website is fully responsive, ensuring seamless functionality and visual appeal on devices of all sizes, from desktops to smartphones. This ensures that users can access the platform from any device.",
      },
      {
        title: "Email",
        description: "Automated email  are sent to users and employers to confirm form submissions and keep them updated on the status of their applications. This ensures timely communication and keeps all parties informed.",
      },
    ],
    demo: "https://www.truck-seek.com/",
  },
];

export const socials = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/milan-stanojevic-b728461a6/",
    icon: linkedin,
  },
  {
    platform: "GitHub",
    url: "https://github.com/Shuriken1987",
    icon: github,
  },
];

//   const services = [
//     {
//       title: "Frontend Developer",
//       icon: frontend,
//     },
//     {
//       title: "Backend Developer",
//       icon: backend,
//     },
//     {
//       title: "UI/UX Design",
//       icon: ux,
//     },
//     {
//       title: "Software Developer",
//       icon: prototyping,
//     },
//   ];
  
//   const technologies = [
//     {
//       name: "HTML 5",
//       icon: html,
//     },
//     {
//       name: "CSS 3",
//       icon: css,
//     },
//     {
//       name: "JavaScript",
//       icon: javascript,
//     },
//     {
//       name: "TypeScript",
//       icon: typescript,
//     },
//     {
//       name: "React JS",
//       icon: reactjs,
//     },
//     {
//       name: "Next JS",
//       icon: nextjs,
//     },
//     {
//       name: "Redux Toolkit",
//       icon: redux,
//     },
//     {
//       name: "Tailwind CSS",
//       icon: tailwind,
//     },
//     {
//       name: "Node JS",
//       icon: nodejs,
//     },
//     {
//       name: "Express JS",
//       icon: expressjs,
//     },
//     {
//       name: "MongoDB",
//       icon: mongoDb,
//     },
//     // {
//     //   name: 'graphql',
//     //   icon: graphql,
//     // },
//     // {
//     //   name: 'postgresql',
//     //   icon: postgresql,
//     // },
//     {
//       name: "git",
//       icon: git,
//     },
//     {
//       name: "figma",
//       icon: figma,
//     },
//     // {
//     //   name: 'docker',
//     //   icon: docker,
//     // },
//   ];
  

  

  
//   const introdata = [
//     "Full Stack Developer",
//     "Frontend Developer",
//     "Software Developer",
//   ];

  // export {
    // services,
    // technologies,
    // experiences,
    // projects,
    // socials,
    // introdata,
    // testimonials,
  // };
  