import React from "react";

function Form({ text, handleSubmit, setText, isError }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        placeholder="#f15027"
        className={isError ? "error" : null}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="btn" type="submit">
        submit
      </button>
    </form>
  );
}
export default Form;
