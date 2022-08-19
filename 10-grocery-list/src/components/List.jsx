import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ id, title, deleteList, editItem }) => {
  return (
    <article className="grocery-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button
          className="edit-btn"
          onClick={() => {
            editItem(id);
          }}
        >
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => deleteList(id)}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
