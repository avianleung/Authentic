import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Modal from './Modal'; // Import the modal component
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, Menu, Close } from '@mui/icons-material'

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar ${show ? 'navbar--visible' : 'navbar--hidden'}`}>
        <Link to="/">
            <div onClick={() => setModalVisible(false)} className="navbar__logo"><img src={logo} alt="logo" /></div>
        </Link>
        <div className="navbar__menu-button">
          <IconButton>
            <Search style={{ color: 'white' }} />
          </IconButton>
          <IconButton onClick={toggleModal}>
            {!modalVisible ? <Menu style={{ color: 'white' }} /> : <Close style={{ color: 'white' }} />}
          </IconButton>
        </div>
      </nav>
      <Modal show={modalVisible} onClose={toggleModal} />
    </>
  );
};

export default NavBar;
