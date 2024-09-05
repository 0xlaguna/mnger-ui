import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function avatarUrl(filename: string, token: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}/media/avatars?filename=${filename}&token=${token}`
}
