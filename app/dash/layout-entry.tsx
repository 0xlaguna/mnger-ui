import { GlobalSearch } from "./components/global-search"
import { MainNav } from "./components/main-nav"
import { SheetNav } from "./components/sheet-nav"
import { UserNav } from "./components/user-nav"

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutEntry({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="bg-muted/40 hidden border-r md:block">
        <MainNav />
      </div>
      <div className="flex flex-col">
        <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
          <SheetNav />
          <GlobalSearch />
          <UserNav />
        </header>
        <main>
          {/* <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dash</h1>
          </div> */}
          {/* <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div> */}
          {children}
        </main>
      </div>
    </div>
  )
}
