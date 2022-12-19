import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";

import './declarationMap.css'


const DeclarationMap = ({latitude, longitude}) => {

    //icone personnalisée
    const icon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
      
    })
   

//ajout de marqueur
const AddMArker = () => {
    const map = useMap()
    let marker;

    useMapEvents({
        click: (e) => {

            let position = e.latlng

            //supprime le marqueur précédent si il existe
            if (marker !== undefined) {
                map.removeLayer(marker)
            }

            //ajoute un marqueur
            marker = L.marker(position)
            L.Marker.prototype.options.icon = icon
            map.addLayer(marker)

            // affiche les coordonnées au click de la position sur la carte dans les inputs
            document.querySelector(`#${latitude}`).value = position.lat.toFixed(6)
            document.querySelector(`#${longitude}`).value = position.lng.toFixed(6)
        }
    });  
};    


// composant barre de recherche par adresse
const LeafletgeoSearch = (e) => {
    const map = useMap();
        useEffect(() => {
            const provider = new OpenStreetMapProvider();
        
            const searchControl = new GeoSearchControl({
                provider,
                showMarker: false,
                autoClose: true,
                searchLabel: 'Entrer une addresse'
            });
        
            map.addControl(searchControl);
        
            return () => map.removeControl(searchControl);
        }, [map]);
}

//geolocalisation du user
const MyLocation = () => {
    const [position, setPosition] = useState(null);
    const map = useMap()

    useEffect(() => {
        const button = L.easyButton("fa-map-marker", () => {
            //ATTENTION geolocalisation en local automatiquement refusée sur Chrome utiliser Firefox
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getMaxZoom());
            });
        }).addTo(map);

        return () => map.removeControl(button);
    }, [map]);
    }

    return (
        <div className="mapContainer">
            <MapContainer center={[43.296482, 5.36978]} zoom={13} scrollWheelZoom={false}
            > 
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LeafletgeoSearch/>
                <AddMArker/>
                <MyLocation />
            </MapContainer>
        </div>
    )
}

export default DeclarationMap;