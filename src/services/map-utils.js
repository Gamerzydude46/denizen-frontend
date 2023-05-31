
export const CalculateRouteMetrics = async (start, end) => {
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
    { method: "GET" }
  );
  const json = await query.json();
  return {
    distance: json.routes[0].distance,
    duration: json.routes[0].duration,
  };
};
