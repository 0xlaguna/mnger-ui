import Link from "next/link"
import { Bell, Home, Package2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

import { GlobalSearch } from "./componentsV2/global-search"
import { MainNav } from "./componentsV2/main-nav"
import { UserNav } from "./componentsV2/user-nav"

// import { MainNav } from "./components/main-nav"
// import { Search } from "./components/search"
// import { UserNav } from "./components/user-nav"

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="hidden flex-col md:flex">
//       <div className="border-b">
//         <div className="flex h-16 items-center px-4">
//           <MainNav className="mx-6" />
//           <div className="ml-auto flex items-center space-x-4">
//             <Search />
//             <UserNav />
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <div className="flex items-center justify-between space-y-2">
//           <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
//         </div>
//         <div>{children}</div>
//       </div>
//     </div>
//   )
// }

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Work Orders
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MainNav />
          <GlobalSearch />
          <UserNav />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dash</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            {/* <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div> */}
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
