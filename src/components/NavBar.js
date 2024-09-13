import React, { useState, useEffect } from 'react'
import './NavBar.css'
import Modal from './Modal' // Import the modal component
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Search, Menu, Close } from '@mui/icons-material'

const NavBar = () => {
  const location = useLocation()
  console.log('location', location)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [color, setColor] = useState('white')
  const [english, setEnglish] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false)
    } else {
      setShow(true)
    }
    setLastScrollY(window.scrollY)
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const toggleLanguage = () => {
    setEnglish(!english)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (location.pathname === '/the-work') {
      setColor('black')
    } else {
      setColor('white')
    }
  }, [location])

  return (
    <>
      <nav className={`navbar ${show ? 'navbar--visible' : 'navbar--hidden'}`}>
        <Link to='/'>
          <div onClick={() => setModalVisible(false)} className='navbar__logo'>
            <img src={logo} alt='logo' style={{ filter: color === 'black' && 'brightness(0)', width: '12vh' }} />
          </div>
        </Link>
        <div className='navbar__menu-button'>
          <IconButton>
            <Search style={{ color: color }} />
          </IconButton>
          <div
            onClick={toggleLanguage}
            style={{
              color: color,
              fontSize: '20px',
              paddingBottom: !english ? '2px' : '3px',
              paddingLeft: '5px',
              paddingRight: '5px',
            }}
          >
            {!english ? '中' : 'en'}
          </div>
          <IconButton onClick={toggleModal}>
            {!modalVisible ? <Menu style={{ color: color }} /> : <Close style={{ color: color }} />}
          </IconButton>
        </div>
      </nav>
      <Modal show={modalVisible} onClose={toggleModal} />
    </>
  )
}

export default NavBar
