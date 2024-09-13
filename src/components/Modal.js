import React, { useState } from 'react'
import './Modal.css'

import QRCodeModal from './QRCodeModal' // Import the new QR code modal component
import social1 from '../assets/we-chat.png'
import social2 from '../assets/social-2.png'
import social3 from '../assets/linkedin.png'

import qrCodeWeChat from '../assets/qrcode.png'
import qrCodeSocial2 from '../assets/qrcode.png'
import qrCodeLinkedIn from '../assets/qrcode.png'

const Modal = ({ show, onClose }) => {
  const [showQRCodeModal, setShowQRCodeModal] = useState(false)
  const [selectedQR, setSelectedQR] = useState(null)
  const [selectedSocialName, setSelectedSocialName] = useState('')

  const handleIconClick = (socialName, qrCode) => {
    setSelectedQR(qrCode)
    setSelectedSocialName(socialName)
    setShowQRCodeModal(true)
  }

  if (!show) return null

  return (
    <>
      <div className='nav-modal-overlay'>
        <div className='modal'>
          <div className='modal__content'>
            <div className='modal__info'>
              <div>
                <div style={{ marginBottom: '4em' }}>
                  <div className='nav-modal__links'>
                    <ul className='nav-modal__links-list'>
                      <li>
                        <a className='nav-links-text' href='/the-work'>
                          客户案例
                        </a>
                      </li>
                      <li className='nav-links-text'>
                        <a className='nav-links-text' href='/about'>
                          关于我们
                        </a>
                      </li>
                      <li className='nav-links-text'>
                        <a className='nav-links-text' href='/news'>
                          最新动态
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 style={{ fontSize: '0.9vw' }}>社交媒体</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', alignItems: 'center' }}>
                  <div onClick={() => handleIconClick('WeChat', qrCodeWeChat)}>
                    <img className='social-icon' src={social1} alt='WeChat' />
                  </div>
                  <div onClick={() => handleIconClick('Social2', qrCodeSocial2)}>
                    <img className='social-icon' src={social2} alt='Social2' />
                  </div>
                  <div onClick={() => handleIconClick('LinkedIn', qrCodeLinkedIn)}>
                    <img className='social-icon' src={social3} alt='LinkedIn' />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h3>地址</h3>
                <address style={{ fontSize: '0.9vw' }}>
                  上海市黄浦区
                  <br />
                  九江路501号
                  <br />
                  德必外滩WE718室
                </address>
                <br />
                <h3>电话</h3>
                <h3>+86 1888888888</h3>
                <br />
                <br />
                <br />
                <br />
                <button className='modal__contact-button'>联系我们</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the QRCodeModal inside the main modal */}
      <QRCodeModal
        show={showQRCodeModal}
        onClose={() => setShowQRCodeModal(false)}
        qrCode={selectedQR}
        socialName={selectedSocialName}
      />
    </>
  )
}

export default Modal
