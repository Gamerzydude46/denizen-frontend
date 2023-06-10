import React, { useEffect, useState } from "react";
import MapBox from "../components/MapBox";
import { calculateRouteMetrics } from "../services/map-utils";

function Mapping() {
  useEffect(() => {
    (async () => {
      const res = await calculateRouteMetrics(
        [73.7928177, 15.5949912],
        [73.801293, 15.594164]
      );
      console.log(res)
    })();
  }, []);

  return (
    <div className="h-screen w-screen">
      <MapBox
        //pass start and end cords here
        start={[73.7928177, 15.5949912]}
        end={[73.801293, 15.594164]}
        //stores distance and duration
      />
    </div>
  );
}

export default Mapping;
