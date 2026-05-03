import { memo } from 'react';
import type { Bus, Route } from '../../types';
import type { AnomalyEntry, EtaDelayEntry } from '../../types';
import { calculateETAs, fmtETA } from '../../engine/eta';
import { hasBusAlerts } from '../../stores/busStore';
import { useUIStore } from '../../stores/uiStore';
import { t, ts } from '../../data/i18n';

interface Props {
  bus: Bus;
  route: Route;
  anomalyState: Record<string, AnomalyEntry>;
  etaDelayState: Record<string, EtaDelayEntry>;
  selected: boolean;
  onClick: () => void;
}

export const BusCard = memo(function BusCard({ bus, route, anomalyState, etaDelayState, selected, onClick }: Props) {
  const lang = useUIStore((s) => s.lang);
  const alerted = hasBusAlerts(anomalyState, bus.id);
  const etas = calculateETAs(bus, route, etaDelayState);
  const etaStr = etas[0] ? fmtETA(etas[0].etaSec) : '—';
  const hasDelay = etaDelayState[bus.id]?.active;
  const n = route.stops.length - 1;
  const ns = route.stops[Math.min(Math.ceil(bus.p * n), n)];

  const cls = ['bus-card', selected ? 'selected' : '', alerted ? 'alerted' : ''].filter(Boolean).join(' ');

  return (
    <div className={cls} onClick={onClick}>
      <div className="bus-card-header">
        <div className="route-badge" style={{ background: `${route.color}22`, color: route.color, width: 24, height: 24, fontSize: 11 }}>
          {route.id}
        </div>
        <div className="bus-number">{bus.name}</div>
        {alerted ? (
          <div className="bus-status stopped">⚠️</div>
        ) : (
          <div className={`bus-status ${bus.st}`}>
            {bus.st === 'moving' ? t(lang, 'moving') : t(lang, 'stopped_s')}
          </div>
        )}
      </div>
      <div className="bus-route-name">{t(lang, route.nameKey as Parameters<typeof t>[1])}</div>
      <div className="bus-meta">
        <div className="bus-meta-item">
          <div className="meta-label">{t(lang, 'next_stop').toUpperCase()}</div>
          <div className="meta-value" style={{ fontSize: 10 }}>{ts(lang, ns.k)}</div>
        </div>
        <div className="bus-meta-item">
          <div className="meta-label">ETA</div>
          <div className="meta-value" style={{ color: hasDelay ? '#f04060' : 'var(--accent)' }}>
            {etaStr}
          </div>
        </div>
      </div>
    </div>
  );
});
