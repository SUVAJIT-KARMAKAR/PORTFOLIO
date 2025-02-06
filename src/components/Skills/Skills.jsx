import React from "react";

// COMPONENTS
import SkillCard from "./SkillCard";

// SKILL DETAILS
const skillItem = [
  {
    imgSrc: "../../../public/skills/cpp.svg",
    label: "C++ Programming",
    desc: "Programming language",
  },
  {
    imgSrc: "../../../public/skills/go.svg",
    label: "Go Programming",
    desc: "Programming language",
  },
  {
    imgSrc: "../../../public/skills/js.svg",
    label: "JavaScript",
    desc: "Programming language",
  },
  {
    imgSrc: "../../../public/skills/ts.svg",
    label: "TypeScript",
    desc: "Programming language",
  },
  {
    imgSrc: "../../../public/skills/python.svg",
    label: "Python",
    desc: "Programming language",
  },
  {
    imgSrc: "../../../public/skills/rust.svg",
    label: "Rust",
    desc: "Programming language",
  },
  {
    imgSrc: "../../../public/skills/html.svg",
    label: "HTML",
    desc: "Markup language",
  },
  {
    imgSrc: "../../../public/skills/css.svg",
    label: "CSS",
    desc: "Design languge",
  },
  {
    imgSrc: "../../../public/skills/tailwind.svg",
    label: "TailwindCSS",
    desc: "CSS framework",
  },
  {
    imgSrc: "../../../public/skills/react.svg",
    label: "ReactJS",
    desc: "JavaScript library",
  },
  {
    imgSrc: "../../../public/skills/nextjs.svg",
    label: "NextJS",
    desc: "ReactJs framework",
  },
  {
    imgSrc: "../../../public/skills/node-js.svg",
    label: "NodeJS",
    desc: "JavaScript runtime",
  },
  {
    imgSrc: "../../../public/skills/express.svg",
    label: "ExpressJS",
    desc: "NodeJS framework",
  },
  {
    imgSrc: "../../../public/skills/fastapi.svg",
    label: "FastAPI",
    desc: "Backend framework",
  },
  {
    imgSrc: "../../../public/skills/springboot.svg",
    label: "Java SpringBoot",
    desc: "Backend framework",
  },
  {
    imgSrc: "../../../public/skills/postgresql.svg",
    label: "PSQL",
    desc: "Database",
  },
  {
    imgSrc: "../../../public/skills/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL database",
  },
  {
    imgSrc: "../../../public/skills/git.svg",
    label: "GIT",
    desc: "Version control",
  },
  {
    imgSrc: "../../../public/skills/docker.svg",
    label: "Docker",
    desc: "Containarization",
  },
  {
    imgSrc: "../../../public/skills/figma.svg",
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
