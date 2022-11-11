import React from 'react';
import { FaRegUser, FaLongArrowAltDown, FaRegEdit, FaRegMap } from "react-icons/fa";


import './instructions.css';

const Instructions = () => {

    return (
        <div className='instructions'>
                <h2>Comment retrouver un objet perdu ?</h2>
            <div className='step'>
                <FaRegUser className='icon'  />
                <p>Créez votre compte</p>
                <FaLongArrowAltDown className='icon'  />
            </div>
            <div className='step'>
                <FaRegEdit className='icon' />
                <p>Créez votre annonce</p>
                <FaLongArrowAltDown className='icon' />
            </div>
            <div className='step'>
                <FaRegMap  />
                <p>Consultez les annonces existantes</p>
            </div>
        </div>
    )
}

export default Instructions;