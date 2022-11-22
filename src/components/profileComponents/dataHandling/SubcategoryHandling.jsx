import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import DataHandlingCard from './DataHandlingCard';

const SubcategoryHandling = () => {


    //gestion des appels a l'api
    const url = `${process.env.REACT_APP_API_URL}/subcategories`


    //affichage des données de la base de données
    const [getSubcategory, setGetSubcategory] = useState([]);

    useEffect(() => {
      axios
        .get(url)
        .then((res) => setGetSubcategory(res.data))
    }, [getSubcategory])


    //ajout d'une donnée dans la base de données
    const [postSubcategory, setPostSubcategory] = useState('');

    const subcategoryPost = async (e) => {
        e.preventDefault(); 
        
        if (postSubcategory === '' || postSubcategory === ' ') {
            alert("Veuillez renseigner le champ requis")
            return
        }

        await axios
            .post(url + `/subcategory`, {
                subcategory: postSubcategory,
            })            
            .then((result) => {
                if(result.status === 201) {
                    alert("Vous avez rajouté une sous-catégorie");
                    setPostSubcategory('');
                }
            })
            .catch((error) => {
                if(error.response) {
                    alert("les données saisies sont invalides")
                }
            });
    }

    // suppression d'une donnée de la base de données
    const [deleteSubcategory, setDeleteSubcategory] = useState('');
    const subcategoryDelete = (id) => {
        axios
        .delete(url +  `/${id}`)        
        .then((result) => {
            if(result.status === 200) {
                alert("Vous avez supprimé une sous-catégorie");
                setDeleteSubcategory('');
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
                data='Sous-catégorie'
                getData={getSubcategory}
                setGetData={setGetSubcategory}
                postData={postSubcategory}
                setPostData={setPostSubcategory}
                dataPost={subcategoryPost}
                deleteData={deleteSubcategory}
                setDeleteData={setDeleteSubcategory}
                dataDelete={subcategoryDelete}
            />
        </div>
    )
}

export default SubcategoryHandling;