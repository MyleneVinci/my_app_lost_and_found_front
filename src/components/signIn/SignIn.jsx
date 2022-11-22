import React from 'react';
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from 'yup';

import './signIn.css';

const SignIn = () => {
  const navigator = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Pseudo requis")
      .min(6, "Votre pseudo doit avoir plus de 6 caractères")
      .max(20, "Votre pseudo doit avoir moins de 20 caractères")
      .test('Pseudo unique', 'Pseudo déjà utilisé',
        function (value) {
          return new Promise ((resolve, reject) => {
            axios.get(`${process.env.REACT_APP_API_URL}/user/username/${value}`)
              .then((res) => {
                if (res.response)
                resolve(false)
              })
              .catch((error) => {
                if (error)
                  resolve(true)
              })
          })
        }
      ),
    email: Yup.string().required("Email requis").email("Email invalide"),
    password: Yup.string()
      .required("Mot de passe requis")
      .min(6, "Votre mot de passe doit avoir plus de 6 caractères")
      .max(40, "Votre mot de passe doit avoir moins de 20 caractères"),
    confirmPassword: Yup.string()
      .required("Confirmation de mot de passe requis")
      .oneOf([Yup.ref("password"), null], "La confirmation du mot de passe ne correspond pas"),
    acceptTerms: Yup.bool().oneOf([true], "Veuillez accepter les conditions d'utilisation"),
  });

  const onSubmit = async (values) => {
    const {confirmPassword, acceptTerms, ...data} = values;

    const response = await axios
    .post(`${process.env.REACT_APP_API_URL}/user/`, data)
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
    navigator(`/enregistrement`);
}

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    }, 
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div className='signIn'>
      <h1>INSCRIPTION</h1>
      <div>{ !error && success ? success : ""}</div>
      <div>{ !success && error ? error : ""}</div>
      <form onSubmit={formik.handleSubmit} className='signIn-form'>
        <div className="signIn-pseudo">
          <label htmlFor="username">Pseudo</label>
          <input  
            name="username"
            type="text"
            className={
              'form-control' +
              (formik.errors.username && formik.touched.username
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Pseudo"
          /> 
          <div className="invalid-feedback">
            {formik.errors.username && formik.touched.username
              ? formik.errors.username
              : null}
          </div>        
        </div>
        <div className="signIn-email">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className={
              'form-control' +
              (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Adresse email"
          />
          <div className="invalid-feedback">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null}
          </div>
        </div>
        <div className="signIn-password">
          <label htmlFor="password">Mot de passe</label>
          <input
            name="password"
            type="password"
            className={
              'form-control' +
              (formik.errors.password && formik.touched.password
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Mot de passe"
          />
          <div className="invalid-feedback">
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null}
          </div>
        </div>
        <div className="signIn-confirmation">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            name="confirmPassword"
            type="password"
            className={
              'form-control' +
              (formik.errors.confirmPassword && formik.touched.confirmPassword
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Mot de passe"
          />
          <div className="invalid-feedback">
            {formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </div>
        </div>
        <div className="signIn-checkbox">
            <input 
              name="acceptTerms"
              type="checkbox"
              className={
                'form-check-input' +
                (formik.errors.acceptTerms && formik.touched.acceptTerms
                  ? ' is-invalid'
                  : '')
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.acceptTerms} 
            />
            <label>J'accepte les conditions d'utilisation</label>
          <div className="invalid-feedback">
            {formik.errors.acceptTerms && formik.touched.acceptTerms
              ? formik.errors.acceptTerms
              : null}
          </div>
        </div>
        <div>
          <button type='submit'>Valider</button>
          <p>Protection des données</p>
        </div>
      </form>
    </div>
  )
}

export default SignIn;