import { Home, ShoppingCart } from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Mnger UI",
  description: "Mnger UI",
  mainNav: [
    {
      id: 1,
      title: "Dashboard",
      href: "/dash",
      icon: Home,
    },
    {
      id: 2,
      title: "Work Orders",
      href: "/dash/workorders",
      icon: ShoppingCart,
    },
  ],
  links: {
    docs: "",
  },
}
