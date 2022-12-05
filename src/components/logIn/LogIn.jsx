import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useUser } from "../UserProvider";
import * as Yup from 'yup';



import './logIn.css';

const LogIn = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigator = useNavigate();
    const { setUser } = useUser();

    //schema de vlidation des données des input
    const validationSchema = Yup.object().shape({
      email: Yup.string()
      .required("Email requis")
      .email("Email invalide")
      .test('Email existant', 'Aucun compte associé',
      function (value) {
        return new Promise ((resolve, reject) => {
          axios.get(`${process.env.REACT_APP_API_URL}/user/email/${value}`)
            .then((res) => {
              if (res.response)
              console.log('true')
              resolve(true)
            })
            .catch((error) => {
              if (error)
              console.log(error)
                resolve(false)
            })
        })
      }
    ),
      password: Yup.string()
        .required("Mot de passe requis")
    });

    //connexion au profil
    const onSubmit = async (values) => {
  
      const response = await axios
      .post(`${process.env.REACT_APP_API_URL}/user/login`, values)
      .then(({ data: { credentials, id } }) => {
        // quels attributs : qu'est ce que je vais envoyer une fois que l'utilisateur est connecté (j'attache le token)
        setUser({
          token: credentials,
          id: id,
        });
        navigator(`/profil/${id}`);
      })
      .catch((err) => {
        if (err && err.response) {
        setError(err.response.data.message);
        setSuccess(null);
        }
      });
  
      if (response && response.data.message) {
        setError(null);
        setSuccess(response.data.message);
        formik.resetForm();
      }
    }
  
    //formulaire de validation
    const formik = useFormik ({
      initialValues: {
        email: "",
        password: "",
      }, 
      validateOnBlur: true,
      onSubmit,
      validationSchema: validationSchema,
    });

  
    return (
      <div className='logIn'>
        {/* <h1>CONNEXION</h1> */}
        <form onSubmit={formik.handleSubmit} className='logIn-form'>
          <div className="logIn-email">
          <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className={
                'form-control-logIn' +
                (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Adresse e-mail"
            />
            <div className="invalid-feedback-logIn">
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null}
            </div>
          </div>
          <div className="logIn-password">
          <label htmlFor="password">Mot de passe</label>
            <input
              name="password"
              type="password"
              className={
                'form-control-logIn' +
                (formik.errors.password && formik.touched.password
                  ? ' is-invalid'
                  : '')
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Mot de passe"
            />
            <div className="invalid-feedback-logIn">
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null}
            </div>
          </div>
          <button type='submit'>Valider</button>
        </form>
      </div>
    )
  }

export default LogIn;