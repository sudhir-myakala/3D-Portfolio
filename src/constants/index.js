import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ml,
    webs,
    firebase,
    bootstrap,
    vue,
    glide,
    place,
    glid,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: " Data Science Intern ",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    
    {
      title: "Develop Apps using Glide",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Glide",
      icon: glide,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "VueJS",
      icon: vue,
    },
    
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "Brain O Vision",
      icon: ml,
      iconBg: "#E6DEDD",
      date: "March 2023 - May 2023",
      points: [
        "During my enriching one-month internship at Brain O vision Company ,I had the opportunity to delve into the realm of data science.",
        "I engaged in data analysis, modeling, and interpretation, gaining valuable insights into the practical applications of AI and machine learning.",
       
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Grailmaker Innovations",
      icon: webs,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Oct 2023",
      points: [
        "As an intern at Grailmaker Innovations, I am fortunate to work on dynamic and real-time web development projects. One of the key frameworks we employ to achieve this is VueJS.",
        "Working with VueJS has enabled me to gain a deep understanding of modern web development practices, including responsive design, component-based architecture, and real-time functionality",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Placement Portal",
      description:
        "This portal provides details and information about job openings of different companies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: place,
      source_code_link: "https://github.com/sudhir-myakala/placement-cell",
    },
    {
      name: "REVIVE",
      description:
        " It is Web-Based application having core functionalities encompass a comprehensive range of features, including the ability to facilitate the sale, purchase,donation, and renovation of waste management items",
      tags: [
        {
          name: "Glide",
          color: "blue-text-gradient",
        },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: glid,
      source_code_link: "https://revive-6f00.glide.page",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };