import React, { useEffect } from 'react'
import './Footer.css'

import award1 from '../assets/award1.png'
import award2 from '../assets/award2.png'
import award3 from '../assets/award3.png'
import award4 from '../assets/award4.png'
import award5 from '../assets/award4.png'

const awards = [award1, award2, award3, award4, award5]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-awards'>
          {[...awards, ...awards, ...awards, ...awards].map((award, index) => (
            <div className='award-placeholder' key={index}>
              <img src={award} alt={`award${index}`} />
            </div>
          ))}
        </div>
        <div className='footer-branding'>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Authentic</h2>
            <p>AUTHENTIC WORLDWIDE ALL Rights Reserved.</p>
          </div>
          <hr />
          <div className='footer-links'>
            <a href='/privacy'>Privacy Notice</a>
            <div className='footer-social-icons'>
              <span className='social-placeholder'></span>
              <span className='social-placeholder'></span>
              <span className='social-placeholder'></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
