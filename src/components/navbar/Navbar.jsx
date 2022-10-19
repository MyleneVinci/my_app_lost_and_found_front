import React from 'react';
import { FaRegEnvelope, FaRegUser, FaSignInAlt, FaSignOutAlt, FaHome, FaRegEdit, FaRegFileAlt, FaRegMap, FaInfoCircle } from "react-icons/fa";
import logo from "../../assets/logo.png"

import './navbar.css';

const Navbar = () => {
  let iconStyle = { fontSize: "28px", color: '#F7F2D4' };

  return (
    <div className='navbar'>
        <div className='mobile-navbar'>
            <div className='top-navbar'>
                <div className='navbar-logo'>
                    <img classname='logo' src={logo} alt="logo" />
                </div>
                <div className='navbar-menu'>
                    <FaRegEnvelope style={iconStyle} />
                    <FaRegUser style={iconStyle} />
                </div>
            </div>
            <div className='header'></div>
            <div className='bottom-navbar'>
                <FaHome style={iconStyle} />
                <FaRegEdit style={iconStyle} />
                <FaRegMap style={iconStyle} />
                <FaInfoCircle style={iconStyle} />
            </div>
        </div>
        <div className='desktop-navbar'>
            <div className="unique-navbar">
                <div className='navbar-logo'>
                    <img classname='logo' src={logo} alt="logo" />
                </div>
                <div className='navbar-menu'>
                    <div className="navigation">
                        <FaHome style={iconStyle} />
                        <p>Accueil</p>
                    </div>
                    <div className="navigation">
                        <FaRegEdit style={iconStyle} />
                        <p>Créer</p>
                    </div>
                    <div className="navigation">
                        <FaRegMap style={iconStyle} />
                        <p>Consulter</p>
                    </div>
                    <div className="navigation">
                        <FaRegEnvelope style={iconStyle} />
                        <p>Conversations</p>
                    </div>
                    <div className="navigation">
                        <FaRegUser style={iconStyle} />
                        <p>Profil</p>
                    </div>
                </div> 

            </div>
            <div className='header'></div>
        </div>
    </div>
    )
}

export default Navbar;
