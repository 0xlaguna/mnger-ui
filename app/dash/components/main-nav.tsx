import Link from "next/link"
import { Bell, Package2 } from "lucide-react"
import { Button } from "@/components/ui/button"

import { NavList } from "./nav-list"

export function MainNav() {

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
          <NavList linkClassName="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" />
        </nav>
      </div>
    </div>
  )
}
