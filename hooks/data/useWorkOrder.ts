"use client"

import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import { GET } from "@/lib/api/api-client"

import { WorkOrder } from "./useWorkOrderList"

export const useWorkOrder = (id?: string) => {
  const session = useSession()

  useEffect(() => {}, [session])

  const token = session.data?.accessToken
  const headers = {
    "x-session-token": token,
  }

  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: ["workorder-single", id],
    queryFn: () => GET<WorkOrder>(`/workorder/${id}`, {}, headers),
    enabled: !!token || !id,
  })

  return {
    workOrderError: isError,
    workOrderLoading: isLoading || !token,
    workOrderSuccess: isSuccess,
    workOrderData: data,
  }
}
