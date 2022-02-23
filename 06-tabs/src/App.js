import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const resp = await fetch(url);
      const jsonData = await resp.json();
      console.log(jsonData);
      setTabs(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }

  if (isLoading) {
    return (
      <section className="section">
        <div className="title">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }
  const { company, dates, duties, title } = tabs[index];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {tabs.map((item, i) => {
            return (
              <button
                key={i}
                className={i === index ? "job-btn active-btn" : "job-btn"}
                onClick={() => {
                  setIndex(i);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {duties.map((duty, i) => {
            return (
              <div key={i} className="job-desc">
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>

      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
