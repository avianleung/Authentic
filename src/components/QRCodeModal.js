import React from 'react'
import './QRCodeModal.css'

const QRCodeModal = ({ show, onClose, qrCode, socialName }) => {
  if (!show) return null

  return (
    <div className='qr-code-modal-overlay' onClick={onClose}>
      <div className='qr-code-modal' onClick={(e) => e.stopPropagation()}>
        <h3>{socialName} QR Code</h3>
        <div>
          <img src={qrCode} alt={`${socialName} QR Code`} style={{ width: '200px', height: '200px' }} />
        </div>
      </div>
    </div>
  )
}

export default QRCodeModal
