import React, { useState } from 'react';
import LostForm from '../../components/declarationMaps/lostForm/LostForm';

import './declaration.css';

const Declaration = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='declaration'>
      <h1>DECLARATION</h1>
      <div className="declaration-container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Perdu
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Trouvé
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <LostForm />
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h3>Objet</h3>
            <hr />
            <div className="select-content">
              <select>
                <option value="">Catégorie</option>
              </select>
              <select>
                <option value="">Type</option>
              </select>
            </div>
            <h3>Localisation</h3>
            <hr />
            <div className="location-content">
              <input type="text" placeholder='Adresse'/> 
              <div>
                <p>ou</p>
                <p>Localisez-moi</p>
              </div>
            </div>
            <div className="file-content">
              <h3>Photo</h3>
              <hr />
              <input type="file" /> 
            </div>
            <div className="description-content">
              <h3>Description</h3>
              <hr />
              <textarea rows="5" cols="33" placeholder='Ajouter une description'/> 
            </div>
            <button>Valider</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Declaration;