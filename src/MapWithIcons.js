import React from 'react';
import { MapContainer, TileLayer, Marker , Popup} from 'react-leaflet';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: './logo512.png',
  iconSize: [50, 50], 
  iconAnchor: [0, 0], 
  popupAnchor: [25, 25] 
});

const MapWithIcons = ({ position, zoom, markers }) => (
<MapContainer center={position} zoom={zoom} style={{ height: '50em', width: 'auto', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {markers.map((marker, idx) => (
      <Marker key={idx} position={marker.position} icon={customIcon}>
        <Popup>
        {marker.name}
      </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default MapWithIcons;
