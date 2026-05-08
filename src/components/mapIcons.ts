import L from 'leaflet';
import type { Route } from '../types';

export function busIcon(route: Route, pulsing: boolean, alerting: boolean): L.DivIcon {
  const pulse = pulsing
    ? `<div class="bus-ring" style="background:${route.color}40;border:2px solid ${route.color}"></div>`
    : '';
  const aRing = alerting ? '<div class="alert-ring"></div>' : '';
  const aBadge = alerting ? '<div class="alert-badge-dot">!</div>' : '';
  const bg = alerting ? '#f04060' : route.color;
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;width:28px;height:28px;">${pulse}${aRing}
      <div style="position:relative;z-index:1;background:${bg};color:#000;font-weight:800;
        width:28px;height:28px;border-radius:6px;display:flex;align-items:center;
        justify-content:center;box-shadow:0 2px 14px ${bg}99;border:2px solid rgba(255,255,255,.22);font-size:14px">🚌</div>
      ${aBadge}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

export function stopIcon(route: Route, isTerminal: boolean, dark: boolean): L.DivIcon {
  const sz = isTerminal ? 15 : 10;
  const bw = isTerminal ? 3 : 2.5;
  const bg = isTerminal ? route.color : (dark ? '#1e2432' : '#f4f6fc');
  return L.divIcon({
    className: '',
    html: `<div style="width:${sz}px;height:${sz}px;background:${bg};border:${bw}px solid ${route.color};border-radius:50%;box-shadow:0 0 8px ${route.color}88"></div>`,
    iconSize: [15, 15],
    iconAnchor: [7, 7],
  });
}
