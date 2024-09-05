"use client"

import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import { User } from "@/types/v0/users"
import { GET } from "@/lib/api/api-client"

const useGetMe = () => {
  const session = useSession()

  useEffect(() => {}, [session])

  const token = session.data?.accessToken
  const headers = {
    "x-session-token": token,
  }

  const { isError, isLoading, isSuccess, data, refetch } = useQuery<
    User,
    Error
  >({
    queryKey: ["users-getme"],
    queryFn: () => GET<User>("/users/me", {}, headers),
    enabled: !!token,
  })

  return {
    getMeError: isError,
    getMeLoading: isLoading || !token,
    getMeSuccess: isSuccess,
    getMeData: data,
  }
}

export default useGetMe
