import React from "react";

// ABOUT DETAILS
const aboutItems = [
  {
    label: "PROJECTS DONE",
    number: 14,
  },
  {
    label: "YEARS OF EXPERIENCE",
    number: 5,
  },
  {
    label: "TECHNOLOGIES MASTERED",
    number: 9,
  },
  {
    label: "CODE COMMITS",
    number: 79,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 revealup">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl w-full text-justify">
            Welcome! I&apos;m Suvajit, a professional full stack developer with
            a knack for crafting visually stunning and highly functional
            websites. Combining creativity and technical expertise, I transform
            your vision into a digital masterpiece that excels in both
            appearance and performance.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-green-500 font-semibold md:text-3xl">
                    {" " + "+"}
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/avatar/LOGO.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
