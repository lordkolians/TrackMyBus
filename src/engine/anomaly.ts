import type { Bus, AlertType, AnomalyEntry, EtaDelayEntry } from '../types';

const LONG_STOP_SEC = 90;
const STALL_SEC = 120;
const PROGRESS_THRESHOLD = 0.000005;

export const ALERT_DEFS: Record<AlertType, { ru: string; ro: string; en: string; color: string }> = {
  LONG_STOP:    { ru: 'Длительная остановка', ro: 'Oprire neobișnuită',   en: 'Unusual stop',   color: '#f0c040' },
  SLOW_TRAFFIC: { ru: 'Пробка',               ro: 'Trafic intens',        en: 'Heavy traffic',  color: '#f09040' },
  STALLED:      { ru: 'Возможная задержка',   ro: 'Posibilă întârziere',  en: 'Possible delay', color: '#f04060' },
};

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
