import React from "react";

// ICONS
import { FaStar } from "react-icons/fa";

// STARS
const ratings = new Array(5);
ratings.fill({
  icon: true,
});

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex mb-3 gap-1 text-yellow-400">
        {ratings.map(({ icon }, key) => (
          <span key={key} className="">
            {icon ? <FaStar /> : undefined}
          </span>
        ))}
      </div>
      <div className="text-zinc-400 mb-5 text-sm">{content}</div>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="rounded-lg w-11">
          <img 
            src={imgSrc} 
            alt={name} 
            width={10}
            height={10}
            loading="lazy"
            className="image-cover" 
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider"> {company} </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
