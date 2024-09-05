import React, { useState } from 'react';
import './ListItem.css';

const ListItem = ({ recognition, title, subtitle, videoUrl, imageUrl, projectBackground, handleItemClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return !recognition ? (
    <div 
      className="list-item" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleItemClick({ title, subtitle, videoUrl, imageUrl, projectBackground })}
    >
      {isHovered && (
        <div className="video-preview">
          <video src={videoUrl} autoPlay loop muted />
        </div>
      )}
      <div className="list-item-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  ) : (
    <div 
      className="list-item" 
    >
      <div className="list-item-text-recognition">
        <p style={{ fontSize: '18px', wordBreak: 'break-word' }}>{title}</p>
      </div>
    </div>
  )
};

export default ListItem;
