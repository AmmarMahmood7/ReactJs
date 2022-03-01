import React, { useState, useEffect } from "react";
import data from "./data";
import Reviews from "./Reviews";
import Button from "./Button";

function App() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > reviews.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = reviews.length - 1
      }
      return index
    })
  }

  // useEffect(() => {
  //   const lastIndex = reviews.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, reviews])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > reviews.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        <Reviews reviews={reviews} index={index} />
        <Button class="prev" func={prevSlide} />
        <Button class="next" func={nextSlide} />
      </div>
    </section>
  );
}

export default App;
