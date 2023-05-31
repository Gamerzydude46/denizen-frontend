import React from "react";
import Map from 'react-map-gl';
import  "mapbox-gl/dist/mapbox-gl.css";
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


const TOKEN = process.env.MapboxToken;

function MapBox() {

    const [viewPort, setViewPort] = React.useState({
        latitude: 28.6448,
        longitude: 77.216,
        zoom: 6,
    });


    return (
        <Map
            initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5
            }}
            style={{ width: 600, height: 400 }}
            mapboxAccessToken = {TOKEN}
            mapStyle="mapbox://styles/sujayk46/clia4nzl100uo01qu677r7jw7"
        />
    );
}

export default MapBox;