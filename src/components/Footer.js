import React, { useState, useEffect } from 'react'
import './Footer.css'

import QRCodeModal from './QRCodeModal'
import social1 from '../assets/we-chat.png'
import social2 from '../assets/social-2.png'
import social3 from '../assets/linkedin.png'

import qrCodeWeChat from '../assets/qrcode.png'
import qrCodeSocial2 from '../assets/qrcode.png'
import qrCodeLinkedIn from '../assets/qrcode.png'

import award1 from '../assets/award1.png'
import award2 from '../assets/award2.png'
import award3 from '../assets/award3.png'
import award4 from '../assets/award4.png'
import award5 from '../assets/award5.png'

const awards = [
  { image: award1, award: 'Best CRM/SCRM', awardType: 'Management Award' },
  { image: award2, award: 'Best Social And Culture', awardType: 'Marketing Award' },
  { image: award3, award: 'Best Creative', awardType: 'Agency Award' },
  { image: award4, award: 'Most Innovative Digital', awardType: 'Marketing Award' },
  { image: award5, award: 'Best Scene', awardType: 'Marketing Award' },
]

const Footer = () => {
  const [showQRCodeModal, setShowQRCodeModal] = useState(false)
  const [selectedQR, setSelectedQR] = useState(null)
  const [selectedSocialName, setSelectedSocialName] = useState('')

  const handleIconClick = (socialName, qrCode) => {
    setSelectedQR(qrCode)
    setSelectedSocialName(socialName)
    setShowQRCodeModal(true)
  }
  return (
    <>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-awards'>
            {[...awards, ...awards, ...awards, ...awards].map((award, index) => (
              <div className='award-placeholder' key={index}>
                <img src={award.image} alt={`award${index}`} />
                <div style={{ fontSize: '0.5em', paddingTop: '3vh' }}>{award.award}</div>
                <div style={{ fontSize: '0.5em', paddingTop: '0.5vh' }}>{award.awardType}</div>
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
                <div onClick={() => handleIconClick('WeChat', qrCodeWeChat)}>
                  <img className='social-icon' src={social1} alt='WeChat' />
                </div>
                <div
                  onClick={() => handleIconClick('Social2', qrCodeSocial2)}
                  style={{ marginBottom: '0.9vh', marginRight: '0.5vw' }}
                >
                  <img className='social-icon' src={social2} alt='Social2' />
                </div>
                <div onClick={() => handleIconClick('LinkedIn', qrCodeLinkedIn)}>
                  <img className='social-icon' src={social3} alt='LinkedIn' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <QRCodeModal show={showQRCodeModal} onClose={() => setShowQRCodeModal(false)} qrCode={selectedQR} />
    </>
  )
}

export default Footer
