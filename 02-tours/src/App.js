import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, SetIsLoading] = useState(true);
  const [data, setData] = useState([]);


  function removeTour(id) {

    const newTours = data.filter((tour) => tour.id !== id)
    setData(newTours)
  }
  function getTours() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        SetIsLoading(false);
        const jsonObj = JSON.parse(xhttp.responseText);
        setData(jsonObj);
      } else if (xhttp.status === 400) {
        alert("Some Error");
      } else {
        alert("some other error");
      }
    };
    xhttp.send();
  }
  useEffect(() => {
    getTours();
  }, []);


  if (isLoading) {
    return <Loading />
  }
  if (data.length === 0) {

    return <main><div className='title'>
      <h2>
        No tours Left</h2>
      <button className='btn' onClick={() => {

        getTours()

      }}>Refresh</button></div></main>
  }
  else {
    return <main>
      <Tours tours={data} removeTour={removeTour} />
    </main>
  }
}

export default App;
