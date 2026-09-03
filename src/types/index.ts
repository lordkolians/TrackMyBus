export interface Stop {
  k: string;
  c: [number, number];
}

export interface Route {
  id: number;
  color: string;
  nameKey: string;
  descKey: string;
  geo: [number, number][] | null;
  sched: string[];
  stops: Stop[];
  visible: boolean;
}

export type BusStatus = 'moving' | 'stopped';

export interface Bus {
  id: string;
  rid: number;
  name: string;
  p: number;
  sp: number;
  dir: 1 | -1;
  st: BusStatus;
}

export type Lang = 'ru' | 'ro' | 'en' | 'tr' | 'bg';

export type AlertType = 'LONG_STOP' | 'SLOW_TRAFFIC' | 'STALLED';

export interface AnomalyEntry {
  stoppedAt: number | null;
  lastP: number;
  progressAt: number;
  alerts: Set<AlertType>;
}

export interface EtaDelayEntry {
  active: boolean;
  endsAt: number;
  factor: number;
}

export interface EtaResult {
  stopName: string;
  etaSec: number;
  isDelayed: boolean;
}

export type SheetState = 'peek' | 'half' | 'full';
export type PanelTab = 'routes' | 'buses' | 'sched' | 'alerts';

export type InfoTarget =
  | { kind: 'bus'; busId: string; routeId: number }
  | { kind: 'route'; routeId: number }
  | { kind: 'stop'; stopKey: string; routeId: number };
