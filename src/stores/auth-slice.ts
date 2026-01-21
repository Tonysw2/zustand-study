import type { StateCreator } from 'zustand'
import type { Store } from '.'

type AuthState = {
  isAuthenticated: boolean
  user: {
    name: string
    email: string
  } | null
}

type AuthActions = {
  signIn: (data: { name: string; email: string }) => void
  signOut: () => void
}

export type AuthSlice = AuthState & AuthActions

export const authSlice: StateCreator<
  Store,
  [['zustand/persist', unknown]],
  [],
  AuthSlice
> = (set) => ({
  isAuthenticated: false,
  user: null,

  signIn: ({ name, email }) =>
    set({
      isAuthenticated: true,
      user: { name, email },
    }),

  signOut: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
})
