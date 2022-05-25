import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const checkNumber = number => {
    if (number === 0) {
      return reviews.length - 1;
    }
    if (number === reviews.length) {
      return 0;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex(checkNumber(index + 1));
  };
  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  };
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">
        suprise me
      </button>
    </article>
  );
};

export default Reviews;
