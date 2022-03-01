import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Form from "./Form";
import Values from "values.js";

function App() {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const [colors, setColors] = useState(new Values("#f15027").all(10));

  function handleSubmit() {
    try {
      let colorValues = new Values(text).all(10);
      console.log(colorValues);
      setColors(colorValues);
      setIsError(false);
      setText("");
    } catch (error) {
      console.log(error);
      setIsError(true);
      setText("");
    }
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <Form handleSubmit={handleSubmit} setText={setText} isError={isError} />
      </section>
      <section className="colors">
        {colors.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
