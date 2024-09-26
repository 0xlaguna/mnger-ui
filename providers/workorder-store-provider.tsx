"use client"

import { createContext, useContext, useRef, type ReactNode } from "react"
import {
  createWorkOrderStore,
  initWorkOrderStore,
  type WorkOrderStore,
} from "@/stores/workorder-store"
import { useStore } from "zustand"

export type WorkOrderStoreApi = ReturnType<typeof createWorkOrderStore>

export const WorkOrderStoreContext = createContext<
  WorkOrderStoreApi | undefined
>(undefined)

export interface WorkOrderStoreProviderProps {
  children: ReactNode
}

export const WorkOrderStoreProvider = ({
  children,
}: WorkOrderStoreProviderProps) => {
  const storeRef = useRef<WorkOrderStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createWorkOrderStore(initWorkOrderStore())
  }

  return (
    <WorkOrderStoreContext.Provider value={storeRef.current}>
      {children}
    </WorkOrderStoreContext.Provider>
  )
}

export const useWorkOrderStore = <T,>(
  selector: (store: WorkOrderStore) => T
): T => {
  const workOrderStoreContext = useContext(WorkOrderStoreContext)

  if (!workOrderStoreContext) {
    throw new Error(
      `useWorkOrderStore must be used within WorkOrderStoreProvider`
    )
  }

  return useStore(workOrderStoreContext, selector)
}
