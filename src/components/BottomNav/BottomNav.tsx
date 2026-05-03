import { useBusStore, getBusAlerts } from '../../stores/busStore';
import { useUIStore } from '../../stores/uiStore';
import { t } from '../../data/i18n';
import type { PanelTab } from '../../types';

interface Props {
  onNavMap: () => void;
  onNavTab: (tab: PanelTab) => void;
}

export function BottomNav({ onNavMap, onNavTab }: Props) {
  const lang = useUIStore((s) => s.lang);
  const mobileTab = useUIStore((s) => s.mobileTab);
  const sheetState = useUIStore((s) => s.sheetState);
  const buses = useBusStore((s) => s.buses);
  const anomalyState = useBusStore((s) => s.anomalyState);

  const hasAlerts = buses.some((b) => getBusAlerts(anomalyState, b.id).length > 0);
  const mapActive = sheetState === 'peek';

  return (
    <nav className="bottom-nav">
      <button className={`nav-btn${mapActive ? ' active' : ''}`} onClick={onNavMap}>
        <div className="nav-btn-icon">🗺️</div>
        <div className="nav-btn-label">{t(lang, 'map')}</div>
      </button>
      {(['routes', 'buses', 'sched', 'alerts'] as PanelTab[]).map((tab) => {
        const icons: Record<PanelTab, string> = { routes: '🛣️', buses: '🚌', sched: '🕐', alerts: '⚠️' };
        const keys: Record<PanelTab, Parameters<typeof t>[1]> = { routes: 'routes', buses: 'buses', sched: 'schedule', alerts: 'alerts' };
        const active = !mapActive && mobileTab === tab;
        return (
          <button key={tab} className={`nav-btn${active ? ' active' : ''}`} onClick={() => onNavTab(tab)}>
            <div className="nav-btn-icon">{icons[tab]}</div>
            <div className="nav-btn-label">{t(lang, keys[tab])}</div>
            {tab === 'alerts' && hasAlerts && <div className="nav-alert-dot" style={{ display: 'block' }} />}
          </button>
        );
      })}
    </nav>
  );
}
