import { useUIStore } from '../../stores/uiStore';
import { useRouteStore } from '../../stores/routeStore';
import { t } from '../../data/i18n';
import { RoutesList } from './RoutesList';
import { BusesList } from './BusesList';
import { Schedule } from './Schedule';
import { AlertFeed } from './AlertFeed';
import type { Bus, Route, PanelTab } from '../../types';

interface Props {
  onRouteClick: (route: Route) => void;
  onBusClick: (bus: Bus) => void;
}

const TABS: PanelTab[] = ['routes', 'buses', 'sched', 'alerts'];
const TAB_KEYS = { routes: 'routes', buses: 'buses', sched: 'schedule', alerts: 'alerts' } as const;

export function Sidebar({ onRouteClick, onBusClick }: Props) {
  const lang = useUIStore((s) => s.lang);
  const activeTab = useUIStore((s) => s.activeTab);
  const setActiveTab = useUIStore((s) => s.setActiveTab);
  const routes = useRouteStore((s) => s.routes);
  const totalStops = new Set(routes.flatMap((r) => r.stops.map((s) => s.k))).size;

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`sidebar-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {t(lang, TAB_KEYS[tab] as Parameters<typeof t>[1])}
          </button>
        ))}
      </div>

      <div className={`sidebar-panel${activeTab === 'routes' ? ' active' : ''}`}>
        <RoutesList onRouteClick={onRouteClick} />
        <div className="sidebar-section" style={{ borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
          <div className="section-label">Статистика</div>
          <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>
            {routes.length} {t(lang, 'routes').toLowerCase()} · {totalStops} {t(lang, 'stops').toLowerCase()}
          </div>
        </div>
      </div>

      <div className={`sidebar-panel${activeTab === 'buses' ? ' active' : ''}`}>
        <div className="section-label" style={{ padding: '13px 16px 0' }}>{t(lang, 'buses_online')}</div>
        <BusesList onBusClick={onBusClick} />
      </div>

      <div className={`sidebar-panel${activeTab === 'sched' ? ' active' : ''}`}>
        <div className="section-label" style={{ padding: '13px 16px 0' }}>{t(lang, 'schedule')}</div>
        <Schedule />
      </div>

      <div className={`sidebar-panel${activeTab === 'alerts' ? ' active' : ''}`}>
        <div className="section-label" style={{ padding: '13px 16px 0' }}>{t(lang, 'alerts')}</div>
        <div className="alerts-scroll">
          <AlertFeed />
        </div>
      </div>
    </div>
  );
}
