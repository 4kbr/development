import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gptOpenaiImg from "@/../public/gpt-openai.png";
import zarraImg from "@/../public/zarra-development-design.png";
import bankImg from "@/../public/bank-startup.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Online Bootcamp",
    description:
      "In late 2021, I made a significant decision to specialize in programming by enrolling in an online web development bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    description:
      "In 2022, I began my journey as a junior developer, engaging in full-stack development utilizing core technologies like React, Node, Express, and MongoDB, or known as the MERN Stack. Midway through 2022, I earned a promotion to a Mobile developer role.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    description:
      "Currently, I work as a full-stack developer, specializing in web and mobile development. My stack includes React, Next.js, Node.js, MongoDB, PostgreSQL, TypeScript, Tailwind, and Flutter. I am open to freelance or full time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "GPT3 Launch Blog",
    description:
      "This website serves as a model within an example project a startup landing page.",
    tags: ["React", "TypeScript"],
    imageUrl: gptOpenaiImg,
    link: "https://gpt-blog-alpha.vercel.app",
  },
  {
    title: "Zarra Development & Design Consultant",
    description:
      "This project was created with some animation in several sections to make the appearance feel alive",
    tags: ["React", "TypeScript", "Framer-Motion", "Sass"],
    imageUrl: zarraImg,
    link: "https://zarra.vercel.app",
  },
  {
    title: "Bank Startup Landing Page",
    description:
      "Modern websites use tailwind to create a responsive display and create a strong impression",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: bankImg,
    link: "https://bank-landing-page-lac.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flutter",
] as const;
