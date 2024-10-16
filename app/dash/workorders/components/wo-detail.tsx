"use client"

import { useWorkOrderStore } from "@/providers/workorder-store-provider"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  CreditCardIcon,
  MoveVerticalIcon,
  TruckIcon,
} from "lucide-react"

import { useWorkOrder } from "@/hooks/data/useWorkOrder"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

export function WorkOrderDetail() {
  const { selectedWorkOrderId } = useWorkOrderStore((state) => state)

  const { workOrderData, workOrderLoading } = useWorkOrder(selectedWorkOrderId)

  if (workOrderLoading) {
    return (
      <Card className="overflow-hidden">
        <Icons.spinner className="mr-2 size-4 animate-spin" />
      </Card>
    )
  }

  if (!selectedWorkOrderId) {
    return (
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50 flex flex-row items-start"></CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                Select or add a new Work Order
              </h3>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50 flex flex-row items-start">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Work Order {workOrderData?.title}
          </CardTitle>
          <CardDescription>{workOrderData?.id}</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="size-8">
                <MoveVerticalIcon className="size-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Work Order Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Start Date</span>
              <span>{new Date(workOrderData?.start_date!).toDateString()}</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
      </CardContent>
      <CardFooter className="bg-muted/50 flex flex-row items-center border-t px-6 py-3">
        <div className="text-muted-foreground text-xs">
          Updated <time dateTime="2023-11-23">November 23, 2024</time>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button size="icon" variant="outline" className="size-6">
                <ChevronLeftIcon className="size-3.5" />
                <span className="sr-only">Previous Order</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size="icon" variant="outline" className="size-6">
                <ChevronRightIcon className="size-3.5" />
                <span className="sr-only">Next Order</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  )
}
