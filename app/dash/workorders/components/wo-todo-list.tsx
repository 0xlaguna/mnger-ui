"use client"

import { useWorkOrderStore } from "@/providers/workorder-store-provider"

import { WorkOrder } from "@/hooks/data/useWorkOrderList"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface WorkOrderTodoListProps {
  workOrderList: WorkOrder[]
}

export function WorkOrderTodoList({ workOrderList }: WorkOrderTodoListProps) {
  const { setSelectedWorkOrderId, selectedWorkOrderId } = useWorkOrderStore(
    (state) => state
  )

  const workOrderTableList = workOrderList.map((wo) => {
    const isSelected = wo.id === selectedWorkOrderId

    return (
      <TableRow
        key={wo.id}
        className={`cursor-pointer ${isSelected ? "bg-muted/50" : ""}`}
        onClick={(e) => {
          e.preventDefault()
          setSelectedWorkOrderId(wo.id)
        }}
      >
        <TableCell>{wo.title}</TableCell>
        <TableCell className="hidden md:table-cell">{wo.description}</TableCell>
        <TableCell className="hidden md:table-cell">
          {new Date(wo.start_date).toDateString()}
        </TableCell>
      </TableRow>
    )
  })

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Work Order</CardTitle>
        <CardDescription>Recent Work orders.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">
                Description
              </TableHead>
              <TableHead className="hidden sm:table-cell">Start Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{workOrderTableList}</TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
