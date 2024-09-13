import React from 'react'
import './Home.css'

import AboutSection from '../components/AboutSection'
import ProjectList from '../components/ProjectList'
import Footer from '../components/Footer'

import brands from '../assets/brands-2.png'
import home from '../assets/home.mp4'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <section className='section one'>
          <video autoPlay muted loop id='myVideo' src={home} />
        </section>
        <section className='section two'>
          <div className='container' style={{ overflowY: 'auto' }}>
            <AboutSection />
          </div>
        </section>
        <section className='section three'>
          <div style={{ width: '90vw' }}>
            <img src={brands} alt='brands' style={{ width: '100%' }} />
          </div>
        </section>
        <section className='section four'>
          <ProjectList />
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default Home
