import { useEffect, useRef } from 'react';
import type * as L from 'leaflet';
import type { Bus, AnomalyEntry, EtaDelayEntry, Route } from '../types';
import { advanceBus, injectAnomaly } from '../engine/movement';
import { tickEtaDelay } from '../engine/eta';
import { checkAnomalies } from '../engine/anomaly';
import { busPosition, atStop } from '../engine/geo';
import { busIcon } from '../components/mapIcons';
import { useBusStore } from '../stores/busStore';
import { useRouteStore } from '../stores/routeStore';
import { saveState } from '../services/persistence';

const SYNC_INTERVAL_MS = 200;
const SAVE_INTERVAL_MS = 10_000;
const ALERT_INTERVAL_MS = 2_000;

export function useSimulation(
  markerRefs: React.MutableRefObject<Record<string, L.Marker>>,
) {
  const rafRef = useRef<number>(0);
  const busesRef = useRef<Bus[]>([]);
  const anomalyRef = useRef<Record<string, AnomalyEntry>>({});
  const etaDelayRef = useRef<Record<string, EtaDelayEntry>>({});
  const lastSyncRef = useRef(0);
  const lastSaveRef = useRef(0);
  const lastAlertRef = useRef(0);

  const { buses: initialBuses, syncBuses, syncAnomalyState, syncEtaDelayState } = useBusStore.getState();
  const routesRef = useRef<Route[]>([]);

  useEffect(() => {
    busesRef.current = initialBuses.map((b) => ({ ...b }));
  }, [initialBuses]);

  useEffect(() => {
    return useRouteStore.subscribe((state) => {
      routesRef.current = state.routes;
    });
  }, []);

  useEffect(() => {
    routesRef.current = useRouteStore.getState().routes;

    function tick() {
      const now = Date.now();

      for (const bus of busesRef.current) {
        advanceBus(bus);
        tickEtaDelay(bus.id, etaDelayRef.current);
        injectAnomaly(bus);
        checkAnomalies(bus, anomalyRef.current, etaDelayRef.current);

        const route = routesRef.current.find((r) => r.id === bus.rid);
        if (!route) continue;

        const marker = markerRefs.current[bus.id];
        if (marker) {
          marker.setLatLng(busPosition(route, bus.p));
          const alerting = (anomalyRef.current[bus.id]?.alerts?.size ?? 0) > 0;
          marker.setIcon(busIcon(route, atStop(route, bus.p) || bus.st === 'stopped', alerting));
        }
      }

      if (now - lastSyncRef.current > SYNC_INTERVAL_MS) {
        syncBuses(busesRef.current);
        lastSyncRef.current = now;
      }
      if (now - lastAlertRef.current > ALERT_INTERVAL_MS) {
        syncAnomalyState(anomalyRef.current);
        syncEtaDelayState(etaDelayRef.current);
        lastAlertRef.current = now;
      }
      if (now - lastSaveRef.current > SAVE_INTERVAL_MS) {
        saveState(busesRef.current);
        lastSaveRef.current = now;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
