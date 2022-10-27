import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";

import './profileCard.css';


const ProfileCard = ({title}) => {

    const [isTitleReduce, setIsTitleReduce] = useState(false);

    const handleTitleReduce = () => {
        setIsTitleReduce(!isTitleReduce);
        }
    
    return (
        <div className='profile-block'>
            <div className="profile-block-title">
                <h2>{title}</h2>
                <span onClick={handleTitleReduce}>{isTitleReduce ? <FaChevronUp/> : <FaChevronDown/>}</span>
            </div>
            { isTitleReduce ? <p>pas d'informations pour le moment</p> : null }       
        </div>
    )
}

export default ProfileCard;