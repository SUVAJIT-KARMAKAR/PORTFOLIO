import React from "react";

// COMPONENTS
import SkillCard from "./SkillCard";

// SKILL DETAILS
const skillItem = [
  {
    imgSrc: "../src/assets/skills/cpp.svg",
    label: "C++ Programming",
    desc: "Programming language",
  },
  {
    imgSrc: "../src/assets/skills/go.svg",
    label: "Go Programming",
    desc: "Programming language",
  },
  {
    imgSrc: "../src/assets/skills/js.svg",
    label: "JavaScript",
    desc: "Programming language",
  },
  {
    imgSrc: "../src/assets/skills/ts.svg",
    label: "TypeScript",
    desc: "Programming language",
  },
  {
    imgSrc: "../src/assets/skills/python.svg",
    label: "Python",
    desc: "Programming language",
  },
  {
    imgSrc: "../src/assets/skills/rust.svg",
    label: "Rust",
    desc: "Programming language",
  },
  {
    imgSrc: "../src/assets/skills/html.svg",
    label: "HTML",
    desc: "Markup language",
  },
  {
    imgSrc: "../src/assets/skills/css.svg",
    label: "CSS",
    desc: "Design languge",
  },
  {
    imgSrc: "../src/assets/skills/tailwind.svg",
    label: "TailwindCSS",
    desc: "CSS framework",
  },
  {
    imgSrc: "../src/assets/skills/react.svg",
    label: "ReactJS",
    desc: "JavaScript library",
  },
  {
    imgSrc: "../src/assets/skills/nextjs.svg",
    label: "NextJS",
    desc: "ReactJs framework",
  },
  {
    imgSrc: "../src/assets/skills/node-js.svg",
    label: "NodeJS",
    desc: "JavaScript runtime",
  },
  {
    imgSrc: "../src/assets/skills/express.svg",
    label: "ExpressJS",
    desc: "NodeJS framework",
  },
  {
    imgSrc: "../src/assets/skills/fastapi.svg",
    label: "FastAPI",
    desc: "Backend framework",
  },
  {
    imgSrc: "../src/assets/skills/springboot.svg",
    label: "Java SpringBoot",
    desc: "Backend framework",
  },
  {
    imgSrc: "../src/assets/skills/postgresql.svg",
    label: "PSQL",
    desc: "Database",
  },
  {
    imgSrc: "../src/assets/skills/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL database",
  },
  {
    imgSrc: "../src/assets/skills/git.svg",
    label: "GIT",
    desc: "Version control",
  },
  {
    imgSrc: "../src/assets/skills/docker.svg",
    label: "Docker",
    desc: "Containarization",
  },
  {
    imgSrc: "../src/assets/skills/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-two">My Weapons Of Choice</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
