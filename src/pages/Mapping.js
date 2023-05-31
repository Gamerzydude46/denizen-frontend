import React, { useEffect, useState } from "react";
import MapBox from "../components/MapBox";

function Mapping() {
  const [data, setData] = useState(undefined);
  useEffect(()=>{

    console.log(data)
  },[data])

  return (
    <div className="h-screen w-screen">
      <MapBox
        //pass start and end cords here
        start={[73.7928177, 15.5949912]}
        end={[73.801293, 15.594164]}
        //stores distance and duration
        setRouteData={(data) => setData(data)}
      />
    </div>
  );
}

export default Mapping;
