"use client"

import { MeStoreProvider } from "@/providers/me-store-provider"
import { MeState } from "@/stores/me-store"

import useGetMe from "@/hooks/data/useGetMe"
import { Skeleton } from "@/components/ui/skeleton"

import LayoutEntry from "./layout-entry"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { getMeData, getMeSession, getMeLoading } = useGetMe()

  if (getMeLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }

  const state = {
    user: getMeData,
    session: getMeSession,
  } satisfies MeState

  return (
    <MeStoreProvider state={state}>
      <LayoutEntry>{children}</LayoutEntry>
    </MeStoreProvider>
  )
}
