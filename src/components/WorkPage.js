import React from 'react'
import './WorkPage.css'

const WorkPage = ({ project, handleBackClick }) => {
  console.log('project', project)
  const { title, background, insight, videoUrl } = project

  return (
    <div className='work-page-container'>
      <div className='work-page-content'>
        <button className='back-button' onClick={handleBackClick}>
          &lt; Back
        </button>
        <div className='work-page-header'>
          <span>{title}</span>
        </div>
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
      </div>
      <div className='work-page-video-container'>
        <div className='work-page-video'>
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
