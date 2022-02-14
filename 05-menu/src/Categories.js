import React from 'react';

const Categories = ({ filterItems, category }) => {
  return <button className='filter-btn' onClick={() => {
    filterItems(category)
  }}>{category}</button>;
};

export default Categories;
