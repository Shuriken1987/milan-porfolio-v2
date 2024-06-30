// types.ts
export interface Testimonial {
    id: string;
    name: string;
    title: string;
    text: string;
  }
  
  export type ExperienceType = {
    title: string;
    period: string;
    description: string[];
  };

  export type ProjectTag = {
    name: string;
    icon: string;
  };
  
  export type ProjectType = {
    id: string;
    title: string;
    excerpt: string;
    description: string;
    role: string;
    tags: ProjectTag[];
    image: string;
    featuredImg: string;
    renaxLeaveApplicationImg?: string;
    renaxLoginImg?: string;
    renaxNotificationImg?: string;
    renaxProfileImg?: string;
    renaxReportImg?: string;
    mobileImage?: string;
    secondImage?: string;
    thirdImage?: string;
    fourthImage?: string;
    demo?: string;
  };

  export type NavLink = {
    id: string;
    title: string;
  };