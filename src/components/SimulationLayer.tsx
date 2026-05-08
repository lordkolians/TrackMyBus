import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { useBusStore } from '../stores/busStore';
import { useRouteStore } from '../stores/routeStore';
import { useUIStore } from '../stores/uiStore';
import { busPosition } from '../engine/geo';
import { busIcon } from './mapIcons';
import { useSimulation } from '../hooks/useSimulation';

export function SimulationLayer() {
  const map = useMap();
  const markerRefs = useRef<Record<string, L.Marker>>({});

  const buses = useBusStore((s) => s.buses);
  const routes = useRouteStore((s) => s.routes);
  const openInfo = useUIStore((s) => s.openInfo);

  useEffect(() => {
    // Always create fresh markers — cleanup from previous mount already removed them
    markerRefs.current = {};

    buses.forEach((bus) => {
      const route = routes.find((r) => r.id === bus.rid);
      if (!route) return;
      const marker = L.marker(busPosition(route, bus.p), {
        icon: busIcon(route, false, false),
        zIndexOffset: 1000,
      }).addTo(map);
      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        openInfo({ kind: 'bus', busId: bus.id, routeId: route.id });
      });
      markerRefs.current[bus.id] = marker;
    });

    return () => {
      Object.values(markerRefs.current).forEach((m) => m.remove());
      markerRefs.current = {};
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useSimulation(markerRefs);

  return null;
}
