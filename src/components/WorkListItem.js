import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItem.css';

const ListItem = ({ recognition, project, handleProjectClick }) => {
  console.log("project2", project);
  const { title, subtitle, videoUrl } = project;
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/work/${title}`);
  };

  return !recognition ? (
    <div 
      className="list-item" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleProjectClick(project)}
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
      onClick={handleClick} 
    >
      <div className="list-item-text-recognition">
        <p style={{ fontSize: '18px', wordBreak: 'break-word' }}>{title}</p>
      </div>
    </div>
  )
};

export default ListItem;
