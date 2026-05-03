import { useBusStore, getBusAlerts } from '../../stores/busStore';
import { useRouteStore } from '../../stores/routeStore';
import { useUIStore } from '../../stores/uiStore';
import { t } from '../../data/i18n';

export function StatsBar() {
  const buses = useBusStore((s) => s.buses);
  const anomalyState = useBusStore((s) => s.anomalyState);
  const routes = useRouteStore((s) => s.routes);
  const lang = useUIStore((s) => s.lang);

  const totalStops = new Set(routes.flatMap((r) => r.stops.map((s) => s.k))).size;
  const alertCount = buses.reduce((n, b) => n + getBusAlerts(anomalyState, b.id).length, 0);

  return (
    <div className="stats-bar">
      <div className="stat-chip">🚌 {t(lang, 'buses')}: <strong>{buses.length}</strong></div>
      <div className="stat-chip">📍 {t(lang, 'stops')}: <strong>{totalStops}</strong></div>
      <div className="stat-chip">🛣️ {t(lang, 'routes')}: <strong>{routes.length}</strong></div>
      {alertCount > 0 && (
        <div className="stat-chip" style={{ borderColor: '#f04060' }}>
          ⚠️ <strong style={{ color: '#f04060' }}>{alertCount}</strong>
        </div>
      )}
    </div>
  );
}
