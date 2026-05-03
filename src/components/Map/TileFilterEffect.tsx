import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useUIStore } from '../../stores/uiStore';

export function TileFilterEffect() {
  const map = useMap();
  const dark = useUIStore((s) => s.dark);

  useEffect(() => {
    requestAnimationFrame(() => {
      const pane = map.getPanes().tilePane;
      if (pane) {
        pane.style.filter = dark
          ? 'invert(1) hue-rotate(180deg) brightness(0.82) saturate(0.75)'
          : 'none';
      }
    });
  }, [dark, map]);

  return null;
}
