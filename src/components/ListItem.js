import React, { useState } from 'react'
import './ListItem.css'

const ListItem = ({
  recognition,
  title,
  subtitle,
  videoUrl,
  imagePreview,
  videoVertical,
  imageUrl,
  projectBackground,
  handleItemClick,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return !recognition ? (
    <div
      className='list-item'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleItemClick({ title, subtitle, videoUrl, videoVertical, imageUrl, projectBackground })}
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
        <p style={{}}>{subtitle}</p>
      </div>
    </div>
  ) : (
    <div className='list-item'>
      <div className='list-item-text-recognition'>
        <p style={{ fontSize: '18px', wordBreak: 'break-word' }}>{title}</p>
      </div>
    </div>
  )
}

export default ListItem
