import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { useRouteStore } from '../stores/routeStore';
import { useUIStore } from '../stores/uiStore';
import { ts } from '../data/i18n';
import { stopIcon } from './mapIcons';

export function RouteLayer() {
  const map = useMap();
  const routes = useRouteStore((s) => s.routes);
  const dark = useUIStore((s) => s.dark);
  const lang = useUIStore((s) => s.lang);
  const openInfo = useUIStore((s) => s.openInfo);
  const polyRefs = useRef<Record<number, L.Polyline>>({});
  const stopRefs = useRef<Record<number, L.Marker[]>>({});

  // Initial draw — re-runs on each React mount (handles StrictMode double-invoke)
  useEffect(() => {
    polyRefs.current = {};
    stopRefs.current = {};

    routes.forEach((route) => {
      const poly = L.polyline(route.stops.map((s) => s.c), {
        color: route.color, weight: 5, opacity: 0.9,
      }).addTo(map);
      poly.on('click', () => openInfo({ kind: 'route', routeId: route.id }));
      polyRefs.current[route.id] = poly;

      const markers: L.Marker[] = [];
      route.stops.forEach((stop, i) => {
        const terminal = i === 0 || i === route.stops.length - 1;
        const m = L.marker(stop.c, { icon: stopIcon(route, terminal, dark), zIndexOffset: 500 })
          .addTo(map)
          .on('click', () => openInfo({ kind: 'stop', stopKey: stop.k, routeId: route.id }));
        m.bindTooltip(
          `<b>${ts(lang, stop.k)}</b><br><small style="color:${route.color}">${route.nameKey}</small>`,
          { className: 'tmb-tooltip', direction: 'top', offset: [0, -6] },
        );
        markers.push(m);
      });
      stopRefs.current[route.id] = markers;
    });

    return () => {
      Object.values(polyRefs.current).forEach((p) => p.remove());
      Object.values(stopRefs.current).flat().forEach((m) => m.remove());
      polyRefs.current = {};
      stopRefs.current = {};
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update polyline geometry when OSRM geo arrives
  useEffect(() => {
    routes.forEach((route) => {
      const poly = polyRefs.current[route.id];
      if (poly && route.geo) poly.setLatLngs(route.geo);
    });
  }, [routes]);

  // Snap stop markers after geo snap
  useEffect(() => {
    routes.forEach((route) => {
      const markers = stopRefs.current[route.id];
      if (!markers) return;
      route.stops.forEach((stop, i) => markers[i]?.setLatLng(stop.c));
    });
  }, [routes]);

  // Visibility toggle
  useEffect(() => {
    routes.forEach((route) => {
      const poly = polyRefs.current[route.id];
      const markers = stopRefs.current[route.id] ?? [];
      if (!poly) return;
      if (route.visible) {
        if (!map.hasLayer(poly)) poly.addTo(map);
        markers.forEach((m) => { if (!map.hasLayer(m)) m.addTo(map); });
      } else {
        if (map.hasLayer(poly)) map.removeLayer(poly);
        markers.forEach((m) => { if (map.hasLayer(m)) map.removeLayer(m); });
      }
    });
  }, [routes, map]);

  // Refresh stop icons on dark/light toggle
  useEffect(() => {
    routes.forEach((route) => {
      (stopRefs.current[route.id] ?? []).forEach((m, i) => {
        const terminal = i === 0 || i === route.stops.length - 1;
        m.setIcon(stopIcon(route, terminal, dark));
      });
    });
  }, [dark, routes]);

  return null;
}
