import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light', // Baseline server-friendly fallback
      
      setTheme: (mode) => {
        set({ mode });
        if (typeof window !== 'undefined') {
          document.documentElement.setAttribute('data-bs-theme', mode);
        }
      },
      
      toggleTheme: () =>
        set((state) => {
          const nextMode = state.mode === 'light' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-bs-theme', nextMode);
          return { mode: nextMode };
        }),
    }),
    {
      name: 'app-theme-storage', // Key name in localStorage
      // Ensure the client state syncs back to the DOM right after hydration completes
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.setAttribute('data-bs-theme', state.mode);
        }
      },
    }
  )
);