import { create } from 'zustand';
import type { Bus, AnomalyEntry, EtaDelayEntry, AlertType } from '../types';
import { INITIAL_BUSES } from '../data/buses';
import { restoreState } from '../services/persistence';

function buildInitialBuses(): Bus[] {
  const buses: Bus[] = INITIAL_BUSES.map((b) => ({ ...b }));
  restoreState(buses);
  return buses;
}

interface BusStore {
  buses: Bus[];
  anomalyState: Record<string, AnomalyEntry>;
  etaDelayState: Record<string, EtaDelayEntry>;
  syncBuses: (buses: Bus[]) => void;
  syncAnomalyState: (state: Record<string, AnomalyEntry>) => void;
  syncEtaDelayState: (state: Record<string, EtaDelayEntry>) => void;
}

export const useBusStore = create<BusStore>((set) => ({
  buses: buildInitialBuses(),
  anomalyState: {},
  etaDelayState: {},
  syncBuses: (buses) => set({ buses: buses.map((b) => ({ ...b })) }),
  syncAnomalyState: (state) =>
    set({
      anomalyState: Object.fromEntries(
        Object.entries(state).map(([k, v]) => [k, { ...v, alerts: new Set(v.alerts) }]),
      ),
    }),
  syncEtaDelayState: (state) =>
    set({ etaDelayState: Object.fromEntries(Object.entries(state).map(([k, v]) => [k, { ...v }])) }),
}));

export function getBusAlerts(anomalyState: Record<string, AnomalyEntry>, busId: string): AlertType[] {
  return Array.from(anomalyState[busId]?.alerts ?? []);
}

export function hasBusAlerts(anomalyState: Record<string, AnomalyEntry>, busId: string): boolean {
  return (anomalyState[busId]?.alerts?.size ?? 0) > 0;
}
