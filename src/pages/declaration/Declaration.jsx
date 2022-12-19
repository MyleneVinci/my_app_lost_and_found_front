import React, { useState } from 'react';
import LostForm from '../../components/declarationMaps/lostForm/LostForm';
import FoundForm from '../../components/declarationMaps/foundForm/FoundForm';

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
            {toggleState === 1 ? <LostForm /> : null}
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            {toggleState === 2 ? <FoundForm /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Declaration;