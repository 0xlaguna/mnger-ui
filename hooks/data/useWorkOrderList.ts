"use client"

import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import { GET } from "@/lib/api/api-client"

export interface WorkOrderListData {
  list: WorkOrder[]
  pages: number
}

export interface WorkOrder {
  id: string
  title: string
  description: string
  start_date: Date
  end_date?: Date
}

interface QueryParams {
  page: number
  search?: string
  per_page: number
  sort_by?: string
  order?: string
}

export const useWorkOrderList = (params: QueryParams) => {
  const session = useSession()

  useEffect(() => {}, [session])

  const token = session.data?.accessToken
  const headers = {
    "x-session-token": token,
  }

  const { isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: ["workorder-list", params],
    queryFn: () => GET<WorkOrderListData>("/workorder/", params, headers),
    enabled: !!token,
  })

  return {
    workorderListError: isError,
    workorderListLoading: isLoading,
    workorderListSuccess: isSuccess,
    workorderListData: data,
    refetchWorkOrderList: refetch,
  }
}
