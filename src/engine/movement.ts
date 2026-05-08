import type { Bus } from '../types';

/**
 * Advances a bus by one animation frame along its route.
 * Direction reverses at both endpoints, simulating an out-and-back run.
 */
export function advanceBus(bus: Bus): void {
  if (bus.st === 'stopped') return;
  bus.p += bus.sp * bus.dir;
  if (bus.p >= 1) { bus.p = 1; bus.dir = -1; }
  if (bus.p <= 0) { bus.p = 0; bus.dir = 1; }
}

/** Probability per frame that a moving bus spontaneously stops (simulates real-world holds). */
const INJECT_PROB = 0.000013;
const INJECT_MIN_MS = 25_000;
const INJECT_EXTRA_MS = 20_000;

/**
 * Randomly halts a bus for 25–45 seconds to simulate unexpected stops.
 * This feeds the anomaly detector with realistic edge-case data.
 */
export function injectAnomaly(bus: Bus): void {
  if (bus.st === 'moving' && Math.random() < INJECT_PROB) {
    bus.st = 'stopped';
    setTimeout(() => {
      if (bus.st === 'stopped') bus.st = 'moving';
    }, INJECT_MIN_MS + Math.random() * INJECT_EXTRA_MS);
  }
}
