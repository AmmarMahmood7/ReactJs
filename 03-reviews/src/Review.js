import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [count, setCount] = useState(0);

  const { name, job, image, text } = people[count]



  function randomReview() {

    const randomNum = Math.floor(Math.random() * people.length)

    setCount(randomNum)
  }

  const checkNumber = (number) => {

    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'><FaQuoteRight /></span>
    </div>


    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={() => {

        setCount((count) => {
          let newCount = count - 1
          return checkNumber(newCount)
        })
      }}><FaChevronLeft /></button>
      <button className='next-btn' onClick={() => {
        setCount((count) => {
          let newCount = count + 1
          return checkNumber(newCount)
        })
      }}><FaChevronRight /></button>
    </div>
    <button className='random-btn' onClick={() => {
      randomReview()
    }}>surprise me</button>
  </article >;
};

export default Review;
