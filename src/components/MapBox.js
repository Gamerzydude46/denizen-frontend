import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/src/directions";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3VqYXlrNDYiLCJhIjoiY2xpYTNwbzQ2NGJ0aTNqbXc3ODkxZG53MCJ9.zsckXSkZk0E8YhqbPEdotQ";

export default function MapBox({ start, end, setRouteData }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: start, // starting position
      zoom: 15,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    (async () => {
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      if (setRouteData) {
        setRouteData({
          distance: json.routes[0].distance,
          duration: json.routes[0].duration,
        });
      }
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };

      // if the route already exists on the map, we'll reset it using setData
      if (map.current.getSource("route")) {
        map.current.getSource("route").setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        // new mapboxgl.Marker().setLngLat(start).addTo(map.current);
        // Create a new marker.
        map.current.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 10,
            "line-opacity": 0.75,
          },
        });
      }
    })();
  }, []);
  if (!start && !end) {
    throw Error("Add start and end");
  }
  return <div ref={mapContainer} className="w-full h-full " />;
}
