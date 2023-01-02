import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import ProfileCard from './profileCard/ProfileCard';

const Conversations = () => {
    const { id }= useParams();

  //gestion des appels a l'api
    const url = `${process.env.REACT_APP_API_URL}`


  //affichage des données de la base de données
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/user/${id}/ad`)
            .then((res) => res.data)
            .then((data) => setGetData(data));
    }, [getData]
    )

    // suppression d'une donnée de la base de données
    const dataDelete = (id) => {
        axios
            .delete(url +  `/ad/${id}`)        
            .then((result) => {
                if(result.status === 200) {
                    alert("Vous avez supprimé une annonce");
                }
            })
            .catch((error) => {
                if(error.response) {
                alert("Erreur dans la suppression")
                }
            });
    }


return (
    <div>
        <ProfileCard 
        title='Conversations'
        getDataAd= {getData}
        deleteDataAd={dataDelete}
        />
    </div>
)

}

export default Conversations;