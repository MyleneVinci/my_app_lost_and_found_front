import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../UserProvider';

import PersonalData from '../profileComponents/personalData/PersonalData';
import LostItems from '../profileComponents/LostItems';
import FoundItems from '../profileComponents/FoundItems';
import Conversations from '../profileComponents/Conversations';
import DataHandling from '../profileComponents/dataHandling/DataHandling';

import './logProfileCard.css';

const LogProfileCard = () => {
    //bouton deconnexion
    const { setUser} = useUser(true);
    const navigator = useNavigate();
    
    function handleDisconnect(){
        setUser(!useUser)
        alert('Bonne journée et à bientôt')
        navigator('/')
    }
    
    //récupère les users
    const [adUser, setAdUser] = useState([]);
    const { id }= useParams();
  
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/user/${id}`)
            .then((res) => res.data)
            .then((data) => setAdUser(data))
    }, [id])


    let admin = false;
    if (adUser.isAdmin === 1) {
        admin = true;  
    }
    
    return (
        <div className='profile'>
        <div className='profile-disconnect'>
            <button onClick={handleDisconnect}>
                <h4>Deconnexion</h4>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
        <h1>BONJOUR {adUser.username}</h1>
        {!admin && 
            <div className="profile-container">
                <PersonalData />
                <LostItems />
                <FoundItems />
                <Conversations />
            </div> }
        {admin && 
            <div className="profile-container">
                <PersonalData />
                <DataHandling />
            </div> }
        </div>
    );
}

export default LogProfileCard;