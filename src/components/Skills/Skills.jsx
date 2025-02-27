import React from "react";

// COMPONENTS
import SkillCard from "./SkillCard";

// SKILL DETAILS
const skillItem = [
  {
    imgSrc: "/skills/cpp.svg",
    label: "C++ Programming",
    desc: "Programming language",
  },
  {
    imgSrc: "/skills/go.svg",
    label: "Go Programming",
    desc: "Programming language",
  },
  {
    imgSrc: "/skills/js.svg",
    label: "JavaScript",
    desc: "Programming language",
  },
  {
    imgSrc: "/skills/ts.svg",
    label: "TypeScript",
    desc: "Programming language",
  },
  {
    imgSrc: "/skills/python.svg",
    label: "Python",
    desc: "Programming language",
  },
  {
    imgSrc: "/skills/rust.svg",
    label: "Rust",
    desc: "Programming language",
  },
  {
    imgSrc: "/skills/html.svg",
    label: "HTML",
    desc: "Markup language",
  },
  {
    imgSrc: "/skills/css.svg",
    label: "CSS",
    desc: "Design languge",
  },
  {
    imgSrc: "/skills/tailwind.svg",
    label: "TailwindCSS",
    desc: "CSS framework",
  },
  {
    imgSrc: "/skills/react.svg",
    label: "ReactJS",
    desc: "JavaScript library",
  },
  {
    imgSrc: "/skills/nextjs.svg",
    label: "NextJS",
    desc: "ReactJs framework",
  },
  {
    imgSrc: "/skills/node-js.svg",
    label: "NodeJS",
    desc: "JavaScript runtime",
  },
  {
    imgSrc: "/skills/express.svg",
    label: "ExpressJS",
    desc: "NodeJS framework",
  },
  {
    imgSrc: "/skills/fastapi.svg",
    label: "FastAPI",
    desc: "Backend framework",
  },
  {
    imgSrc: "/skills/springboot.svg",
    label: "Java SpringBoot",
    desc: "Backend framework",
  },
  {
    imgSrc: "/skills/postgresql.svg",
    label: "PSQL",
    desc: "Database",
  },
  {
    imgSrc: "/skills/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL database",
  },
  {
    imgSrc: "/skills/git.svg",
    label: "GIT",
    desc: "Version control",
  },
  {
    imgSrc: "/skills/docker.svg",
    label: "Docker",
    desc: "Containarization",
  },
  {
    imgSrc: "/skills/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-two revealup">My Weapons Of Choice</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] revealup">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="revealup"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
