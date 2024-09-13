import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ListItem.css'

const ListItem = ({ recognition, project, handleProjectClick }) => {
  const { title, subtitle, videoUrl, imagePreview } = project
  const [isHovered, setIsHovered] = useState(false)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/work/${title}`)
  }

  return !recognition ? (
    <div
      className='list-item'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleProjectClick(project)}
    >
      {isHovered && videoUrl !== 'none' && (
        <div className='video-preview'>
          <video src={videoUrl} autoPlay loop muted />
        </div>
      )}
      {isHovered && imagePreview && (
        <div className='image-preview'>
          <img src={imagePreview} alt='debeers-image' />
        </div>
      )}
      <div className='list-item-text' id='title'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  ) : (
    <div className='list-item' onClick={handleClick}>
      <div className='list-item-text-recognition'>
        <p style={{ fontSize: '18px', wordBreak: 'break-word' }}>{title}</p>
      </div>
    </div>
  )
}

export default ListItem
