export const calculateRouteMetrics = async (start, end) => {
  console.log(`START`, start, `END`, end);
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
    { method: "GET" }
  );
  const json = await query.json();
  return {
    distance: Math.round(json.routes[0].distance),
    duration: json.routes[0].duration,
  };
};

export const getGeoLocations = async (q) => {
  const query = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${q}.json?country=in&proximity=ip&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
    { method: "GET" }
  );
  const json = await query.json();
  return json.features.map((d) => {
    return { cordinates: d.center, place: d.place_name };
  });
};
