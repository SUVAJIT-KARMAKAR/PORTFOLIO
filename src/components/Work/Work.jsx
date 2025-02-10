import React from "react";

// COMPONENTS
import ProjectCard from "./ProjectCard";

// WORK DETAILS
const works = [
  {
    imgSrc: "/projects/RTFD.png",
    title: "Real Time Face Detection",
    tags: ["Detection","Python", "OpenCV"],
    projectLink: "",
  },
  {
    imgSrc: "/projects/SAY-SOCIAL-LOGO.png",
    title: "Say Social",
    tags: ["Bot", "Telegram", "NodeJS", "MongoDB"],
    projectLink: "",
  },
  {
    imgSrc: "/projects/TUNES-LOGO.jpeg",
    title: "Tunes",
    tags: ["Inventory", "Flask", "Python", "MongoDB"],
    projectLink: "",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-two mb-8">My War Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
