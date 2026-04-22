import type { Profile, Project } from "./types";

export const profile: Profile = {
  name: "Luiz Soares dos Santos Baglie",
  description:
    "Full-stack Software Engineer. Loves giant robots and weird music.\nCurrent main stacks: Node.js, TypeScript, React, Python, FastAPI, LangChain, iOS, SwiftUI, AWS",
  githubUrl: "https://github.com/LuizSSB",
  instagramUrl: "https://instagram.com/luizssb",
  instagramLabel: "@luizssb",
  linkedinUrl:
    "https://www.linkedin.com/in/luiz-soares-dos-santos-baglie-b706662b/",
};

export const projects: Project[] = [
  {
    name: "Moises AI - iOS engineering manager",
    description: "iOS app that searches for songs on iTunes and plays them.",
    urls: [
      {
        label: "Repository",
        href: "https://github.com/LuizSSB/lssb-moises",
      },
    ],
    types: ["iOS"],
    languages: ["Swift"],
    frameworks: ["SwiftUI"],
    date: "2026-03-01",
  },
  {
    name: "Ascertain - Staff Backend engineer",
    description:
      "Rest API for managing hospital patients. Allows uploading notes for specific patients. Summarizes patient data using AI.",
    urls: [
      {
        label: "Repository",
        href: "https://github.com/LuizSSB/lssb-ascertain-backend",
      },
    ],
    types: ["backend"],
    languages: ["Python"],
    frameworks: ["FastAPI", "Deep Agents", "LangChain"],
    date: "2026-03-01",
  },
  {
    name: "SFR3 - Staff Full Stack Engineer",
    description:
      "iOS app that does simple CRUD of data, partly natively, partly via web view with which it communicates.",
    urls: [
      {
        label: "Repository",
        href: "https://github.com/LuizSSB/lssb-sfr3",
      },
    ],
    types: ["iOS", "web"],
    languages: ["Swift"],
    frameworks: ["SwiftUI", "React", "Redux", "Redux-Saga"],
    date: "2025-04-01",
  },
  {
    name: "Modus Create - Staff Full Stack Engineer",
    description:
      "React responsive SPA that loads a list of products from REST API.",
    urls: [
      {
        label: "Repository",
        href: "https://github.com/LuizSSB/lssb-moduscreate-react",
      },
    ],
    types: ["web"],
    languages: [],
    frameworks: ["React", "Redux", "Redux-Saga", "Tailwind"],
    date: "2022-04-01",
  },
  {
    name: "Adidas - Senior Android Engineer",
    description:
      "Native Android app that lists products from REST API, presents their details and allows users to leave a review.",
    urls: [
      {
        label: "Repository",
        href: "https://github.com/LuizSSB/lssb-adidas-app-android",
      },
    ],
    types: ["Android"],
    languages: ["Kotlin"],
    frameworks: ["JetPack"],
    date: "2021-03-01",
  },
  {
    name: "eSapiens - Senior Full Stack Engineer",
    description:
      "The Android app simulates a dating app, where users are loaded from a REST API. The algorithmic challenge was actually developed as a Swift CLI program. It was taken from OBI (Brazilian Informatics Olympiad).",
    urls: [
      {
        label: "App Repository",
        href: "https://github.com/LuizSSB/lssb-esapiens-app",
      },
      {
        label: "Algorithm Repository",
        href: "https://github.com/LuizSSB/lssb-esapiens-alg",
      },
    ],
    types: ["Android", "algorithmic challenge"],
    languages: ["Kotlin", "Swift"],
    frameworks: [],
    date: "2019-02-01",
  },
  {
    name: "Finch - Senior Full Stack Engineer",
    description: "Full stack service/app for CRUDing debt protest files.",
    urls: [
      {
        label: "Backend Repository",
        href: "https://github.com/LuizSSB/lssb-finch-backend",
      },
      {
        label: "Frontend Repository",
        href: "https://github.com/LuizSSB/lssb-finch-frontend",
      },
    ],
    types: ["full-stack", "backend", "web"],
    languages: ["C#", "JavaScript"],
    frameworks: ["ServiceStack", "AngularJS", "Bootstrap", "HTML5 Boilerplate"],
    date: "2018-12-01",
  },
  {
    name: "NewWay - Senior iOS Engineer",
    description:
      "iOS app listing popular GitHub repositories. Adapts/changes the layout whenever the device is rotated.",
    urls: [
      {
        label: "Repository",
        href: "https://github.com/LuizSSB/lssb-newway-app",
      },
    ],
    types: ["iOS"],
    languages: ["Swift"],
    frameworks: ["UIKit", "ConstraintLayout"],
    date: "2018-04-01",
  },
];
