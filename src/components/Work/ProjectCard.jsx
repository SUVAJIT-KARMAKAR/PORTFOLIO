import React from "react";
import PropTypes from "prop-types";

// ICONS
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="image-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="image-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-one mb-3"> {title} </h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-[12px] text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-green-500 text-zinc-950 shrink-0 cursor-pointer hover:bg-green-300 transition-colors">
          <span className="" aria-hidden="true">
            <ExternalLink size={20} />
          </span>
        </div>
      </div>
      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
};

// PROJECT CARD PROP TYPES
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
