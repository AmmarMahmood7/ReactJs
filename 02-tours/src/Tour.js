import React, { useEffect, useState } from 'react';

const Tour = ({ id, image, name, info, price, removeTour }) => {

  const [isExpanded, setIsExpanded] = useState(true)

  return <article className='single-tour'>
    <img src={image} alt="{info}" />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{isExpanded ? `${info.substr(0, 200)}...` : info}<button onClick={() => {
        setIsExpanded(!isExpanded)
      }}>{isExpanded ? 'read more' : 'show less'}</button></p>
      <button className='delete-btn' onClick={() => {

        removeTour(id);
      }}>not interested</button>
    </footer>
  </article>;
};

export default Tour;
