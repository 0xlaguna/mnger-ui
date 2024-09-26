"use client"

import { FormEvent, useState } from "react"
import { useMeStore } from "@/providers/me-store-provider"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { avatarUrl } from "@/lib/utils"
import useMutateProfile from "@/hooks/data/useMutateProfile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

const profileFormSchema = z.object({
  avatar:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(FileList)
          .optional()
          .refine((files) => {
            if (files !== undefined && files.length !== 0) {
              return files?.[0]?.size <= MAX_FILE_SIZE
            }
            return true
          }, `Max file size is 5MB.`)
          .refine((files) => {
            if (files !== undefined && files.length !== 0) {
              return ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type)
            }
            return true
          }, ".jpg, .jpeg and .png and files are accepted."),
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  avatar: undefined,
}

export function ProfileForm() {
  const { user, session } = useMeStore((state) => state)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const fileRef = form.register("avatar")
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(
    avatarUrl(user?.avatar, session?.accessToken!!)
  )

  const { mutateProfile } = useMutateProfile(user?.id)

  function setPreview(event: FormEvent<HTMLInputElement>) {
    const files = event.currentTarget.files

    const fileAvatar = files?.[0]
    const urlFileAvatar = fileAvatar
      ? URL.createObjectURL(fileAvatar)
      : undefined
    setAvatarPreview(urlFileAvatar)
  }

  function onSubmit(data: ProfileFormValues) {
    const formData = new FormData()

    if (data.avatar && data.avatar?.length !== 0) {
      const fileAvatar = data.avatar?.[0]
      formData.append("avatar", fileAvatar)
    }

    const hasValues = Boolean(Array.from(formData.entries()).length)

    if (hasValues) {
      mutateProfile(formData)
      toast({ title: "Profile updated" })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Avatar className="size-12">
                  <AvatarImage src={avatarPreview} alt={user?.first_name} />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                Profile picture
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  {...fileRef}
                  onChangeCapture={(e) => setPreview(e)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
