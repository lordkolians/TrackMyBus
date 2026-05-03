import type { Bus } from '../types';

export function advanceBus(bus: Bus): void {
  if (bus.st === 'stopped') return;
  bus.p += bus.sp * bus.dir;
  if (bus.p >= 1) { bus.p = 1; bus.dir = -1; }
  if (bus.p <= 0) { bus.p = 0; bus.dir = 1; }
}

const INJECT_PROB = 0.000013;
const INJECT_MIN_MS = 25_000;
const INJECT_EXTRA_MS = 20_000;

export function injectAnomaly(bus: Bus): void {
  if (bus.st === 'moving' && Math.random() < INJECT_PROB) {
    bus.st = 'stopped';
    setTimeout(() => {
      if (bus.st === 'stopped') bus.st = 'moving';
    }, INJECT_MIN_MS + Math.random() * INJECT_EXTRA_MS);
  }
}
