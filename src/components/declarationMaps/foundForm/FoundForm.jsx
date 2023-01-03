import React, { useState, useEffect, useRef} from 'react';
import DeclarationMap from '../declarationMap/DeclarationMap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../UserProvider';

import './foundForm.css'

const FoundForm = () => {

    //récupère les users
    const { user} = useUser(true);
    const [adUser, setAdUser] = useState([]);
    const { id }= useParams();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/user/${id}`)
            .then((res) => res.data)
            .then((data) => setAdUser(data))
    }, [id])


    //afficher les données de la base de données
    const [getTypes, setGetTypes] = useState([]);
    const [getCategories, setGetCategories] = useState([])
    const [getSubcategories, setGetSubcategories] = useState([])
    const [getDetails, setGetDetails] = useState([])
    const url = `${process.env.REACT_APP_API_URL}`

    useEffect(() => {
        axios
            .get(url + '/types')
            .then((res) => setGetTypes(res.data))
    }, [])

    useEffect(() => {
        axios
            .get(url + '/categories')
            .then((res) => setGetCategories(res.data))
    }, [])

    useEffect(() => {
        axios
            .get(url + '/subcategories')
            .then((res) => setGetSubcategories(res.data))
    }, [])
    
    useEffect(() => {
        axios
            .get(url + '/details')
            .then((res) => setGetDetails(res.data))
    }, [])


    //post des données
    const navigate = useNavigate();
    const inputRefLat = useRef(null);
    const inputRefLon = useRef(null);

    const [item_status, setItem_status] = useState("trouvé")
    const [date, setDate] = useState("")
    const [types_id, setTypes_id] = useState("");
    const [categories_id, setCategories_id] = useState("")
    const [subcategories_id, setSubcategories_id] = useState("")
    const [subcategory_details_id, setSubcategory_details_id] = useState("")
    const [text_description, setText_description] = useState("")
    const [picture, setPicture] = useState("")
    const [user_id, setUser_id] = useState(id)

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("item_status", item_status);
        formData.append("date", date);
        formData.append("types_id", types_id);
        formData.append("categories_id", categories_id);
        formData.append("subcategories_id", subcategories_id);
        formData.append("subcategory_details_id", subcategory_details_id);
        formData.append("text_description", text_description);
        formData.append("picture", picture);
        formData.append("user_id", user_id);
        formData.append("latitude", inputRefLat.current.value);
        formData.append("longitude", inputRefLon.current.value);

        await axios.post(
            `${process.env.REACT_APP_API_URL}/ad/addad`,
            formData
        )                
        .then((response)=>{
            if (response.status===200){
                alert("Vous avez créé une nouvelle annonce d'objet trouvé.");
                    navigate(`/declaration/${id}`);
            }
        })
        .catch((err)=>{
            if (err) {
                alert("impossible de créer l'annonce")
            }
        });
    };


    return (
        <div>
            {!user && 
                <div>
                    <p>Veuillez vous connecter pour créer une annonce</p>
                    <a href="/enregistrement">Connexion</a>
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div className="select-content">
                    <label htmlFor="">Objet</label>
                    <hr />
                    <input 
                        type="hidden"
                        name="user_id"
                        value={user_id}
                        id="user_id"
                        onChange={(event) => setUser_id(event.target.value)}
                    /> 
                    <input 
                        type="hidden"
                        name="item_status"
                        value="trouvé"
                        id="item_status"
                        onChange={(event) => setItem_status(event.target.value)}
                    /> 
                    <input 
                        type="date"
                        name="date"
                        value={date}
                        id="date"
                        onChange={(event) => setDate(event.target.value)}

                    /> 
                    <select
                        onChange={(event) => setTypes_id(event.target.value)}
                        value={types_id}
                        id="types_id"  
                        name="types_id"        
                    >
                        <option>Type</option>
                        {getTypes.map((type, index) => (
                            <option key={index} value={type.id}>
                                {type.type}
                            </option>
                        ))}
                    </select>
                    <select
                        onChange={(event) => setCategories_id(event.target.value)}
                        value={categories_id}
                        id="categories_id" 
                        name="categories_id"         
                        
                    >
                        <option>Catégorie</option>
                        {getCategories.map((category, index) => (
                            <option key={index} value={category.id}>
                                {category.category}
                            </option>
                        ))}
                    </select>
                    <select
                        onChange={(event) => setSubcategories_id(event.target.value)}
                        value={subcategories_id}
                        id="subcategories_id"          
                        name="subcategories_id"          
                    >
                        <option>Sous-catégorie</option>
                        {getSubcategories.map((subcategory, index) => (
                            <option key={index} value={subcategory.id}>
                                {subcategory.subcategory}
                            </option>
                        ))}
                    </select>
                    <select
                        onChange={(event) => setSubcategory_details_id(event.target.value)}
                        value={subcategory_details_id}
                        id="subcategory_details_id"                          
                        name="subcategory_details_id"                          
                    >
                        <option>Détail</option>
                        {getDetails.map((detail, index) => (
                            <option key={index} value={detail.id}>
                                {detail.detail}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="location-content">
                    <label htmlFor="">Localisation</label>
                    <hr />
                    <div>
                    <input 
                        type="hidden"
                        id="latFound"
                        name="latitude"
                        placeholder="latitude"
                        ref={inputRefLat}

                    /> 
                    <input 
                        type="hidden"
                        id="longFound"
                        name="longitude"
                        placeholder="longitude"
                        ref={inputRefLon}
                    /> 
                </div>
                <DeclarationMap 
                        latitude="latFound"
                        longitude="longFound"
                    />
                </div>
                <div className="file-content">
                    <label htmlFor="">Photo</label>
                    <hr />
                    <input 
                        required
                        name='picture'
                        type="file" 
                        id="picture"
                        onChange={(event) => setPicture(event.target.files[0])}                      
                    /> 
                </div>
                <div className="description-content">
                    <label htmlFor="">Description</label>
                    <hr />
                    <textarea 
                        rows="5" cols="80" 
                        placeholder='Ajouter une description'
                        id="text_description"
                        name="text_description"
                        value={text_description}
                        onChange={(event) => setText_description(event.target.value)}
                    /> 
                </div>
                {!user ? 
                    <button className='form-button' disabled>
                        Valider
                    </button> : 
                    <button className='form-button' type="submit">
                        Valider
                    </button> 
                }
            </form>
        </div>
    )
}

export default FoundForm;