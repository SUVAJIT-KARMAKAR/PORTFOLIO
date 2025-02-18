import React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import ReviewCard from "./ReviewCard";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// GSAP PLUGIN REGISTRATION
gsap.registerPlugin(useGSAP, ScrollTrigger);

// REVIEW ITEMS
const reviews = [
  {
    content:
      "Exceptional developer, great at work, down to earth and very humble",
    name: "subham gorai",
    imgSrc: "/testimonials/testimonial_male.png",
    company: "NIT Silchar",
  },
  {
    content: "Great developer, totally satisfied with the engineering skills",
    name: "anirudda chowdhury",
    imgSrc: "/testimonials/testimonial_male.png",
    company: "MIT",
  },
  {
    content: "Great at the work, on time delivery with great quality",
    name: "hemangshu dey",
    imgSrc: "/testimonials/testimonial_male.png",
    company: "codewalnut",
  },
  {
    content: "Totally worth choosing this guy",
    name: "chandrima karmakar",
    imgSrc: "/testimonials/testimonial_female.png",
    company: "dav",
  },
  {
    content: "Quality is great, totally cooperative, great with dealines",
    name: "soumik hembram",
    imgSrc: "/testimonials/testimonial_male.png",
    company: "linkedin",
  },
];

const Review = ({ content, imgSrc, name, company }) => {
  // GSAP
  useGSAP(() => {
    gsap.to(".scrubslide", {
      scrollTrigger: {
        trigger: ".scrubslide",
        scrub: true,
        start: "-200% 80%",
        end: "400% 80%",
      },
      x: "-1000",
    });
  });

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-two mb-8 revealup"> What my customers say </h2>
        <div className="scrubslide flex items-stretch gap-3 w-fit">
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
