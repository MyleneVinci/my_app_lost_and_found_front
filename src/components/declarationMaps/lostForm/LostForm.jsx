import React from 'react'
import carte from '../../../assets/carte.jpg'

import './lostForm.css'

const LostForm = () => {
  return (
    <div>
        <form classname='form' action="">
            <div className="select-content">
                <label htmlFor="">Objet</label>
                <hr />
                <select>
                    <option value="">Type</option>
                </select>
                <select>
                    <option value="">Catégorie</option>
                </select>
                <select>
                    <option value="">Sous-catégorie</option>
                </select>
                <select>
                    <option value="">Détail</option>
                </select>
            </div>
            <div className="location-content">
                <label htmlFor="">Localisation</label>
                <hr />
                <img src={carte} alt="" />            
            </div>
            <div className="file-content">
                <label htmlFor="">Photo</label>
                <hr />
                <input type="file" /> 
            </div>
            <div className="description-content">
                <label htmlFor="">Description</label>
                <hr />
                <textarea rows="5" cols="80" placeholder='Ajouter une description'/> 
            </div>
            <button>Valider</button>
          </form>    
        </div>
  )
}

export default LostForm