import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import DataHandlingCard from './DataHandlingCard';

const DetailHandling = () => {


    //gestion des appels a l'api
    const url = `${process.env.REACT_APP_API_URL}/details`


    //affichage des données de la base de données
    const [getDetail, setGetDetail] = useState([]);

    useEffect(() => {
      axios
        .get(url)
        .then((res) => setGetDetail(res.data))
    }, [getDetail])


    //ajout d'une donnée dans la base de données
    const [postDetail, setPostDetail] = useState('');

    const detailPost = async (e) => {
        e.preventDefault(); 
        
        if (postDetail === '' || postDetail === ' ') {
            alert("Veuillez renseigner le champ requis")
            return
        }

        await axios
            .post(url + `/detail`, {
                detail: postDetail,
            })            
            .then((result) => {
                if(result.status === 201) {
                    alert("Vous avez rajouté un détail");
                    setPostDetail('');
                }
            })
            .catch((error) => {
                if(error.response) {
                    alert("les données saisies sont invalides")
                }
            });
    }

    // suppression d'une donnée de la base de données
    const [deleteDetail, setDeleteDetail] = useState('');
    const detailDelete = (id) => {
        axios
        .delete(url +  `/${id}`)        
        .then((result) => {
            if(result.status === 200) {
                alert("Vous avez supprimé un détail");
                setDeleteDetail('');
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
                data='Détail'
                getData={getDetail}
                setGetData={setGetDetail}
                postData={postDetail}
                setPostData={setPostDetail}
                dataPost={detailPost}
                deleteData={deleteDetail}
                setDeleteData={setDeleteDetail}
                dataDelete={detailDelete}
            />
        </div>
    )
}

export default DetailHandling;