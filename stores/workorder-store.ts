import { createStore } from "zustand/vanilla"

export type WorkOrderState = {
  selectedWorkOrderId?: string
}

export type WorkOrderActions = {
  setSelectedWorkOrderId: (id: string) => void
}

export type WorkOrderStore = WorkOrderState & WorkOrderActions

export const initWorkOrderStore = (): WorkOrderState => {
  return { selectedWorkOrderId: undefined }
}

export const defaultInitState: WorkOrderState = {
  selectedWorkOrderId: undefined,
}

export const createWorkOrderStore = (
  initState: WorkOrderState = defaultInitState
) => {
  return createStore<WorkOrderStore>()((set) => ({
    ...initState,
    setSelectedWorkOrderId: (id: string) =>
      set((state) => ({ selectedWorkOrderId: id })),
  }))
}
