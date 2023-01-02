import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaMinusCircle  } from "react-icons/fa";

import './profileCard.css';


const ProfileCard = ({title, getDataAd, deleteDataAd, loading}) => {
  

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
                    {getDataAd.length !== 0 ? 
                        <div>
                            {getDataAd &&
                            getDataAd.map((ad) => (
                                <div className='list-ad' key={ad.id}>
                                    <ul>
                                        <li>Numéro de l'annonce : {ad.id}</li>
                                        <li>Date de publication : {newFormatDate(ad.date)}</li>
                                        <li>Type d'objet : {ad.type}</li>
                                    </ul>
                                    <span><FaMinusCircle onClick={() => deleteDataAd(ad.id)} /></span>
                                </div>
                            ))
                            }
                        </div> : 
                        <p>pas d'informations pour le moment</p>}
                </div> : null }
        </div>
    )
}

export default ProfileCard;