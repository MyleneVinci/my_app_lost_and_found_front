import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";

import './mapRoom.css'


const MapRoom = () => {

    //icone personnalisée
    const icon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
    })


    //affichage des coordonnées de toutes les annonces


    return (
        <div className="mapContainer">
            <MapContainer center={[43.296482, 5.36978]} zoom={13} scrollWheelZoom={false}
            > 
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.296482, 5.36978]}>
                  <Popup>
                    Test
                  </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapRoom;