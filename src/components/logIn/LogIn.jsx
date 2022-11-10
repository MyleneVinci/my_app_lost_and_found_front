import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
//j'appelle mon useContext
import { useUser } from "../UserProvider";


import './logIn.css';

const LogIn = () => {
    //gestion des erreurs (au départ il n'y en a pas)
    const [error, setError] = useState(null);
    //pour arriver sur ma page perso et rester dessus
    const navigator = useNavigate();
    //je change l'état de mon utilisateur, suite à ma connection (non connecte à connecté) : je vais donc appeller mon hook personnalisé dans le provider)
    const { setUser } = useUser();
  
  //je créé mon formulaire de validation, en précisant la valeur initial de mes objets
    const formik = useFormik ({
      initialValues: {
        email: "",
        password: "",
      },
      //on s'assure que les valeurs sont juste (ex: @)
      // validateOnChange: false,
      // //je créé mon schema de validation avec pour paramètre mes values : erreurs)
      // validate: (values) => {
      //   const errors = {};
  
      //   if (!values.email) {
      //     error.email = "Requis";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      //   ) {
      //     errors.email = "Email pas reconnu";
      //   }
      //   if (!values.password) {
      //     errors.password = "Requis";
      //   }
      //   return errors;
      // },
      //lors de l'envoi de mon formulaire je renvoir les valeurs indiquées : je vérifie mon BE
      onSubmit: (values) => {
        axios
          //j'appelle mon API et la route users (où est login?)
          .post(`${process.env.REACT_APP_API_URL}/user/login`, values)
          //je récupère (pour envoyer)les attributs propre à mon user: credentials se trouve dans le back
          .then(({ data: { credentials, id } }) => {
            // quels attributs : qu'est ce que je vais envoyer une fois que l'utilisateur est connecté (j'attache le token)
            setUser({
              token: credentials,
              id: id,
            });
            //je récupère mon navigator pour dire où le client se retrouve?
            navigator(`/profil/${id}`);
          })
          //gestion de l'erreur: message se trouve  dans le back
          .catch(({ data: { message } }) => {
            setError({message});
          });
      },
    });

  
  return (
    <div className='logIn'>
      <h1>CONNEXION</h1>
      <form onSubmit={formik.handleSubmit} className='logIn-form'>
        <div className="logIn-email">
          <label>Email</label>
          <input
              type="email"
              name="email"
              // id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Votre E-mail"
            />
        </div>
        <div className="logIn-password">
          <label>Mot de passe</label>
          <input
              type="password"
              name="password"
              // id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Votre mot de passe"
            />
        </div>
        <button type='submit'>Valider</button>
      </form>
    </div>
  )
}

export default LogIn;