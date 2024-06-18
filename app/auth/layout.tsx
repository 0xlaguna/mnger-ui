import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { UserAuthForm } from "./components/user-auth-form"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      {/* <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"> */}
      <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-[url('https://mnger-prod.s3.amazonaws.com/webapp-public/gemimnger-login.jpeg')] bg-cover bg-center" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 size-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          {/* <Image
            src="https://mnger-prod.s3.us-east-1.amazonaws.com/webapp-public/gemimnger-login.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJGMEQCICn5pK%2BaqCGb8ucE3dt%2B%2FCMOEu17FDuqdswe3rwU81AHAiBxwkl2FBmuFuFQZS2av63eygiGOXFT6gGwWHqjpVGb6SrkAggeEAIaDDExNTQyNjMzNzI2OSIMVCguFpKGtq1RGTQwKsEC8Yg2TKgF%2BtsSyFa01r66nNryA8EDnqvDQcFKOApsC%2FI9rOKNCuhHfCx0XYTIIE6o77WL8zYZBdUeDMC6Htu5Iu8VS0OuhxgfiQnULiGDX01eAEFa4tzg36SAJg9eIEVUWI5kLiQep3KOIeg57jrt%2BKIy%2By%2B3tBvGRq8dC%2BviLy6B82m7uqFUCINfFm0Ug2IyAsTjzOPcgEeH4VAONipSDKTP3ua%2FpU8NmkvkrIB35MlXzAuHSsUl0GbghwRfksrvRYpfIYkC%2FZPks5AWpNEtil9ng1eP2X94E8YVGmn8Zvage%2FE23FoYGz9vXucIMP7VUV9Gu7CHClow4etJgPOCzQv7k9WcagwShyoHc9kHkNmU8jOrH9BJKWZXxM0OD0Rj8f6kVAFWHOCooaxSKMPWV5RuRz%2FNQoB4UV2Ne6z6YN9%2BMO3Xg68GOrQCv71orSA0e0PumNcuhGjdiSaJloSx9Lw4Z2gW0ZVVPUrDQp391AxqZPguDTQTURRZBt9F%2B%2BHSA3GbKx6RlovdiAD8o8viivWKvsRZvX1aPRduDzif1dJHX6sHzQlekFGBEgy8B81Um0DCnCqxykA%2FvJpSBuqInEX3yzlOW%2FrpnLD4TgHrikpSGeTJSM67GbBaAesPaB%2BjNmEWarLlvFZ4xl63EJUD0%2Fge5Wo2H1nSmxhhInuZC9qEBnycF%2Bh%2FELY%2FqFU%2F3qv1jfilKDXfZ905JVqgLFPNvNzuVact%2FAV4H2qlM1UtN4KwIVIG37HLvQ74fRfUg7gbl62Gmv9W4R%2BM09ZjCirKnjBKA2Ec0UiDskhIOwhBz6VNnE3t5F3BxuWRG6hD8rYF1ZuvFqMNuNrpnvX2op8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240229T210539Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARVX7SEH2R6I2U2LZ%2F20240229%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7bafc9f20a6c34d7430a111a69a1353fbb661bfc79414fe395a398552f229a4e" // Replace with the actual URL to your image
            alt="Mnger Inc Logo"
            width={24}
            height={24}
          /> */}
          Mnger Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">&ldquo;Time is effort.&rdquo;</p>
            <footer className="text-sm">Mnger Team</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            {/* <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p> */}
          </div>
          <UserAuthForm />
          <p className="text-muted-foreground px-8 text-center text-sm">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-primary underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-primary underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
