import React from 'react';

import './signIn.css';

const SignIn = () => {
  return (
    <div className='signIn'>
      <h1>INSCRIPTION</h1>
      <form className='signIn-form'>
        <div className="signIn-pseudo">
          <label >Pseudo</label>
          <input type="text" /> 
        </div>
        <div className="signIn-email">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="signIn-password">
          <label>Mot de passe</label>
          <input type="password" />
        </div>
        <div className="signIn-confirmation">
          <label>Confirmer le mot de passe</label>
          <input type="password" />
        </div>
        <div className="signIn-checkbox">
          <input type="checkbox" />
          <p>J'accepte les conditions d'utilisation</p>
        </div>
        <button>Valider</button>
        <p>Protection des données</p>
      </form>
    </div>
  )
}

export default SignIn;