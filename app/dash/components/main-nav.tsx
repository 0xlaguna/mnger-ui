"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Package2 } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()

  const isActive = (path: string) =>
    pathname === path ? "text-primary" : "text-muted-foreground"

  const linkList = siteConfig.mainNav.map((link) => {
    return (
      <Link
        key={link.id}
        href={link.href}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive(link.href)}`}
      >
        <link.icon className="h-4 w-4" />
        {link.title}
      </Link>
    )
  })

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="size-6" />
          <span className="">Acme Inc</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto size-8">
          <Bell className="size-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {linkList}
        </nav>
      </div>
    </div>
  )
}
