import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, useMap, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import axios from 'axios';

import "leaflet/dist/leaflet.css";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";

import './mapRoom.css';
import animalIcon from '../../assets/animalIcon.png';
import childIcon from '../../assets/childIcon.png';
import stuffIcon from '../../assets/stuffIcon.png';
import documentsIcon from '../../assets/documentsIcon.png';
import moneyIcon from '../../assets/moneyIcon.png';
import lostPopup from '../../assets/lostPopup.png';
import foundPopup from '../../assets/foundPopup.png';


const MapRoom = () => {

  //icone personnalisée
const createIcon = (url) => {
  return L.icon({
    iconUrl: url
  })
}

const getLostMarkerIcon = (type) => {
  if(type === 'Documents officiels') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%23f90909&size=large&icon=id-card&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Effets personnels') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%23f90909&size=large&icon=key&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Portefeuille / Argent') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%23f90909&size=large&icon=euro-sign&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Animaux') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%23f90909&size=large&icon=paw&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Enfants') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%23f90909&size=large&icon=baby&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Autre') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%23f90909&size=large&icon=exclamation&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
}

const getFoundMarkerIcon = (type) => {
  if(type === 'Documents officiels') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%2302c814&size=large&icon=id-card&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Effets personnels') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%2302c814&size=large&icon=key&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Portefeuille / Argent') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%2302c814&size=large&icon=euro-sign&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Animaux') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%2302c814&size=large&icon=paw&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Enfants') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%2302c814&size=large&icon=baby&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
  if(type === 'Autre') return   createIcon(`https://api.geoapify.com/v1/icon/?type=material&color=%2302c814&size=large&icon=exclamation&iconType=awesome&textSize=small&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
}

//format de la date
const newFormatDate = (date) => {
  return date.substring(0, 10).split("-").reverse().join("-");  
}

  //affichage des coordonnées de toutes les annonces
  const url = `${process.env.REACT_APP_API_URL}/ad/filter`
  const [getAd, setGetAd] = useState([]);

  useEffect(() => {
    axios
        .get(url)
        .then((res) => setGetAd(res.data))
  }, [])


  return (
    <div className="mapRoomMapContainer">
      <h1>CARTE DES ANNONCES</h1>
      <div className="legend">
        <h2>Légende</h2>
        <div className="item_status-legend">
          <h3>Statut de l'objet</h3>
          <div className="item_status-legend-content">
            <div className="icon-legend">
              <img src={lostPopup} alt="légende icône objet perdu" />
              <p>Objet perdu</p>
            </div>
            <div className="icon-legend">
              <img src={foundPopup} alt="légende icône objet trouvé" />
              <p>Objet trouvé</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="types-legend">
          <h3>Type de l'objet</h3>
          <div className="types-legend-content">
            <div className="icon-legend">
              <img src={documentsIcon} alt="légende icône type d'objet Documents officiels" />
              <p>Documents officiels</p>
            </div>
            <div className="icon-legend">
              <img src={moneyIcon} alt="légende icône type d'objet effets personnels" />
              <p>Effets personnels</p>
            </div>
            <div className="icon-legend">
              <img src={moneyIcon} alt="légende icône type d'objet Portefeuille / Argent" />
              <p>Portefeuille / Argent</p>
            </div>
            <div className="icon-legend">
              <img src={animalIcon} alt="légende icône type d'objet Animaux" />
              <p>Animaux</p>
            </div>
            <div className="icon-legend">
              <img src={childIcon} alt="légende icône type d'objet enfants" />
              <p>Enfants</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
      <h2>Carte</h2>
        <MapContainer center={[43.296482, 5.36978]} zoom={13} scrollWheelZoom={false}> 
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayersControl position="topleft">
            <LayersControl.Overlay name="objets perdu" checked>
              <LayerGroup>
                {getAd && getAd
                .filter(ad => ad.item_status === 'perdu')
                .map((ad, index) => (
                  <Marker key={index} position={[ad.latitude, ad.longitude]} icon={getLostMarkerIcon(ad.type)}>
                    <Popup className="popup">
                      Annonce n° {index + 1} <br />
                      Publiée le  {newFormatDate(ad.date)} par {ad.username} <br />
                      {/* Concerne : <br /> */}
                      Type : {ad.category} <br /> 
                      Catégorie : {ad.subcategory} <br /> 
                      Détail supplémentaire : {ad.detail}  <br /> 
                      <img src={`${process.env.REACT_APP_UPLOADS}/${ad.picture}`}  alt="photo de l'objet de l'annonce" /> <br />
                      {ad.text_description}

                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="objets trouvés" checked>
              <LayerGroup>
                {getAd && getAd
                .filter(ad => ad.item_status === 'trouvé' )
                .map((ad, index) => (
                  <Marker key={index} position={[ad.latitude, ad.longitude]} icon={getFoundMarkerIcon(ad.type)}>
                    <Popup>
                      Annonce n° {index + 1} <br />
                      Publiée le  {newFormatDate(ad.date)} par {ad.username} <br />
                      {/* Concerne : <br /> */}
                      Type : {ad.category} <br /> 
                      Catégorie : {ad.subcategory} <br /> 
                      Détail supplémentaire : {ad.detail}  <br />  
                      <img src={`${process.env.REACT_APP_UPLOADS}/${ad.picture}`}  alt="photo de l'objet de l'annonce" /> <br />
                      {ad.text_description}
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  )
}

export default MapRoom;