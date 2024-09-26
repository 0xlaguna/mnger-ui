import { Session } from "next-auth"
import { createStore } from "zustand/vanilla"

import { User } from "@/types/v0/users"

export type MeState = {
  user?: User
  session: Session | null
}

export type MeActions = {
  setMe: (user: User) => void
  setSession: (session: Session) => void
  setAll: (user: User, session: Session) => void
}

export type MeStore = MeState & MeActions

export const initMeStore = (): MeState => {
  return { user: undefined, session: null }
}

export const defaultInitState: MeState = {
  user: undefined,
  session: null,
}

export const createMeStore = (initState: MeState = defaultInitState) => {
  return createStore<MeStore>()((set) => ({
    ...initState,
    setMe: (user) => set((state) => ({ ...state, user })),
    setSession: (session) => set((state) => ({ ...state, session })),
    setAll: (user, session) => set((_state) => ({ session, user })),
  }))
}
