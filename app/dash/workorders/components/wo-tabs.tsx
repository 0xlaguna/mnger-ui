"use client"

import { FileIcon, ListFilterIcon } from "lucide-react"

import { useWorkOrderList } from "@/hooks/data/useWorkOrderList"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { WorkOrderTodoList } from "./wo-todo-list"

export function WorkOrderTabs() {
  const { workorderListData } = useWorkOrderList({ page: 1, per_page: 4 })

  return (
    <Tabs defaultValue="todo">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="todo">ToDo</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                <ListFilterIcon className="size-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Fulfilled
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
            <FileIcon className="size-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value="todo">
        <WorkOrderTodoList workOrderList={workorderListData?.list || []} />
      </TabsContent>
      <TabsContent value="done">
        <WorkOrderTodoList workOrderList={workorderListData?.list || []} />
      </TabsContent>
    </Tabs>
  )
}
