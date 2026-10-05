'use client';

import { icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { automationLocations } from './automation-locations';

const mapBounds = automationLocations.map((location) => location.coordinates);

const companyIcon = icon({
  iconUrl: '/images/icons/favicon_io/apple-touch-icon.png',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

export default function AutomationMap() {
  return (
    <MapContainer
      aria-label="Mapa dos municípios atendidos pela Autoric"
      bounds={mapBounds}
      boundsOptions={{ padding: [36, 36] }}
      scrollWheelZoom={false}
      className="relative z-0 isolate h-[360px] w-full sm:h-[440px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {automationLocations.map((location) => (
        <Marker
          key={`${location.city}-${location.state}`}
          position={location.coordinates}
          icon={companyIcon}
          title={`${location.city} - ${location.state}`}
        >
          <Popup>
            <strong>{location.city} - {location.state}</strong>
            <br />
            {location.deliveries} {location.deliveries === 1 ? 'atendimento' : 'atendimentos'} documentados
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}