import React from 'react'

import AboutSection from '../components/AboutSection'
import WorkList from '../components/WorkList'

import ourWorks from '../assets/our-works.png'

const TheWork = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <div className='container' style={{ marginBottom: '8em' }}>
        <WorkList />
      </div>
    </div>
  )
}

export default TheWork
