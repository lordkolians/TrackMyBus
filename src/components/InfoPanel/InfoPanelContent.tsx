import { useBusStore, getBusAlerts } from '../../stores/busStore';
import { useRouteStore } from '../../stores/routeStore';
import { useUIStore } from '../../stores/uiStore';
import { calculateETAs, fmtETA } from '../../engine/eta';
import { ALERT_DEFS } from '../../engine/anomaly';
import { t, ts } from '../../data/i18n';

function nextDep(sched: string[]): string {
  const nm = new Date().getHours() * 60 + new Date().getMinutes();
  return sched.find((s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m > nm; }) ?? sched[0];
}
function minsUntil(s: string): number {
  const nm = new Date().getHours() * 60 + new Date().getMinutes();
  const [h, m] = s.split(':').map(Number);
  const d = h * 60 + m - nm;
  return d < 0 ? d + 1440 : d;
}

export function InfoPanelContent() {
  const lang = useUIStore((s) => s.lang);
  const infoTarget = useUIStore((s) => s.infoTarget);
  const buses = useBusStore((s) => s.buses);
  const anomalyState = useBusStore((s) => s.anomalyState);
  const etaDelayState = useBusStore((s) => s.etaDelayState);
  const routes = useRouteStore((s) => s.routes);

  if (!infoTarget) return null;

  if (infoTarget.kind === 'route') {
    const route = routes.find((r) => r.id === infoTarget.routeId);
    if (!route) return null;
    const routeBuses = buses.filter((b) => b.rid === route.id);
    return (
      <>
        <div className="info-panel-title">{t(lang, route.nameKey as Parameters<typeof t>[1])}</div>
        <div className="info-panel-sub"><span style={{ color: route.color }}>●</span> {t(lang, route.descKey as Parameters<typeof t>[1])}</div>
        {[
          { l: t(lang, 'total_stops'), v: route.stops.length },
          { l: t(lang, 'total_buses'), v: routeBuses.length },
          { l: t(lang, 'in_motion'), v: routeBuses.filter((b) => b.st === 'moving').length, c: 'var(--accent2)' },
          { l: t(lang, 'at_stop'), v: routeBuses.filter((b) => b.st === 'stopped').length, c: 'var(--accent3)' },
        ].map(({ l, v, c }) => (
          <div key={l} className="info-row">
            <span className="info-row-label">{l}</span>
            <span className="info-row-val" style={c ? { color: c } : {}}>{v}</span>
          </div>
        ))}
      </>
    );
  }

  if (infoTarget.kind === 'stop') {
    const route = routes.find((r) => r.id === infoTarget.routeId);
    if (!route) return null;
    const nxt = nextDep(route.sched);
    return (
      <>
        <div className="info-panel-title">{ts(lang, infoTarget.stopKey)}</div>
        <div className="info-panel-sub">{t(lang, 'stop_lbl')} · <span style={{ color: route.color }}>{t(lang, route.nameKey as Parameters<typeof t>[1])}</span></div>
        <div className="info-row">
          <span className="info-row-label">{t(lang, 'next_bus')}</span>
          <span className="info-row-val" style={{ color: 'var(--accent)' }}>~{minsUntil(nxt)} мин · {nxt}</span>
        </div>
        <div className="info-row">
          <span className="info-row-label">{t(lang, 'route_lbl')}</span>
          <span className="info-row-val">{t(lang, route.nameKey as Parameters<typeof t>[1])}</span>
        </div>
      </>
    );
  }

  if (infoTarget.kind === 'bus') {
    const bus = buses.find((b) => b.id === infoTarget.busId);
    const route = routes.find((r) => r.id === infoTarget.routeId);
    if (!bus || !route) return null;
    const n = route.stops.length - 1;
    const ns = route.stops[Math.min(Math.ceil(bus.p * n), n)];
    const alerts = getBusAlerts(anomalyState, bus.id);
    const etas = calculateETAs(bus, route, etaDelayState);
    const delayed = etaDelayState[bus.id]?.active;

    return (
      <>
        <div className="info-panel-title">{t(lang, 'bus_lbl')} {bus.name}</div>
        <div className="info-panel-sub"><span style={{ color: route.color }}>●</span> {t(lang, route.nameKey as Parameters<typeof t>[1])}</div>
        <div className="info-row">
          <span className="info-row-label">{t(lang, 'status')}</span>
          <span className="info-row-val" style={{ color: bus.st === 'moving' ? 'var(--accent2)' : 'var(--accent3)' }}>
            {bus.st === 'moving' ? t(lang, 'moving') : t(lang, 'stopped_s')}
          </span>
        </div>
        <div className="info-row">
          <span className="info-row-label">{t(lang, 'next_stop')}</span>
          <span className="info-row-val">{ts(lang, ns.k)}</span>
        </div>
        {alerts.length > 0 && (
          <div style={{ marginTop: 8, paddingTop: 6, borderTop: '1px solid var(--border)' }}>
            {alerts.map((a) => (
              <div key={a} style={{ color: ALERT_DEFS[a].color, fontSize: 12, fontWeight: 700, padding: '2px 0' }}>
                {ALERT_DEFS[a][lang]}
              </div>
            ))}
          </div>
        )}
        <div className="eta-section">
          <div className="eta-title">{t(lang, 'eta_title')}</div>
          <div className="eta-status" style={{
            background: delayed ? 'rgba(240,64,96,.15)' : 'rgba(96,224,144,.15)',
            color: delayed ? '#f04060' : '#60e090',
          }}>
            {delayed ? t(lang, 'eta_delayed') : t(lang, 'eta_ontime')}
          </div>
          {etas.slice(0, 5).map((e) => (
            <div key={e.stopName} className={`eta-row${e.isDelayed ? ' delayed' : ''}`}>
              <span className="eta-stop">{ts(lang, e.stopName)}</span>
              <span className="eta-time">{fmtETA(e.etaSec)}</span>
            </div>
          ))}
          <div className="eta-conf" style={{
            background: delayed ? 'rgba(240,64,96,.12)' : 'rgba(96,224,144,.12)',
            color: delayed ? '#f04060' : '#60e090',
          }}>
            {delayed ? t(lang, 'eta_conf_lo') : t(lang, 'eta_conf_hi')}
          </div>
        </div>
      </>
    );
  }

  return null;
}
