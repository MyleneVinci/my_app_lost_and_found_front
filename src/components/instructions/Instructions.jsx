import React from 'react';
import { FaRegUser, FaLongArrowAltDown, FaRegEdit, FaMobileAlt, FaLaptop } from "react-icons/fa";


import './instructions.css';

const Instructions = () => {
    let iconStyle = { fontSize: "40px", color: '#3F312D' };

    return (
        <div className='instructions'>
                <h2>Comment retrouver un objet perdu ?</h2>
            <div className='step-one'>
                <FaRegUser style={iconStyle} />
                <p>Créez votre compte</p>
                <FaLongArrowAltDown style={iconStyle} />
            </div>
            <div className='step-two'>
                <FaRegEdit style={iconStyle} />
                <p>Créez votre annonce</p>
                <FaLongArrowAltDown style={iconStyle} />
            </div>
            <div className='step-three'>
                <FaMobileAlt style={iconStyle} />  <FaLaptop style={iconStyle} /> 
                <p>Consultez annonces</p>
            </div>
        </div>
    )
}

export default Instructions;