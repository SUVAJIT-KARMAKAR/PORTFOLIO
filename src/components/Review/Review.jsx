import React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import ReviewCard from "./ReviewCard";

// REVIEW ITEMS
const reviews = [
  {
    content:
      "Exceptional developer, great at work, down to earth and very humble",
    name: "subham gorai",
    imgSrc: "/testimonials/testimonial_male.png",
    company: "NIT Silchar",
  },
];

const Review = ({ content, imgSrc, name, company }) => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-two mb-8"> What my customers say </h2>
        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// REVIEW PROP TYPES
ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default Review;
