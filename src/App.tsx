import { useEffect, useRef } from 'react';
import type * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MapView } from './components/Map/MapView';
import { StatsBar } from './components/Stats/StatsBar';
import { MobileStats } from './components/Stats/MobileStats';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { MobileInfo } from './components/InfoPanel/MobileInfo';
import { BottomSheet } from './components/BottomSheet/BottomSheet';
import { BottomNav } from './components/BottomNav/BottomNav';
import { OfflineBanner } from './components/OfflineBanner/OfflineBanner';
import { useUIStore } from './stores/uiStore';
import { useRouteStore } from './stores/routeStore';
import { busPosition } from './engine/geo';
import type { Bus, Route, PanelTab } from './types';

// Placed inside MapContainer so it can access useMap()
function MapController({ mapRef }: { mapRef: React.MutableRefObject<L.Map | null> }) {
  const map = useMap();
  useEffect(() => { mapRef.current = map; }, [map, mapRef]);
  return null;
}

export function App() {
  const mapRef = useRef<L.Map | null>(null);
  const { openInfo, closeInfo, setSheetState, setMobileTab } = useUIStore();
  const routes = useRouteStore((s) => s.routes);

  function handleRouteClick(route: Route) {
    openInfo({ kind: 'route', routeId: route.id });
    mapRef.current?.fitBounds(
      route.stops.map((s) => s.c) as [number, number][],
      { padding: [60, 60] },
    );
  }

  function handleBusClick(bus: Bus) {
    const route = routes.find((r) => r.id === bus.rid);
    if (!route) return;
    openInfo({ kind: 'bus', busId: bus.id, routeId: route.id });
    mapRef.current?.setView(busPosition(route, bus.p), 16);
  }

  function handleNavMap() {
    setSheetState('peek');
    closeInfo();
  }

  function handleNavTab(tab: PanelTab) {
    setMobileTab(tab);
    setSheetState('half');
  }

  // PWA manifest
  useEffect(() => {
    const mf = {
      name: 'TrackMyBus', short_name: 'TrackMyBus', start_url: '.', display: 'standalone',
      background_color: '#0d0f14', theme_color: '#f0c040', orientation: 'any',
      icons: [{
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23f0c040'/%3E%3Ctext y='.9em' font-size='80' x='10'%3E%F0%9F%9A%8C%3C/text%3E%3C/svg%3E",
        sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable',
      }],
    };
    const el = document.getElementById('pwaManifest') as HTMLLinkElement | null;
    if (el) el.href = URL.createObjectURL(new Blob([JSON.stringify(mf)], { type: 'application/json' }));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden' }}>
      <OfflineBanner />
      <Header />
      <div className="main">
        <Sidebar onRouteClick={handleRouteClick} onBusClick={handleBusClick} />
        <div style={{ position: 'relative', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <MapView mapController={<MapController mapRef={mapRef} />} />
          <StatsBar />
          <InfoPanel />
        </div>
      </div>
      <MobileStats />
      <MobileInfo />
      <BottomSheet onRouteClick={handleRouteClick} onBusClick={handleBusClick} />
      <BottomNav onNavMap={handleNavMap} onNavTab={handleNavTab} />
    </div>
  );
}
