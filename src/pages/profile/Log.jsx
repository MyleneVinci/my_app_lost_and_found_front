import React, { useState } from 'react';

import SignIn from '../../components/signIn/SignIn';
import LogIn from '../../components/logIn/LogIn';


import './log.css';

const Log = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='log'>
        <h1>PROFIL</h1>
        <div className="log-container">
            <div className="bloc-tabs">
            <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
            >
                Inscription
            </button>
            <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
            >
                Connexion
            </button>
            </div>

            <div className="content-tabs">
            <div
                className={toggleState === 1 ? "log-content  active-log-content" : "log-content"}
            >
                <SignIn />
            </div>

            <div
                className={toggleState === 2 ? "log-content  active-log-content" : "log-content"}
            >
                <LogIn />
            </div>
            </div>
        </div>
        </div>
    );
}


export default Log;