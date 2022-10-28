import React from 'react';

import PersonalData from '../../components/profileComponents/personalData/PersonalData';
import LostItems from '../../components/profileComponents/LostItems';
import FoundItems from '../../components/profileComponents/FoundItems';
import Conversations from '../../components/profileComponents/Conversations';


import './profile.css';

const Profile = () => {


  return (
    <div className='profile'>
      <h1>BONJOUR</h1>
    <div className="profile-container">
      <PersonalData />
      <LostItems />  
      <FoundItems />
      <Conversations />    
    </div>
    </div>
  )
}

export default Profile;