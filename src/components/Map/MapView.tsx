import type { ReactNode } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { CENTER } from '../../data/routes';
import { RouteLayer } from './RouteLayer';
import { SimulationLayer } from './SimulationLayer';
import { TileFilterEffect } from './TileFilterEffect';
import { useRouteGeo } from '../../hooks/useRouteGeo';

interface Props {
  mapController?: ReactNode;
}

export function MapView({ mapController }: Props) {
  useRouteGeo();

  return (
    <MapContainer
      center={CENTER}
      zoom={14}
      zoomControl={false}
      style={{ flex: 1, minHeight: 0 }}
    >
      {mapController}
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        maxZoom={19}
      />
      <ZoomControl position="topright" />
      <TileFilterEffect />
      <RouteLayer />
      <SimulationLayer />
    </MapContainer>
  );
}
