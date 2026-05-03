import { useEffect } from 'react';
import { useRouteStore } from '../stores/routeStore';
import { fetchRouteGeo } from '../services/osrm';
import { snapToGeo } from '../engine/geo';

export function useRouteGeo() {
  const { routes, setRouteGeo, snapStop } = useRouteStore();

  useEffect(() => {
    routes.forEach((route) => {
      if (route.geo) return;
      fetchRouteGeo(route.id, route.stops).then((geo) => {
        if (!geo || geo.length < 2) return;
        setRouteGeo(route.id, geo);
        route.stops.forEach((stop, idx) => {
          const snapped = snapToGeo(geo, stop.c);
          snapStop(route.id, idx, snapped);
        });
      });
    });
  }, []); // run once on mount
}
