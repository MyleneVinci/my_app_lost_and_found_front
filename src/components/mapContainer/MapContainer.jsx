import React from 'react';
import carte from '../../assets/carte.jpg'

import './mapContainer.css';

const MapContainer = () => {
  return (
    <div className='map-container'>
        <h2>Accédez à la carte des objets</h2>
        <img src={carte} alt="" />
    </div>
  )
}

export default MapContainer;