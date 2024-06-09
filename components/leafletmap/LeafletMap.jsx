import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons not showing correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const position = [52.230616568832815, 20.98753242883538]; // Coordinates for Prosta 51, 00-838 Warszawa

const LeafletMap = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full min-h-[300px] lg:min-h-[600px]">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          CREAM Property Advisors<br /> ul. Prosta 51, 00-838 Warszawa.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
