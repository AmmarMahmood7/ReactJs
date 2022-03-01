import React, { useState } from "react";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  function handleClick() {
    let amount = parseInt(value);
    if (value <= 0) {
      amount = 1;
    }
    if (value > 8) {
      amount = 8;
    }
    setParagraphs(data.slice(0, amount));
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form
        onSubmit={(e) => {
          handleClick();
          e.preventDefault();
        }}
        className="lorem-form"
      >
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          onChange={(e) => setValue(e.target.value)}
          name="amount"
          id="amount"
          value={value}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
