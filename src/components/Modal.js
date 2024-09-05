import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="nav-modal-overlay">
      <div className="modal">
        <div className="modal__content">
          <div className="modal__info">
            <div>
                <div style={{marginBottom: '4em' }}>
                  <div className="nav-modal__links">
                    <ul className='nav-modal__links-list'>
                      <li><a href="/the-work">THE WORK</a></li>
                      <li><a href="/about">ABOUT</a></li>
                      <li><a href="/news">NEWS</a></li>
                    </ul>
                  </div>
                </div>
                <h3>Social</h3>
                <ul>
                <li>Instagram</li>
                <br />
                <li>LinkedIn</li>
                <br />
                <li>Facebook</li>
                </ul>
                <h3>Address</h3>
                <address>
                1285 Avenue of the Americas<br />
                New York, NY 10019 USA<br />
                Tel: +1 (212) 459 5000
                </address>
                <button className="modal__contact-button">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
