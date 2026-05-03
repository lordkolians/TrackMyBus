import { useUIStore } from '../../stores/uiStore';
import { t } from '../../data/i18n';
import type { Lang } from '../../types';

export function Header() {
  const { lang, setLang, toggleDark, dark } = useUIStore();

  return (
    <header>
      <div className="logo">
        <div className="logo-icon">🚌</div>
        <div className="logo-text">TrackMy<span>Bus</span></div>
      </div>
      <div className="header-right">
        <div className="live-badge">
          <div className="live-dot" />
          <span>{t(lang, 'sim')}</span>
        </div>
        <select
          className="lang-select"
          value={lang}
          onChange={(e) => setLang(e.target.value as Lang)}
        >
          <option value="ru">RU</option>
          <option value="ro">RO</option>
          <option value="en">EN</option>
        </select>
        <button className="hdr-btn" onClick={toggleDark} title="Тема">
          {dark ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
