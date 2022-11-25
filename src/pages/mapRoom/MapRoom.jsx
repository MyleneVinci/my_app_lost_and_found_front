import React from 'react';
import LostMap from "../../components/declarationMaps/lostMap/LostMap"
import LostForm from '../../components/declarationMaps/lostForm/LostForm';

import './mapRoom.css';

const MapRoom = () => {
  return (
    <div>
      {/* <LostMap /> */}
      <LostForm />
    </div>
  )
}

export default MapRoom;