import React from "react";
import { FaQuoteRight } from "react-icons/fa";
function Reviews({ reviews, index }) {
  return reviews.map((review, reviewIndex) => {
    const { name, quote, title, image } = review;
    let position = "nextSlide";

    if (reviewIndex === index) {
      position = "activeSlide";
    }
    if (
      reviewIndex === index - 1 ||
      (index === 0 && reviewIndex === reviews.length - 1)
    ) {
      position = "lastSlide";
    }
    return (
      <article className={position}>
        <img src={image} alt={name} className="person-img" />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight />
      </article>
    );
  });
}

export default Reviews;
