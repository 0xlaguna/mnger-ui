"use client"

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";


export default function Home() {
  const { toast } = useToast();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}>Show Toast</Button>
      </div>
    </main>
  );
}
