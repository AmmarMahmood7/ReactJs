import React, { useState, useEffect } from "react";
import rgbToHex from "../utils";

const SingleColor = ({ rgb, weight, index, hex, color }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");

  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  //using a function from stackoverflow
  //const hexColor = rgbToHex(...rgb);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>

      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
