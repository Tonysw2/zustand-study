import type { StateCreator } from 'zustand'
import type { Store } from '.'

export type Theme = 'dark' | 'light' | 'system'

type ThemeState = {
  theme: Theme
}

type ThemeActions = {
  setTheme: (theme: Theme) => void
}

export type ThemeSlice = ThemeState & ThemeActions

export const themeSlice: StateCreator<
  Store,
  [['zustand/persist', unknown]],
  [],
  ThemeSlice
> = (set) => ({
  theme: 'system',
  setTheme: (theme) => set({ theme }),
})
