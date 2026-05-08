import type { Bus } from '../types';

const KEY = 'tmb_v4';
const MAX_AGE_SEC = 600;

interface Snapshot {
  ts: number;
  buses: Array<{ id: string; p: number; dir: 1 | -1; st: Bus['st'] }>;
}

export function saveState(buses: Bus[]): void {
  try {
    const snap: Snapshot = {
      ts: Date.now(),
      buses: buses.map(({ id, p, dir, st }) => ({ id, p, dir, st })),
    };
    localStorage.setItem(KEY, JSON.stringify(snap));
  } catch {
    // quota exceeded or private browsing — ignore
  }
}

export function restoreState(buses: Bus[]): void {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return;
    const snap: Snapshot = JSON.parse(raw);
    const ageSec = (Date.now() - snap.ts) / 1000;
    if (ageSec > MAX_AGE_SEC) return;

    snap.buses.forEach((saved) => {
      const bus = buses.find((b) => b.id === saved.id);
      if (!bus) return;
      const extraP = Math.abs(ageSec * bus.sp * 60 * (saved.dir ?? 1));
      bus.p = Math.min(1, Math.max(0, saved.p + extraP));
      bus.dir = saved.dir ?? 1;
      bus.st = 'moving';
    });
  } catch {
    // corrupt storage — ignore
  }
}
