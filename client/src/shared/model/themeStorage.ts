import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  applyTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',

      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light';
        get().applyTheme(newTheme);
      },

      applyTheme: (newTheme) => {
        const body = document.body;
        if (newTheme === 'dark') {
          body.classList.add('dark');
        } else {
          body.classList.remove('dark');
        }
        set({ theme: newTheme });
      }
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => localStorage),

      onRehydrateStorage: () => (state) => {
        if (state?.theme) {
          state.applyTheme(state.theme);
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const initialTheme = prefersDark ? 'dark' : 'light';
          state?.applyTheme(initialTheme);
        }
      },
    }
  )
);