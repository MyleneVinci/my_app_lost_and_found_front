import React, { useState }  from 'react';
import { FaPlusCircle, FaMinusCircle, FaEye } from "react-icons/fa";

import './dataHandlingCard.css'

const DataHandlingCard = ({data, getData,  postData, setPostData, dataPost, dataDelete}) => {

    //gestion des affichages 
    const [isDataReduce, setIsDataReduce] = useState(false);
    const [isAddingData, setIsAddingData] = useState(false);

    
    //menu déroulant
    const handleDataReduce = () => {
    setIsDataReduce(!isDataReduce);
    }

    //affichage conditionnel de l'ajout de données
    const handleAddingData = () => {
        setIsAddingData(!isAddingData);
    }
        

    return (
        <div>
        {/* Affichage conditionnel des descriptions */}
                <div className="data-card-container">
                    <div className="data-card-content">
                        <div className="content-title">
                            <label>{data}</label>
                            <div className='title-icon'>
                                <FaEye onClick={handleDataReduce} />
                                <FaPlusCircle  onClick={handleAddingData}/>
                            </div>
                        </div>
                        {/* Affichage conditionnel de l'ajout de donnée */}
                        {isAddingData ? 
                            <div className='data-add'>
                                <form onSubmit={dataPost}>
                                    <input 
                                        type="text" 
                                        placeholder='Nouvelle entrée'
                                        id={data}
                                        value={postData}
                                        onChange={(e) => setPostData(e.target.value)}
                                    />
                                    <button type='submit'>OK</button>
                                </form>
                                    
                            </div> : null
                        }
                    {/* Affichage conditionnel des données */}
                        {isDataReduce ?
                            <div className="data-card-content-list">
                                {
                                    getData &&
                                    getData.map((item) => (
                                        <div className='list-item' key={item.id}>
                                            <ul>
                                                <li>{item.type || item.category || item.subcategory || item.detail}</li>
                                            </ul>
                                            <FaMinusCircle onClick={() =>dataDelete(item.id)} />
                                        </div>
                                    ))
                                }
                            </div> : null
                        }
                    </div>
                </div>
        </div>
    )
}

export default DataHandlingCard;

