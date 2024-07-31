import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  trustHost: true,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith("/dash")

      console.log(auth)

      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dash", nextUrl))
      }
      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
