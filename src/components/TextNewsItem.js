import React, { useState } from 'react';
import './TextNewsItem.css';

const TextNewsItem = ({ title, date, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`text-news-item ${isHovered ? 'hovered' : ''}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      style={{ paddingBottom: '3em' }}
    >
      <h3 style={{ fontWeight: '400' }}>{title}</h3>
      <p className="date">{date}</p>
      <p style={{ fontSize: '1.1rem', fontWeight: '100' }}>{description}</p>
    </div>
  );
};

export default TextNewsItem;
