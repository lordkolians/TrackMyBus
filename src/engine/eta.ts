import type { Bus, Route, EtaResult, EtaDelayEntry } from '../types';

const FPS = 60;
const DWELL_SEC = 18;
const DELAY_PROB = 0.00004;
const DELAY_DUR_SEC = 55;
const DELAY_FACTOR = 0.55;
const TRAFFIC_HOURS: [number, number][] = [[7, 9], [17, 19]];

export function getTrafficFactor(): number {
  const h = new Date().getHours();
  return TRAFFIC_HOURS.some(([s, e]) => h >= s && h < e) ? 0.72 : 1.0;
}

export function tickEtaDelay(busId: string, state: Record<string, EtaDelayEntry>): void {
  if (!state[busId]) state[busId] = { active: false, endsAt: 0, factor: 1.0 };
  const ds = state[busId];
  const now = Date.now();
  if (ds.active && now > ds.endsAt) { ds.active = false; ds.factor = 1.0; }
  if (!ds.active && Math.random() < DELAY_PROB) {
    ds.active = true;
    ds.endsAt = now + DELAY_DUR_SEC * 1000;
    ds.factor = DELAY_FACTOR;
  }
}

export function calculateETAs(
  bus: Bus,
  route: Route,
  etaDelayState: Record<string, EtaDelayEntry>,
): EtaResult[] {
  const n = route.stops.length - 1;
  const tf = getTrafficFactor();
  const df = etaDelayState[bus.id]?.factor ?? 1.0;
  const effSpeed = bus.sp * FPS * tf * df;
  const results: EtaResult[] = [];
  const curIdx = Math.floor(bus.p * n);

  route.stops.forEach((stop, idx) => {
    const stopP = idx / n;
    if (stopP < bus.p - 0.005) return;
    const progressLeft = Math.max(0, stopP - bus.p);
    const travelSec = progressLeft / effSpeed;
    const ahead = Math.max(0, idx - curIdx - 1);
    const etaSec = Math.round(travelSec + ahead * DWELL_SEC);
    results.push({
      stopName: stop.k,
      etaSec,
      isDelayed: !!(etaDelayState[bus.id]?.active),
    });
  });

  return results;
}

export function fmtETA(sec: number): string {
  if (sec < 60) return `${sec} с`;
  const m = Math.floor(sec / 60), s = sec % 60;
  if (sec < 3600) return s > 0 ? `${m} мин ${s} с` : `${m} мин`;
  return `${Math.floor(sec / 3600)} ч ${Math.floor((sec % 3600) / 60)} мин`;
}
