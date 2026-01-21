import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type AuthSlice, authSlice } from './auth-slice'
import { type ThemeSlice, themeSlice } from './theme-slice'

export type Store = AuthSlice & ThemeSlice

export const useStore = create<Store>()(
  persist(
    (...params) => ({
      ...authSlice(...params),
      ...themeSlice(...params),
    }),
    {
      name: '@zustand-study:store',
    },
  ),
)
