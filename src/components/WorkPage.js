import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import './WorkPage.css'

const WorkPage = ({ project, handleBackClick }) => {
  const { title, logo, background, insight, videoUrl, carousel, carousel2, carousel3 } = project

  // State to manage flex direction
  const [isColumn, setIsColumn] = useState(true)

  // Refs for the container and child elements
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const contentRef = useRef(null) // New ref for content
  const videoContainerRef = useRef(null) // New ref for video container

  // State to store window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate to column layout
            setIsColumn(true)
          } else {
            // Animate to row layout
            setIsColumn(false)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const width = windowSize.width
    const height = windowSize.height

    // GSAP animation to simulate flex-direction transition
    if (isColumn) {
      // Animating the work-page-content and video container
      gsap.to([contentRef.current, videoContainerRef.current], {
        duration: 0.6,
        stagger: 0.1,
        y: (i) => i * (height * 0.1), // Responsive vertical movement
        x: (i) => i * -(width * 0.47), // Responsive horizontal movement
        opacity: 1, // Full opacity
      })
    } else {
      gsap.to([contentRef.current, videoContainerRef.current], {
        duration: 0.6,
        stagger: 0.1,
        y: 0, // Ensure vertical alignment stays consistent
        x: (i) => i * (width * 0.01), // Responsive horizontal movement
        opacity: 1, // Slight fade effect
      })
    }
  }, [isColumn, windowSize])

  return (
    <div className='work-page-container' ref={containerRef}>
      <div className='work-page-content' ref={contentRef}>
        <button className='back-button' onClick={handleBackClick} ref={triggerRef}>
          &lt; Back
        </button>
        <div className='work-page-header'>
          {/* <span>{title}</span> */}
          <img src={logo} alt='logo' />
        </div>
        {!isColumn && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5 }}
          >
            <div className='work-page-text'>
              <div className='work-section'>
                <h2 className='work-details-section-title'>Background & Objective</h2>
                <div className='work-section-text-container'>
                  {background &&
                    background.map((section, index) => (
                      <div key={index} className='work-section-details'>
                        {section.header && <h3 className='work-section-subheader'>{section.header}</h3>}
                        {section.content && <p className='work-section-content'>{section.content}</p>}
                      </div>
                    ))}
                </div>
              </div>
              <div className='work-section'>
                <h2 className='work-details-section-title'>Insight & Strategy</h2>
                <div className='work-section-text-container'>
                  {insight &&
                    insight.map((section, index) => (
                      <div key={index} className='work-section-details'>
                        {section.header && <h3 className='work-section-subheader'>{section.header}</h3>}
                        {section.content && <p className='work-section-content'>{section.content}</p>}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: '12vh' }}>
              {carousel && carousel.length > 0 && (
                <div className='carousel-container'>
                  <div className='carousel-track'>
                    {[...carousel, ...carousel, ...carousel, ...carousel].map((media, index) => (
                      <div key={index} className='carousel-item'>
                        {media.type === 'video' ? (
                          <video controls>
                            <source src={media.mediaUrl} type='video/mp4' />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img src={media.mediaUrl} alt={`carousel-media-${index}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {carousel2 && carousel2.length > 0 && (
                <div className='carousel-container'>
                  <div className='carousel-track'>
                    {[...carousel2, ...carousel2, ...carousel2, ...carousel2].map((media, index) => (
                      <div key={index} className='carousel-item'>
                        {media.type === 'video' ? (
                          <video controls>
                            <source src={media.mediaUrl} type='video/mp4' />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img src={media.mediaUrl} alt={`carousel-media-${index}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {carousel3 && carousel3.length > 0 && (
                <div className='carousel-container'>
                  <div className='carousel-track'>
                    {[...carousel3, ...carousel3, ...carousel3, ...carousel3].map((media, index) => (
                      <div key={index} className='carousel-item'>
                        {media.type === 'video' ? (
                          <video controls>
                            <source src={media.mediaUrl} type='video/mp4' />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img src={media.mediaUrl} alt={`carousel-media-${index}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
      <div className='work-page-video-container' ref={videoContainerRef}>
        {' '}
        {/* Added ref */}
        <div className='work-page-video' style={isColumn ? { width: '90vw' } : { width: '40vw' }}>
          <video controls>
            <source src={videoUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default WorkPage
