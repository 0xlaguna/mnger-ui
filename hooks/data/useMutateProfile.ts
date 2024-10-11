"use client"

import { useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import { User } from "@/types/v0/users"
import { PATCH } from "@/lib/api/api-client"

const useMutateProfile = (userId?: string) => {
  const session = useSession()

  useEffect(() => {}, [session, userId])

  const token = session.data?.accessToken
  const headers = {
    "x-session-token": token,
    "Content-Type": "multipart/form-data",
  }

  const { isError, isSuccess, mutate, isPending, data } = useMutation<
    User,
    Error,
    FormData
  >({
    mutationFn: (profileData) =>
      PATCH(`/users/${userId}`, profileData, headers),
  })

  return {
    mutateProfileError: isError,
    mutateProfileSuccess: isSuccess,
    mutateProfile: mutate,
    mutateProfilePending: isPending,
    mutateProfileDara: data,
  }
}

export default useMutateProfile
