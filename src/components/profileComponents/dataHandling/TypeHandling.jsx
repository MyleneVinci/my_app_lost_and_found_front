import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import DataHandlingCard from './DataHandlingCard';

const TypeHandling = () => {


    //gestion des appels a l'api
    const url = `${process.env.REACT_APP_API_URL}/types`


    //affichage des données de la base de données
    const [getType, setGetType] = useState([]);

    useEffect(() => {
      axios
        .get(url)
        .then((res) => setGetType(res.data))
    }, [getType])


    //ajout d'une donnée dans la base de données
    const [postType, setPostType] = useState('');

    const typePost = async (e) => {
        e.preventDefault(); 
        
        if (postType === '' || postType === ' ') {
            alert("Veuillez renseigner le champ requis")
            return
        }

        await axios
            .post(url + `/type`, {
                type: postType,
            })            
            .then((result) => {
                if(result.status === 201) {
                    alert("Vous avez rajouté un type");
                }
            })
            .catch((error) => {
                if(error.response) {
                    alert("les données saisies sont invalides")
                }
            });
            setPostType('')
    }

    // suppression d'une donnée de la base de données
    const [deleteType, setDeleteType] = useState('');
    const typeDelete = (id) => {
        axios
        .delete(url +  `/${id}`)        
        .then((result) => {
            if(result.status === 200) {
                alert("Vous avez supprimé un type");
                setDeleteType('');
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
            <DataHandlingCard
                data='Type'
                getData={getType}
                setGetData={setGetType}
                postData={postType}
                setPostData={setPostType}
                dataPost={typePost}
                deleteData={deleteType}
                setDeleteData={setDeleteType}
                dataDelete={typeDelete}
            />
        </div>
    )
}

export default TypeHandling;