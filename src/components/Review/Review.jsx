import React from "react";

// COMPONENTS
import ReviewCard from "./ReviewCard";

// REVIEW ITEMS
const reviews = [
  {
    content:
      "Exceptional web developer! Delivered a seamless, responsive site with clean code and great UX.",
    name: "sophia Ramirex",
    imgSrc: "",
    company: "PizelForce",
  },
];

const Review = ({ content, imgSrc, name, company }) => {
  return (
    <section id="review" className="section">
      <div className="container">
        <h2 className="headline-two"> What my customers say </h2>
        <div className="">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
