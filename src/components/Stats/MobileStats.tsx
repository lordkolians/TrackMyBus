import { useBusStore } from '../../stores/busStore';
import { useRouteStore } from '../../stores/routeStore';

export function MobileStats() {
  const buses = useBusStore((s) => s.buses);
  const routes = useRouteStore((s) => s.routes);
  const totalStops = new Set(routes.flatMap((r) => r.stops.map((s) => s.k))).size;

  return (
    <div className="mob-stats">
      <div className="mob-stat">🚌 <strong>{buses.length}</strong></div>
      <div className="mob-stat">📍 <strong>{totalStops}</strong></div>
      <div className="mob-stat">🛣️ <strong>{routes.length}</strong></div>
    </div>
  );
}
