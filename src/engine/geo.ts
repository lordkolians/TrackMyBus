import type { Route } from '../types';

export function posOnGeo(geo: [number, number][], p: number): [number, number] {
  if (geo.length < 2) return geo[0];
  let total = 0;
  const dists: number[] = [0];
  for (let i = 1; i < geo.length; i++) {
    total += Math.hypot(geo[i][0] - geo[i - 1][0], geo[i][1] - geo[i - 1][1]);
    dists.push(total);
  }
  if (!total) return geo[0];
  const tgt = p * total;
  for (let j = 1; j < geo.length; j++) {
    if (dists[j] >= tgt) {
      const f = (tgt - dists[j - 1]) / (dists[j] - dists[j - 1]);
      return [
        geo[j - 1][0] + (geo[j][0] - geo[j - 1][0]) * f,
        geo[j - 1][1] + (geo[j][1] - geo[j - 1][1]) * f,
      ];
    }
  }
  return geo[geo.length - 1];
}

export function busPosition(route: Route, p: number): [number, number] {
  if (route.geo) return posOnGeo(route.geo, p);
  const s = route.stops;
  const n = s.length - 1;
  const sp = p * n;
  const seg = Math.min(Math.floor(sp), n - 1);
  const fr = sp - seg;
  return [
    s[seg].c[0] + (s[seg + 1].c[0] - s[seg].c[0]) * fr,
    s[seg].c[1] + (s[seg + 1].c[1] - s[seg].c[1]) * fr,
  ];
}

export function atStop(route: Route, p: number): boolean {
  const f = (p * (route.stops.length - 1)) % 1;
  return f < 0.06 || f > 0.94;
}

export function snapToGeo(
  geo: [number, number][],
  coord: [number, number],
): [number, number] {
  let best = coord;
  let bestD = Infinity;
  for (let i = 1; i < geo.length; i++) {
    const a = geo[i - 1], b = geo[i];
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const l = dx * dx + dy * dy;
    const t2 = l > 0
      ? Math.max(0, Math.min(1, ((coord[0] - a[0]) * dx + (coord[1] - a[1]) * dy) / l))
      : 0;
    const d = Math.hypot(a[0] + t2 * dx - coord[0], a[1] + t2 * dy - coord[1]);
    if (d < bestD) { bestD = d; best = [a[0] + t2 * dx, a[1] + t2 * dy]; }
  }
  return best;
}
