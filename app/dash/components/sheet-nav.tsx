import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { NavList } from "./nav-list"

export function SheetNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <NavList linkClassName="mx-[-0.65rem] flex items-center gap-4 rounded-lx px-3 py-2 text-muted-foreground hover:text-foreground" />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
