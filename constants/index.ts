// import {
//     frontend,
//     backend,
//     ux,
//     prototyping,
//     javascript,
//     typescript,
//     html,
//     css,
//     reactjs,
//     nextjs,
//     expressjs,
//     redux,
//     tailwind,
//     nodejs,
//     git,
//     figma,
//     mongoDb,
//     renaxLeaveApplication,
//     renaxLogin,
//     renaxNotification,
//     renaxProfile,
//     renaxReport,
//     renaxDashboard,
//     truckSeek,
//     truckSeekMobile,
//     arbetscentralen,
//     arbetscentralenMobile,
//     arbetscentralenSecond,
//     arbetscentralenThird,
//     arbetscentralenFourth,
//   } from "../../public/assets";
  
  export const navLinks = [
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
  
//   const experiences = [
//     {
//       title: "SOFTWARE DEVELOPER",
//       company_name: "EDUMENT AB",
//       // icon: edument,
//       iconBg: "#333333",
//       date: "Nov 2023 - Feb 2024",
//     },
//     {
//       title: "FULL STACK DEVELOPER",
//       company_name: "RENAX AB",
//       // icon: renax,
//       iconBg: "#333333",
//       date: "Jan 2023 - Sep 2023",
//     },
//     {
//       title: "FULL STACK DEVELOPER",
//       company_name: "FREELANCE",
//       // icon: freelance,
//       iconBg: "#333333",
//       date: "Aug 2021 - ",
//     },
//   ];
  
//   const projects = [
//     {
//       id: "project-1",
//       title: "RENAX",
//       description: `I was tasked with creating a comprehensive workforce management system for a client aiming to enhance operational efficiency and employee engagement within their organization. The client's goal was to develop a unified platform that streamlined various HR and management processes, including leave applications, time reporting, and user account management, thereby fostering a more transparent, efficient, and user-friendly work environment.`,
//       role: "Software Developer / Project Lead",
//       tags: [
//         {
//           name: "react",
//           icon: reactjs,
//         },
//         {
//           name: "mongodb",
//           icon: mongoDb,
//         },
//         {
//           name: "node.js",
//           icon: nodejs,
//         },
//         {
//           name: "mongodb",
//           icon: expressjs,
//         },
//         {
//           name: "tailwind",
//           icon: tailwind,
//         },
//       ],
//       image: renaxDashboard,
//       renaxLeaveApplicationImg: renaxLeaveApplication,
//       renaxLoginImg: renaxLogin,
//       renaxNotificationImg: renaxNotification,
//       renaxProfileImg: renaxProfile,
//       renaxReportImg: renaxReport,
//       // demo: "https://rms-renax.vercel.app/",
//     },
//     {
//       id: "project-2",
//       title: "ARBETSCENTRALEN",
//       // description:"Design and developed a website tailored specifically to the needs of a recruiting firm. The objectives were clear: to provide a platform that would allow job seekers and employers to connect seamlessly, while also enabling the company's administrators to manage the backend with ease.",
//       role: "Full Stack Developer / Project Lead",
//       tags: [
//         {
//           name: "next.js",
//           icon: nextjs,
//         },
//         {
//           name: "mongo",
//           icon: mongoDb,
//         },
//         {
//           name: "scss",
//           icon: css,
//         },
//       ],
//       image: arbetscentralen,
//       mobileImage: arbetscentralenMobile,
//       secondImage: arbetscentralenSecond,
//       thirdImage: arbetscentralenThird,
//       fourthImage: arbetscentralenFourth,
//       demo: "https://arbetscentralen.vercel.app",
//     },
//     {
//       id: "project-3",
//       title: "TRUCK-SEEK",
//       // description: 'This is a single-page calculator app built with React',
//       role: "Frontend Developer ",
//       tags: [
//         {
//           name: "nextjs",
//           icon: nextjs,
//         },
//         {
//           name: "tailwind",
//           icon: tailwind,
//         },
//       ],
//       image: truckSeek,
//       mobileImage: truckSeekMobile,
//       demo: "https://www.truck-seek.com/",
//     },
  
//     // {
//     //   id: 'project-5',
//     //   name: 'Milan Stanojevic',
//     //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
//     //   tags: [
//     //     {
//     //       name: 'nextjs',
//     //       color: 'blue-text-gradient',
//     //     },
//     //     {
//     //       name: 'supabase',
//     //       color: 'green-text-gradient',
//     //     },
//     //     {
//     //       name: 'css',
//     //       color: 'pink-text-gradient',
//     //     },
//     //   ],
//     //   image: renaxDashboard,
//     //   demo: 'https://renax-wms-renax.vercel.app/',
//     // },
//   ];
  
//   const testimonials = [
//     {
//       id: "testimonial-1",
//       name: "Matt Phelps",
//       // title: "CEO of Nudify",
//       text: `Every single time Milan goes above and beyond what you ask and expect of him. He's find and fixes problems in my application that I don't even know exist. He really feels like a developer on my team, thinking as a business owner, not just a freelancer.`,
//     },
//     {
//       id: "testimonial-2",
//       name: "Nenad Dacic",
//       title: "CEO of Renax AB",
//       text: `Milan demonstrated exceptional technical and innovative skills in developing our workforce management system, significantly enhancing our operational efficiencies. As a person, he is highly dedicated, communicative, and team-oriented, making him a valuable asset to any team.`,
//     },
//     {
//       id: "testimonial-3",
//       name: "Jelena Milenkovic",
//       title: "CEO of Truck-Seek",
//       text: `Milan elevated our frontend and spirits alike; he is not just a coder, he is a morale booster with a keyboard!`,
//     },
//   ];
  
//   const introdata = [
//     "Full Stack Developer",
//     "Frontend Developer",
//     "Software Developer",
//   ];
  
//   export {
//     services,
//     technologies,
//     experiences,
//     projects,
//     introdata,
//     testimonials,
//   };
  