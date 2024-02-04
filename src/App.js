import React, { useEffect, useState } from 'react';
import './App.css';
import MapWithIcons from './MapWithIcons';
import configData from "./config.json";

function App() {
  const position = [34.2073, -84.1402];
  const zoom = 10;
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch(`http://${configData.SERVER_IP}:3890/json`)
      .then(res => res.json())
      .then(json => setMarkers(json.map(point => ({ position: point.coords, name: point.name}))));
  }, []);

  return (
    <div className="App">
      <MapWithIcons position={position} zoom={zoom} markers={markers} />
    </div>
  );
}

export default App;
