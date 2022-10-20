import React from 'react';
import { FaRegUser, FaLongArrowAltDown, FaRegEdit, FaRegMap } from "react-icons/fa";


import './instructions.css';

const Instructions = () => {
    // let iconStyle = { fontSize: "40px", color: '#3F312D' };

    return (
        <div className='instructions'>
                <h2>Comment retrouver un objet perdu ?</h2>
            <div className='step'>
                <FaRegUser classname='icon'  />
                <p>Créez votre compte</p>
                <FaLongArrowAltDown classname='icon'  />
            </div>
            <div className='step'>
                <FaRegEdit classname='icon' />
                <p>Créez votre annonce</p>
                <FaLongArrowAltDown classname='icon' />
            </div>
            <div className='step'>
                <FaRegMap  />
                <p>Consultez les annonces existantes</p>
            </div>
        </div>
    )
}

export default Instructions;