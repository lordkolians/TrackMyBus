import { useUIStore } from '../../stores/uiStore';
import { InfoPanelContent } from './InfoPanelContent';

export function MobileInfo() {
  const infoTarget = useUIStore((s) => s.infoTarget);
  const closeInfo = useUIStore((s) => s.closeInfo);

  if (!infoTarget) return null;

  return (
    <div className="mob-info visible">
      <button className="close-btn" onClick={closeInfo}>✕</button>
      <InfoPanelContent />
    </div>
  );
}
