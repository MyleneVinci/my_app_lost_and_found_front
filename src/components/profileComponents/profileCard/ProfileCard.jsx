import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";

import './profileCard.css';


const ProfileCard = ({title, getDataAd}) => {

    //gestion menu déroulant
    const [isTitleReduce, setIsTitleReduce] = useState(false);

    const handleTitleReduce = () => {
        setIsTitleReduce(!isTitleReduce);
    }

    //format de la date
    const newFormatDate = (date) => {
        return date.substring(0, 10).split("-").reverse().join("-");  
    }
  
    
    return (
        <div className='profile-block'>
            <div className="profile-block-title">
                <h2>{title}</h2>
                <span onClick={handleTitleReduce}>{isTitleReduce ? <FaChevronUp/> : <FaChevronDown/>}</span>
            </div>
            { isTitleReduce ? 
                <div className="data-card-content-list">
                {
                    getDataAd &&
                    getDataAd.map((ad, index) => (
                        <div className='list-ad' key={index}>
                            <ul>
                                <li>Numéro de l'annonce{index+1}</li>
                                <li>Date de publication : {newFormatDate(ad.date)}</li>
                                <li>Type d'objet : {ad.type}</li>
                            </ul>
                        </div>
                    ))
                }
            </div> : null }
    </div>
    )
}

export default ProfileCard;