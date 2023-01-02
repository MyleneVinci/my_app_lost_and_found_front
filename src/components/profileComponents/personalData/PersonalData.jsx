import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { FaChevronDown, FaChevronUp  } from "react-icons/fa";


import './personalData.css';

const PersonalData = () => {

    //gestion des menus déroulants
    const [isTitleReduce, setIsTitleReduce] = useState(false);
    const [isPseudoReduce, setIsPseudoReduce] = useState(false);
    const [isEmailReduce, setIsEmailReduce] = useState(false);
    const [isPasswordReduce, setIsPasswordReduce] = useState(false);

    const handleTitleReduce = () => {
    setIsTitleReduce(!isTitleReduce);
    }

    const handlePseudoReduce = () => {
    setIsPseudoReduce(!isPseudoReduce);
    }

    const handleEmailReduce = () => {
    setIsEmailReduce(!isEmailReduce);
    }

    const handlePasswordReduce = () => {
    setIsPasswordReduce(!isPasswordReduce);
    }

        //gestion des appels a l'api
        const url = `${process.env.REACT_APP_API_URL}`


        //affichage des données de la base de données
        const { id }= useParams();
        const [getDataUser, setGetDataUser] = useState([]);
    
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_API_URL}/user/${id}`)
                .then((res) => res.data)
                .then((data) => setGetDataUser(data))
        }, [id])
        


return (
    <div className='profile-block'>
        <div className="profile-block-title">
            <h2>Informations personnelles</h2>
            <span onClick={handleTitleReduce}>{isTitleReduce ? <FaChevronUp/> : <FaChevronDown/>}</span>
        </div>
    {/* Affichage conditionnel des informations personnelles */}
        {isTitleReduce ?          
            <div className="profile-block-content-container">
                {/* bloc infos pseudo */ }
                <div className="profile-block-content">
                    <div className="profile-block-content-pseudo-title">
                        <label>Pseudo : {getDataUser.username}</label>
                        <span onClick={handlePseudoReduce}>Changer</span>
                    </div>
                {/* Affichage conditionnel du changement de pseudo */}
                    {isPseudoReduce ?
                        <div className="profile-block-content-pseudo-content">
                            <input type="text" placeholder='Nouveau pseudo'/>
                            <button>OK</button>
                        </div> : null
                    }
                </div>
                {/* bloc infos email */}
                <div className="profile-block-content">
                    <div className="profile-block-content-email-title">
                        <label>Email : {getDataUser.email}</label>
                        <span onClick={handleEmailReduce}>Changer</span>
                    </div>
                {/* Affichage conditionnel du changement d'email' */}
                    {isEmailReduce ?
                        <div className="profile-block-content-email-content">              
                            <input type="text" placeholder='Ancien email'/>
                            <div className='email-input'>
                                <input type="text" placeholder='Nouvel email'/>
                                <button>OK</button>
                            </div> 
                        </div> : null
                    }
                </div>
                {/* bloc infos mot de passe */}
                <div className="profile-block-content">
                    <div className="profile-block-content-password-title">
                        <label>Mot de passe</label>
                        <span onClick={handlePasswordReduce}>Changer</span>
                    </div>
                {/* Affichage conditionnel du changement de mot de passe */}
                    {isPasswordReduce ?
                        <div className="profile-block-content-password-content">
                            <input type="password" placeholder='Ancien mot de passe'/>
                            <div className='password-input'>
                                <input type="password" placeholder='Nouveau mot de passe'/>
                                <button>OK</button>
                            </div>
                        </div> : null
                    }
                </div>
            </div> : null 
        }
    </div>
)
}

export default PersonalData;