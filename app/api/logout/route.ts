import { NextRequest, NextResponse } from "next/server"
import { auth, signOut } from "@/auth"

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await auth()

  if (session) {
    await signOut()
  }

  return Response.json({})
}
