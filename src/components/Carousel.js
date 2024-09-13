import React, { useEffect } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {
  useEffect(() => {
    // Cloning the logos-slide to create the infinite loop effect
    const slide = document.querySelector('.carousel-slide')
    const copy = slide.cloneNode(true)
    document.querySelector('.carousel-container').appendChild(copy)
  }, [])

  return (
    <div className='carousel-container'>
      <div className='carousel-slide'>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`award-${index}`} className='carousel-image' />
        ))}
      </div>
    </div>
  )
}

export default Carousel
