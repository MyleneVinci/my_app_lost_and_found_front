import React from 'react';

import './promiseContainer.css';

const PromiseContainer = () => {
    return (
            <div className='promise'>
                <h2>Vous avez trouvé ou perdu un objet ? <br /> Déclarez-le et sollicitez l’aide de la communauté !</h2>
                <div className="button-container">
                    <button className='lost'>J'ai perdu</button>
                    <button className='found'>J'ai trouvé</button>
                </div>
            </div>
    )
}

export default PromiseContainer;