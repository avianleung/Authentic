import React, { useState } from 'react';
import './ProjectModal.css';

const Modal = ({ project, onClose }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleOverlayClick = (e) => {
    // Close modal if the click is outside the modal content
    if (e.target.className === 'project-modal-overlay') {
      onClose();
    }
  };

  const handleVideoClick = (e) => {
    if (isPlaying) {
      e.target.pause();
      setIsPlaying(false);
    } else {
      e.target.play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal-container">
      <div className="modal-content">
        {showDetails ? (
          <div className="project-details">
            <img className="project-details-image" src={project.imageUrl} alt="project-image" />
            <div className="project-details-content">
              <h2 className="project-details-title">{project.title}</h2>
              <h2 className="project-details-section-title">Background & Objective</h2>
              <div className='background-section'>
                {project.projectBackground && project.projectBackground.map((section, index) => (
                  <div key={index}>
                    <h3 className='background-section-header'>{section.header}</h3>
                    <p className='background-section-content'>{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="video-container">
            <video onClick={e => handleVideoClick(e)}>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
        <button className="toggle-button" onClick={toggleDetails}>
          {showDetails ? 'Play Video' : 'See Project Details'}
        </button>
      </div>
    </div>
  );
};

export default Modal;
