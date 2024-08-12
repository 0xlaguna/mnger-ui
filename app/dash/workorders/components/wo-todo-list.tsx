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
  const workOrderTableList = workOrderList.map((wo) => {
    return (
      <TableRow key={wo.id}>
        <TableCell>{wo.title}</TableCell>
        <TableCell className="hidden md:table-cell">{wo.description}</TableCell>
        <TableCell className="hidden md:table-cell">
          {new Date(wo.start_date).toString()}
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
