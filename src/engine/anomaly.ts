import type { Bus, AlertType, AnomalyEntry, EtaDelayEntry } from '../types';

/** A stopped bus raises LONG_STOP after this many seconds without moving. */
const LONG_STOP_SEC = 90;
/** A moving bus with no measurable progress raises STALLED after this many seconds. */
const STALL_SEC = 120;
/** Minimum change in `p` per check cycle to count as forward progress. */
const PROGRESS_THRESHOLD = 0.000005;

/** Display labels and marker colours for each alert type, in all three UI languages. */
export const ALERT_DEFS: Record<
  AlertType,
  {
    ru: string;
    ro: string;
    en: string;
    tr: string;
    bg: string;
    color: string;
  }
> = {
  LONG_STOP: {
    ru: 'Длительная остановка',
    ro: 'Oprire neobișnuită',
    en: 'Unusual stop',
    tr: 'Olağandışı duraklama',
    bg: 'Необичайно спиране',
    color: '#f0c040',
  },

  SLOW_TRAFFIC: {
    ru: 'Пробка',
    ro: 'Trafic intens',
    en: 'Heavy traffic',
    tr: 'Yoğun trafik',
    bg: 'Натоварен трафик',
    color: '#f09040',
  },

  STALLED: {
    ru: 'Возможная задержка',
    ro: 'Posibilă întârziere',
    en: 'Possible delay',
    tr: 'Olası gecikme',
    bg: 'Възможно закъснение',
    color: '#f04060',
  },
};

/**
 * Evaluates the current state of a bus and updates its active alert set.
 * Three independent conditions are checked on every call:
 *   - LONG_STOP  — bus has been in 'stopped' state longer than LONG_STOP_SEC
 *   - SLOW_TRAFFIC — an ETA delay event is active while the bus is still moving
 *   - STALLED    — bus is nominally 'moving' but has made no measurable progress
 */
export function checkAnomalies(
  bus: Bus,
  anomalyState: Record<string, AnomalyEntry>,
  etaDelayState: Record<string, EtaDelayEntry>,
): void {
  if (!anomalyState[bus.id]) {
    anomalyState[bus.id] = { stoppedAt: null, lastP: bus.p, progressAt: Date.now(), alerts: new Set() };
  }
  const st = anomalyState[bus.id];
  const now = Date.now();
  const alerts = new Set<AlertType>();

  if (bus.st === 'stopped') {
    if (!st.stoppedAt) st.stoppedAt = now;
    if ((now - st.stoppedAt) / 1000 > LONG_STOP_SEC) alerts.add('LONG_STOP');
  } else {
    st.stoppedAt = null;
  }

  if (etaDelayState[bus.id]?.active && bus.st === 'moving') alerts.add('SLOW_TRAFFIC');

  if (Math.abs(bus.p - st.lastP) > PROGRESS_THRESHOLD) {
    st.lastP = bus.p;
    st.progressAt = now;
  } else if ((now - st.progressAt) / 1000 > STALL_SEC && bus.st !== 'stopped') {
    alerts.add('STALLED');
  }

  st.alerts = alerts;
}
