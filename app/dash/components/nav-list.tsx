"use client"

import { siteConfig } from "@/config/site"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface NavListProps {
  linkClassName: string
}

export function NavList({linkClassName}: NavListProps) {
  const pathname = usePathname()

  const isActive = (path: string) =>
    pathname === path ? "text-primary" : "text-muted-foreground"

  return siteConfig.mainNav.map((link) => {
    return (
      <Link
        key={link.id}
        href={link.href}
        className={`${linkClassName} ${isActive(link.href)}`}
      >
        <link.icon className="size-4" />
        {link.title}
      </Link>
    )
  })
}
