import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function Button(props) {
  return (
    <button className={props.class} onClick={props.func}>
      {props.class === "prev" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}
export default Button;
