import React from 'react';
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../UserProvider";

import './signIn.css';

const SignIn = () => {
  const navigator = useNavigate();
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/`, values)
        .then(({ data: { credential } }) => {
          setUser({
            token: credential,
          });
          navigator("/connexion");
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
  });

  return (
    <div className='signIn'>
      <h1>INSCRIPTION</h1>
      <form onSubmit={formik.handleSubmit} className='signIn-form'>
        <div className="signIn-pseudo">
          <label >Pseudo</label>
          <input  
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="pseudo"
            /> 
        </div>
        <div className="signIn-email">
          <label>Email</label>
              <input
                // id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Adresse e-mail"
              />
        </div>
        <div className="signIn-password">
          <label>Mot de passe</label>
              <input
                // id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Mot de passe"
              />
        </div>
        {/* <div className="signIn-confirmation">
          <label>Confirmer le mot de passe</label>
          <input type="password" />
        </div>
        <div className="signIn-checkbox">
          <input type="checkbox" />
          <p>J'accepte les conditions d'utilisation</p>
        </div> */}
        <button type='submit'>Valider</button>
        <p>Protection des données</p>
      </form>
    </div>
  )
}

export default SignIn;