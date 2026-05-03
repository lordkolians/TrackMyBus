import type { Stop } from '../types';
import { getCachedGeo, setCachedGeo } from './geoCache';

const OSRM_BASE = 'https://router.project-osrm.org/route/v1/driving';

export async function fetchRouteGeo(
  routeId: number,
  stops: Stop[],
): Promise<[number, number][] | null> {
  const cached = await getCachedGeo(routeId);
  if (cached) return cached;

  try {
    const coords = stops.map((s) => `${s.c[1]},${s.c[0]}`).join(';');
    const res = await fetch(`${OSRM_BASE}/${coords}?overview=full&geometries=geojson`);
    const data = await res.json() as {
      code: string;
      routes?: Array<{ geometry: { coordinates: [number, number][] } }>;
    };

    if (data.code === 'Ok' && data.routes?.[0]) {
      const geo = data.routes[0].geometry.coordinates.map(
        (c): [number, number] => [c[1], c[0]],
      );
      await setCachedGeo(routeId, geo);
      return geo;
    }
  } catch {
    // fall through to null
  }

  return null;
}
