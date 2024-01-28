import type { GeoJsonObject } from "geojson";

import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import data from "@/assets/geo.json";

export default function Map() {
  return (
    <MapContainer center={{ lat: -15.793889, lng: -47.882778 }} zoom={5}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <GeoJSON data={data as GeoJsonObject} />
    </MapContainer>
  );
}
