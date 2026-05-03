import { useRouteStore } from '../../stores/routeStore';
import { useUIStore } from '../../stores/uiStore';
import { t } from '../../data/i18n';
import type { Route } from '../../types';

interface Props {
  onRouteClick: (route: Route) => void;
}

export function RoutesList({ onRouteClick }: Props) {
  const routes = useRouteStore((s) => s.routes);
  const toggleVisible = useRouteStore((s) => s.toggleVisible);
  const lang = useUIStore((s) => s.lang);
  const infoTarget = useUIStore((s) => s.infoTarget);

  return (
    <div className="sidebar-section">
      <div className="section-label">{t(lang, 'routes')}</div>
      <div className="routes-list">
        {routes.map((route) => {
          const active = infoTarget?.kind === 'route' && infoTarget.routeId === route.id;
          return (
            <div
              key={route.id}
              className={`route-item${active ? ' active' : ''}`}
              onClick={() => onRouteClick(route)}
            >
              <div className="route-badge" style={{ background: `${route.color}22`, color: route.color }}>
                {route.id}
              </div>
              <div className="route-info">
                <div className="route-name">{t(lang, route.nameKey as Parameters<typeof t>[1])}</div>
                <div className="route-desc">{t(lang, route.descKey as Parameters<typeof t>[1])}</div>
              </div>
              <div
                className={`route-toggle${route.visible ? ' on' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleVisible(route.id); }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
