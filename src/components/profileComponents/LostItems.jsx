import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';


import ProfileCard from './profileCard/ProfileCard';

const LostItems = () => {

  //gestion des appels a l'api
  const url = `${process.env.REACT_APP_API_URL}`


  //affichage des données de la base de données
  const { id }= useParams();
  const [getData, setGetData] = useState([]);

  useEffect(() => {
      axios
          .get(`${process.env.REACT_APP_API_URL}/user/ad/${id}`)
          .then((res) => res.data)
          .then((data) => setGetData(data))
  }, [id])
  
  return (
    <div>
        <ProfileCard 
          title='Mes objets perdus'
          getDataAd= {getData}
        />
    </div>
  )
}

export default LostItems;