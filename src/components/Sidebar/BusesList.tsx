import { useBusStore } from '../../stores/busStore';
import { useRouteStore } from '../../stores/routeStore';
import { useUIStore } from '../../stores/uiStore';
import { BusCard } from '../BusCard/BusCard';
import type { Bus } from '../../types';

interface Props {
  onBusClick: (bus: Bus) => void;
}

export function BusesList({ onBusClick }: Props) {
  const buses = useBusStore((s) => s.buses);
  const anomalyState = useBusStore((s) => s.anomalyState);
  const etaDelayState = useBusStore((s) => s.etaDelayState);
  const routes = useRouteStore((s) => s.routes);
  const infoTarget = useUIStore((s) => s.infoTarget);

  return (
    <div className="buses-scroll">
      {buses.map((bus) => {
        const route = routes.find((r) => r.id === bus.rid);
        if (!route) return null;
        const selected = infoTarget?.kind === 'bus' && infoTarget.busId === bus.id;
        return (
          <BusCard
            key={bus.id}
            bus={bus}
            route={route}
            anomalyState={anomalyState}
            etaDelayState={etaDelayState}
            selected={selected}
            onClick={() => onBusClick(bus)}
          />
        );
      })}
    </div>
  );
}
