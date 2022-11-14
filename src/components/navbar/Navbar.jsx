import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../UserProvider';

import { FaRegEnvelope, FaRegUser, FaHome, FaRegEdit, FaRegMap, FaInfoCircle } from "react-icons/fa";
import logo from "../../assets/logo.png"

import './navbar.css';

const Navbar = () => {
    const { user } = useUser();

    return (
        /*navbar version mobile */
        <div className='navbar'>
            <div className="nav-one">
            {!user &&
                <div className='mobile-navbar'>
                    <div className='top-navbar'>
                        {/* logo menu accueil */}
                        <NavLink to='/' className='navbar-logo'>
                            <img className='logo' src={logo} alt="logo" />
                        </NavLink >
                        {/* logo menu haut */}
                        <div className='navbar-menu'>
                            <NavLink to='/conversations' className={( navData ) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegEnvelope  /></NavLink>
                            <NavLink to='/enregistrement' className={( navData ) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegUser  /></NavLink>
                        </div>
                    </div>
                    <div className='header'></div>
                    {/* logo menu bas */}
                    <div className='bottom-navbar'>
                        <NavLink to='/' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaHome  /></NavLink>
                        <NavLink to='/declaration' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegEdit  /></NavLink>
                        <NavLink to='/carte' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegMap  /></NavLink>
                        <NavLink to='/informations' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaInfoCircle  /></NavLink>
                    </div>
                </div>
            }
                {/* navbar version tablette et bureau  */}
            {!user &&
                <div className='desktop-navbar'>
                    <div className="unique-navbar">
                        <NavLink to='/' className='navbar-logo'>
                            <img className='logo' src={logo} alt="logo" />
                        </NavLink>
                        <div className='navbar-menu'>
                            <NavLink to='/' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaHome  />
                                <p>Accueil</p>
                            </NavLink>
                            <NavLink to='/declaration' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegEdit  />
                                <p>Déclarer</p>
                            </NavLink>
                            <NavLink to='/carte' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegMap  />
                                <p>Carte</p>
                            </NavLink>
                            <NavLink to='/conversations' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegEnvelope  />
                                <p>Conversations</p>
                            </NavLink>
                            <NavLink to='/enregistrement' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegUser  />
                                <p>Profil</p>
                            </NavLink>
                        </div> 
                    </div>
                    <div className='header'></div>
                </div>
            }
            </div>
            <div className="nav-two">
            {user &&
                <div className='mobile-navbar'>
                    <div className='top-navbar'>
                        {/* logo menu accueil */}
                        <NavLink to='/' className='navbar-logo'>
                            <img className='logo' src={logo} alt="logo" />
                        </NavLink >
                        {/* logo menu haut */}
                        <div className='navbar-menu'>
                            <NavLink to='/conversations' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegEnvelope  /></NavLink>
                            <NavLink to={`/profil/${user.id}`} className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegUser  /></NavLink>
                        </div>
                    </div>
                    <div className='header'></div>
                    {/* logo menu bas */}
                    <div className='bottom-navbar'>
                        <NavLink to='/' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaHome  /></NavLink>
                        <NavLink to='/declaration' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegEdit  /></NavLink>
                        <NavLink to='/carte' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaRegMap  /></NavLink>
                        <NavLink to='/informations' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }><FaInfoCircle  /></NavLink>
                    </div>
                </div>
            }
                {/* navbar version tablette et bureau  */}
            {user &&
                <div className='desktop-navbar'>
                    <div className="unique-navbar">
                        <NavLink to='/' className='navbar-logo'>
                            <img className='logo' src={logo} alt="logo" />
                        </NavLink>
                        <div className='navbar-menu'>
                            <NavLink to='/' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaHome  />
                                <p>Accueil</p>
                            </NavLink>
                            <NavLink to='/declaration' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegEdit  />
                                <p>Déclarer</p>
                            </NavLink>
                            <NavLink to='/carte' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegMap  />
                                <p>Carte</p>
                            </NavLink>
                            <NavLink to='/conversations' className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegEnvelope  />
                                <p>Conversations</p>
                            </NavLink>
                            <NavLink to={`/profil/${user.id}`} className={(navData) => 
                            navData.isActive ? "selected" : "navigation-link"
                            }>
                                <FaRegUser  />
                                <p>Profil</p>
                            </NavLink>
                        </div> 
                    </div>
                    <div className='header'></div>
                </div>
            }
            </div>
        </div>
        )
}

export default Navbar;
