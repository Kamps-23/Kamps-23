"use client";
import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import "./style.css";

export default function Geo() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef?.current) return;
    const map = new WebMap({
      portalItem: {
        id: "86daab3104194148b9d9ced2666c4361",
      },
    });

    const view = new MapView({
      map: map,
      container: mapRef.current,
      zoom: 6,
    });
    return () => view && view.destroy();
  }, []);

  return (
      <div ref={mapRef} className="viewDiv"></div>
  );
}
