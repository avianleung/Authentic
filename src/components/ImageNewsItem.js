import React, { useState } from 'react';
import './ImageNewsItem.css';

const ImageNewsItem = ({ imageSrc, title, date, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`image-news-item ${isHovered ? 'hovered' : ''}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={title} />
      <div className="drawer">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageNewsItem;
