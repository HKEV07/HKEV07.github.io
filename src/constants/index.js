import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  docker,
  transcendence,
  inception,
  irc,
  minishell,
  cub3d,
  cursus,
  pdf,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "About",
    title: "About",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const Educations = [
  {
    title: "1337 Coding School (42 Network)",
    school_name: "1337",
    date: "2022 - Present",
    points: [
      "Computer Science.",
      "Relevant Coursework: Algorithms, Data Structures, Web Development, DevOps.",
    ],
  },
  {
    title: "Ofppt Vocational Training Center",
    school_name: "Ofppt",
    date: "2017 - 2019",
    points: [
      "Specialized Technician in Software Development Techniques.",
    ],
  },
  {
    title: "Allal Ben Abdellah High School Sidi Aissa",
    school_name: "High School",
    date: "2015 - 2016",
    points: [
      "High School Degree in Physics Science.",
    ],
  }
];


const projects = [
  {
    name: "Ft_Transcendence",
    description:
      "This project demonstrates modern web development practices and real-time communication implementation",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Scss/Css",
        color: "pink-text-gradient",
      },
    ],
    image: transcendence,
    source_code_link: "https://github.com/HKEV07/TranDaDan",
  },
  {
    name: "Inception",
    description:
      "A robust containerized web hosting environment that demonstrates advanced systems administration and DevOps practices",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "WordPress",
        color: "green-text-gradient",
      },
      {
        name: "NGINX",
        color: "green-text-gradient",
      },
      {
        name: "MariaDB",
        color: "pink-text-gradient",
      },
    ],
    image: inception,
    source_code_link: "https://github.com/HKEV07/inception",
  },
  {
    name: "ft_irc",
    description:
      "A custom IRC (Internet Relay Chat) server implementation that demonstrates low-level network programming and real-time communication protocols",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
    ],
    image: irc,
    source_code_link: "https://github.com/HKEV07/ft_irc",
  },
  {
    name: "Cub3d",
    description:
      "Raycasting is a rendering technique to create a 3D perspective in a 2D map",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
    ],
    image: cub3d,
    source_code_link: "https://github.com/HKEV07/ft_irc",
  },
  {
    name: "Minishell",
    description:
      "Minishell will introduce you to the world of shells, which provide a convenient text interface to interact with your system",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
    ],
    image: minishell,
    source_code_link: "https://github.com/HKEV07/minishell",
  },
  {
    name: "42cursus",
    description:
      "he common core of the 42 curriculum represents the minimum set of skills to be ready for a first professional experience. It provides basic and standard coding skills, as well as a fruitful range of soft skills",
      tags: [
        {
          name: "c/c++",
          color: "blue-text-gradient",
        },
      ],
    image: cursus,
    source_code_link: "https://github.com/HKEV07",
    pdf_path: pdf,
  },
];

export { services, technologies, Educations, projects };
