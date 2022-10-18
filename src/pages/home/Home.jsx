import React from 'react';

import PromiseContainer from '../../components/promiseContainer/PromiseContainer';
import Instructions from '../../components/instructions/Instructions';
import MapContainer from '../../components/mapContainer/MapContainer';

import './home.css';

const Home = () => {
  return (
    <div className='home'>
          <PromiseContainer />
          <Instructions />
          <MapContainer />
    </div>
  )
}

export default Home;