import { useRouteStore } from '../../stores/routeStore';
import { useUIStore } from '../../stores/uiStore';
import { t } from '../../data/i18n';

function nextDeparture(sched: string[]): string {
  const nm = new Date().getHours() * 60 + new Date().getMinutes();
  return sched.find((s) => {
    const [h, m] = s.split(':').map(Number);
    return h * 60 + m > nm;
  }) ?? sched[0];
}

function minsUntil(s: string): number {
  const nm = new Date().getHours() * 60 + new Date().getMinutes();
  const [h, m] = s.split(':').map(Number);
  const d = h * 60 + m - nm;
  return d < 0 ? d + 1440 : d;
}

export function Schedule() {
  const routes = useRouteStore((s) => s.routes);
  const lang = useUIStore((s) => s.lang);

  return (
    <div className="schedule-scroll">
      {routes.map((route) => {
        const nxt = nextDeparture(route.sched);
        return (
          <div key={route.id} className="sched-route-block">
            <div className="sched-route-header">
              <div className="route-badge" style={{ background: `${route.color}22`, color: route.color, width: 26, height: 26, fontSize: 12 }}>
                {route.id}
              </div>
              <div className="sched-route-title">{t(lang, route.nameKey as Parameters<typeof t>[1])}</div>
            </div>
            <div className="sched-grid">
              {route.sched.map((time) => {
                const isNxt = time === nxt;
                const mins = minsUntil(time);
                return (
                  <div key={time} className={`sched-item${isNxt ? ' next' : ''}`}>
                    <div>
                      <div className="sched-time" style={{ color: isNxt ? route.color : 'var(--text)' }}>{time}</div>
                      <div className="sched-label">{isNxt ? `~${mins} мин` : ''}</div>
                    </div>
                    {isNxt && <div className="sched-next-badge">{t(lang, 'next')}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
