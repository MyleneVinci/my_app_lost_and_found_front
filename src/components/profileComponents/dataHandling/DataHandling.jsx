import React, { useState }  from 'react';

import TypeHandling from './TypeHandling';
import CategoryHandling from './CategoryHandling';
import SubcategoryHandling from './SubcategoryHandling';
import DetailHandling from './DetailHandling';

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import './dataHandling.css';


const DataHandling = () => {

    //gestion des affichages 
    const [isTitleReduce, setIsTitleReduce] = useState(false);

    //menu déroulant du titre
    const handleTitleReduce = () => {
        setIsTitleReduce(!isTitleReduce);
        }


    return (
        <div className='data-block'>
            <div className="data-block-title">
                <h2>Gestion des objets</h2>
                <span onClick={handleTitleReduce}>{isTitleReduce ? <FaChevronUp/> : <FaChevronDown/>}</span>
            </div>
        {/* Affichage conditionnel des descriptions */}
            {isTitleReduce ?          
                <div>
                    <TypeHandling />
                    <CategoryHandling />
                    <SubcategoryHandling />
                    <DetailHandling />
                </div> : null 
            } 
        </div>
    )
}

export default DataHandling;