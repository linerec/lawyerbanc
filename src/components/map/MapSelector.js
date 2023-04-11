import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { defaults as defaultControls, Attribution } from "ol/control";

const MapSelector = ({ onAreaSelected }) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: "",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-74.2443, 40.5696]),
        zoom: 10,
      }),
      controls: defaultControls({
        attribution: false,
        rotate: false,
        zoom: false,
      }).extend([
        new Attribution({
          collapsible: false, // Make the attribution collapsible
          collapsed: false, // Set the initial state of the attribution
        }),
      ]),
    });

    map.on("click", (event) => {
      // Logic to get the selected area and update the golf course list
    });

    return () => {
      map.setTarget(null);
    };
  }, []);
  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default MapSelector;
