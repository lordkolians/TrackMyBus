import { create } from 'zustand';
import type { Route } from '../types';
import { INITIAL_ROUTES } from '../data/routes';

interface RouteStore {
  routes: Route[];
  setRouteGeo: (routeId: number, geo: [number, number][]) => void;
  snapStop: (routeId: number, stopIdx: number, coord: [number, number]) => void;
  toggleVisible: (routeId: number) => void;
}

export const useRouteStore = create<RouteStore>((set) => ({
  routes: INITIAL_ROUTES.map((r) => ({ ...r, stops: r.stops.map((s) => ({ ...s, c: [...s.c] as [number, number] })) })),

  setRouteGeo: (routeId, geo) =>
    set((state) => ({
      routes: state.routes.map((r) => (r.id === routeId ? { ...r, geo } : r)),
    })),

  snapStop: (routeId, stopIdx, coord) =>
    set((state) => ({
      routes: state.routes.map((r) => {
        if (r.id !== routeId) return r;
        const stops = r.stops.map((s, i) => (i === stopIdx ? { ...s, c: coord } : s));
        return { ...r, stops };
      }),
    })),

  toggleVisible: (routeId) =>
    set((state) => ({
      routes: state.routes.map((r) =>
        r.id === routeId ? { ...r, visible: !r.visible } : r,
      ),
    })),
}));
