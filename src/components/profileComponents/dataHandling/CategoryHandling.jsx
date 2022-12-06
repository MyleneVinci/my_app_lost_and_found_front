import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import DataHandlingCard from './DataHandlingCard';

const CategoryHandling = () => {


    //gestion des appels a l'api
    const url = `${process.env.REACT_APP_API_URL}/categories`


    //affichage des données de la base de données
    const [getCategory, setGetCategory] = useState([]);

    useEffect(() => {
      axios
        .get(url)
        .then((res) => setGetCategory(res.data))
    }, [getCategory])


    //ajout d'une donnée dans la base de données
    const [postCategory, setPostCategory] = useState('');

    const categoryPost = async (e) => {
        e.preventDefault(); 
        
        if (postCategory === '' || postCategory === ' ') {
            alert("Veuillez renseigner le champ requis")
            return
        }

        await axios
            .post(url + `/category`, {
                category: postCategory,
            })            
            .then((result) => {
                if(result.status === 201) {
                    alert("Vous avez rajouté une catégorie");
                }
            })
            .catch((error) => {
                if(error.response) {
                    alert("les données saisies sont invalides")
                }
            });
            setPostCategory('');
    }

    // suppression d'une donnée de la base de données
    const [deleteCategory, setDeleteCategory] = useState('');
    const categoryDelete = (id) => {
        axios
        .delete(url +  `/${id}`)        
        .then((result) => {
            if(result.status === 200) {
                alert("Vous avez supprimé une catégorie");
                setDeleteCategory('');
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
                data='Catégorie'
                getData={getCategory}
                postData={postCategory}
                setPostData={setPostCategory}
                dataPost={categoryPost}
                dataDelete={categoryDelete}
            />
        </div>
    )
}

export default CategoryHandling;