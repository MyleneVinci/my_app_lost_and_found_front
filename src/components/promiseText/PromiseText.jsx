import React from 'react';

import './promiseText.css';

const PromiseText = () => {
    return (
            <div className='promise'>
                <h2 className='promise-title'>Vous avez trouvé ou perdu un objet ? <br /> Déclarez-le et sollicitez l’aide de la communauté !</h2>
                <button className='lost'>J'ai perdu</button>
                <button className='found'>J'ai trouvé</button>
            </div>
    )
}

export default PromiseText;