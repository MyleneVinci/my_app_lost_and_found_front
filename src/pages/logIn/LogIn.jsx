import React from 'react';

import './logIn.css';

const LogIn = () => {
  return (
    <div className='logIn'>
      <h1>CONNEXION</h1>
      <form className='logIn-form'>
        <div className="logIn-email">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="logIn-password">
          <label>Mot de passe</label>
          <input type="password" />
        </div>
        <button>Valider</button>
      </form>
    </div>
  )
}

export default LogIn;