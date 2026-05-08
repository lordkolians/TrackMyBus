import { useBusStore, getBusAlerts } from '../stores/busStore';
import { useRouteStore } from '../stores/routeStore';
import { useUIStore } from '../stores/uiStore';
import { ALERT_DEFS } from '../engine/anomaly';
import { t } from '../data/i18n';
import type { AlertType } from '../types';

export function AlertFeed() {
  const buses = useBusStore((s) => s.buses);
  const anomalyState = useBusStore((s) => s.anomalyState);
  const routes = useRouteStore((s) => s.routes);
  const lang = useUIStore((s) => s.lang);

  const active: Array<{ busName: string; routeColor: string; routeName: string; alertId: AlertType }> = [];
  buses.forEach((bus) => {
    const route = routes.find((r) => r.id === bus.rid);
    if (!route) return;
    getBusAlerts(anomalyState, bus.id).forEach((alertId) => {
      active.push({ busName: bus.name, routeColor: route.color, routeName: t(lang, route.nameKey as Parameters<typeof t>[1]), alertId });
    });
  });

  if (active.length === 0) {
    return <div className="no-alerts">{t(lang, 'no_alerts')}</div>;
  }

  return (
    <>
      {active.map(({ busName, routeColor, routeName, alertId }, i) => (
        <div key={i} className="alert-item" style={{ borderLeftColor: ALERT_DEFS[alertId].color }}>
          <div className="alert-bus" style={{ color: routeColor }}>{busName}</div>
          <div className="alert-msg" style={{ color: ALERT_DEFS[alertId].color }}>{ALERT_DEFS[alertId][lang]}</div>
          <div className="alert-route">{routeName}</div>
        </div>
      ))}
    </>
  );
}
