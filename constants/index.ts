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
    renaxLeaveApplication,
    renaxLogin,
    renaxNotification,
    renaxProfile,
    renaxReport,
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
  
export const projects: ProjectType[] = [  {
    id: "project-1",
    title: "Renax App",
    excerpt: ` The Workforce Management System that streamlines HR and
              management processes, including leave applications, time
              reporting, and user account management, fostering a more
              transparent, efficient, and user-friendly work environment.`,
    description: `I was tasked with creating a comprehensive workforce management system for a client aiming to enhance operational efficiency and employee engagement within their organization. The client's goal was to develop a unified platform that streamlined various HR and management processes, including leave applications, time reporting, and user account management, thereby fostering a more transparent, efficient, and user-friendly work environment.`,
    role: "Software Developer / Project Lead",
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
    // renaxLeaveApplicationImg: renaxLeaveApplication,
    // renaxLoginImg: renaxLogin,
    // renaxNotificationImg: renaxNotification,
    // renaxProfileImg: renaxProfile,
    renaxReportImg: "/assets/projects/TimeReportRenax.png",
    // demo: "https://rms-renax.vercel.app/",
  },
  {
    id: "project-2",
    title: "Arbetscentralen",
    excerpt: `Recruitment company platform is a seamless platform for connecting job seekers with employers, while providing an easy-to-use backend for administrators to manage user accounts, job postings, and applications.`,
    description:"Design and developed a website tailored specifically to the needs of a recruiting firm. The objectives were clear: to provide a platform that would allow job seekers and employers to connect seamlessly, while also enabling the company's administrators to manage the backend with ease.",
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
    demo: "https://arbetscentralen.vercel.app",
  },
  {
    id: "project-3",
    title: "Truck-Seek",
    excerpt: `Truck driver recruitment company website is a dedicated platform that connects qualified truck drivers with employers, offering an easy-to-navigate interface for job listings, applications, and seamless backend management for administrators.`,
    description: 'This is a single-page calculator app built with React',
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
    demo: "https://www.truck-seek.com/",
  },

  // {
  //   id: 'project-5',
  //   name: 'Milan Stanojevic',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: renaxDashboard,
  //   demo: 'https://renax-wms-renax.vercel.app/',
  // },
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
  