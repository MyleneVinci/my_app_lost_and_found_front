import React from 'react';
import { FaRegEnvelope, FaRegUser, FaHome, FaRegEdit, FaRegMap, FaInfoCircle } from "react-icons/fa";
import logo from "../../assets/logo.png"

import './navbar.css';

const Navbar = () => {

  return (
    /*navbar version mobile */
    <div className='navbar'>
        <div className='mobile-navbar'>
            <div className='top-navbar'>
                <div className='navbar-logo'>
                    <img classname='logo' src={logo} alt="logo" />
                </div>
                <div className='navbar-menu'>
                    <FaRegEnvelope  />
                    <FaRegUser  />
                </div>
            </div>
            <div className='header'></div>
            <div className='bottom-navbar'>
                <FaHome  />
                <FaRegEdit  />
                <FaRegMap  />
                <FaInfoCircle  />
            </div>
        </div>
        {/* navbar version tablette et bureau  */}
        <div className='desktop-navbar'>
            <div className="unique-navbar">
                <div className='navbar-logo'>
                    <img classname='logo' src={logo} alt="logo" />
                </div>
                <div className='navbar-menu'>
                    <div className="navigation">
                        <FaHome  />
                        <p>Accueil</p>
                    </div>
                    <div className="navigation">
                        <FaRegEdit  />
                        <p>Créer</p>
                    </div>
                    <div className="navigation">
                        <FaRegMap  />
                        <p>Consulter</p>
                    </div>
                    <div className="navigation">
                        <FaRegEnvelope  />
                        <p>Conversations</p>
                    </div>
                    <div className="navigation">
                        <FaRegUser  />
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
