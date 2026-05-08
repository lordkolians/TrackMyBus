import { create } from 'zustand';
import type { Lang, SheetState, PanelTab, InfoTarget } from '../types';

interface UIStore {
  lang: Lang;
  dark: boolean;
  activeTab: PanelTab;
  mobileTab: PanelTab;
  sheetState: SheetState;
  infoTarget: InfoTarget | null;
  setLang: (lang: Lang) => void;
  toggleDark: () => void;
  setActiveTab: (tab: PanelTab) => void;
  setMobileTab: (tab: PanelTab) => void;
  setSheetState: (state: SheetState) => void;
  openInfo: (target: InfoTarget) => void;
  closeInfo: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  lang: 'ru',
  dark: true,
  activeTab: 'routes',
  mobileTab: 'routes',
  sheetState: 'peek',
  infoTarget: null,

  setLang: (lang) => {
    set({ lang });
    document.documentElement.lang = lang;
  },

  toggleDark: () =>
    set((state) => {
      const dark = !state.dark;
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      return { dark };
    }),

  setActiveTab: (activeTab) => set({ activeTab }),
  setMobileTab: (mobileTab) => set({ mobileTab }),
  setSheetState: (sheetState) => set({ sheetState }),
  openInfo: (infoTarget) => set({ infoTarget }),
  closeInfo: () => set({ infoTarget: null }),
}));
