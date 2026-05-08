import { useRef } from 'react';
import { useUIStore } from '../stores/uiStore';
import { t } from '../data/i18n';
import { RoutesList } from './RoutesList';
import { BusesList } from './BusesList';
import { Schedule } from './Schedule';
import { AlertFeed } from './AlertFeed';
import type { Bus, Route, PanelTab } from '../types';

interface Props {
  onRouteClick: (route: Route) => void;
  onBusClick: (bus: Bus) => void;
}

export function BottomSheet({ onRouteClick, onBusClick }: Props) {
  const lang = useUIStore((s) => s.lang);
  const mobileTab = useUIStore((s) => s.mobileTab);
  const sheetState = useUIStore((s) => s.sheetState);
  const setMobileTab = useUIStore((s) => s.setMobileTab);
  const setSheetState = useUIStore((s) => s.setSheetState);

  const touchRef = useRef({ startY: 0, startTime: 0, dragging: false, inContent: false });
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  function handleTouchStart(e: React.TouchEvent) {
    const target = e.target as Node;
    const inContent = !!(contentRef.current?.contains(target));
    touchRef.current = { startY: e.touches[0].clientY, startTime: Date.now(), dragging: !inContent, inContent };
    if (sheetRef.current) sheetRef.current.style.transition = 'none';
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!touchRef.current.dragging || touchRef.current.inContent) return;
    if (Math.abs(touchRef.current.startY - e.touches[0].clientY) > 8) e.preventDefault();
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (!touchRef.current.dragging) return;
    if (sheetRef.current) sheetRef.current.style.transition = '';
    const dy = touchRef.current.startY - e.changedTouches[0].clientY;
    const vel = dy / Math.max(1, Date.now() - touchRef.current.startTime);
    if (vel > 0.3 || dy > 50) setSheetState(sheetState === 'peek' ? 'half' : 'full');
    else if (vel < -0.3 || dy < -50) setSheetState(sheetState === 'full' ? 'half' : 'peek');
    touchRef.current.dragging = false;
  }

  const tabs: Array<{ id: PanelTab; label: Parameters<typeof t>[1] }> = [
    { id: 'routes', label: 'routes' },
    { id: 'buses', label: 'buses' },
    { id: 'sched', label: 'schedule' },
    { id: 'alerts', label: 'alerts' },
  ];

  return (
    <div
      ref={sheetRef}
      className={`bottom-sheet ${sheetState}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="sheet-handle-row">
        <div className="sheet-handle" />
      </div>
      <div className="sheet-tabs">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            className={`sheet-tab${mobileTab === id ? ' active' : ''}`}
            onClick={() => {
              setMobileTab(id);
              if (sheetState === 'peek') setSheetState('half');
            }}
          >
            {t(lang, label)}
          </button>
        ))}
      </div>
      <div className="sheet-content" ref={contentRef}>
        {mobileTab === 'routes' && <RoutesList onRouteClick={onRouteClick} />}
        {mobileTab === 'buses' && <BusesList onBusClick={onBusClick} />}
        {mobileTab === 'sched' && <Schedule />}
        {mobileTab === 'alerts' && <AlertFeed />}
      </div>
    </div>
  );
}
